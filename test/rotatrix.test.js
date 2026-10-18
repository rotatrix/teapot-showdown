import test from "node:test";
import assert from "node:assert/strict";
import * as THREE from "three";
import { NavigationSession, NavigationQuery, UNAVAILABLE } from "@openaxis/sdk";
import { createAdapters, interactionTags, readPose } from "../lib/rotatrix-navigation.js";
import { profileLink } from "../lib/profile-link.js";
import { readFileSync } from "node:fs";
import { gunzipSync } from "node:zlib";

function setup() {
  const host = { camera:new THREE.PerspectiveCamera(50, 1.5), object:new THREE.Mesh(new THREE.BoxGeometry(2,4,6)),
    objectOrigin:new THREE.Vector3(), token:{}, enabled:true, gameMode:"6dof", context(){return this.token}, active(){return this.enabled}, mode(){return this.gameMode}, activity(){} };
  return {host, adapters:createAdapters(host)};
}
test("mode tags opt in only to permitted object operations", () => {
  assert.deepEqual(interactionTags("rot"), ["app.teapot_showdown","interaction.object.rotate"]);
  assert.deepEqual(interactionTags("trans"), ["app.teapot_showdown","interaction.object.translate"]);
  assert.deepEqual(interactionTags("6dof"), ["app.teapot_showdown","interaction.object.rotate","interaction.object.translate"]);
});
test("query snapshots report detached poses, projection and transformed bounds", () => {
  const {host,adapters:a}=setup(); host.object.position.set(5,6,7);
  const q=a.object.beginQuery(host.token), c=a.camera.beginQuery(host.token);
  assert.equal(q.resolve("object.bounds"),UNAVAILABLE);
  assert.deepEqual(c.resolve("model.bounds"),{min:[4,4,4],max:[6,8,10]});
  assert.deepEqual(c.resolve("selection.bounds"),{min:[4,4,4],max:[6,8,10]});
  assert.equal(c.resolve("camera.pose").fov,50*Math.PI/180);
  assert.equal(c.resolve("viewport.aspect"),1.5);
  assert.equal(q.resolve("unknown"),UNAVAILABLE);
  host.object.position.x=20;
  const p=q.resolve("object.pose"); p.t[0]=99;
  assert.equal(q.resolve("object.pose").t[0],5);
});
test("constraints report realized poses and stale contexts cannot write", () => {
  const {host,adapters:a}=setup(); const pose={t:[1,2,3],r:[0,Math.PI/2,0]};
  host.gameMode="rot";
  assert.deepEqual(a.object.applyPose(host.token,pose).realizedPose.t,[0,0,0]);
  host.gameMode="trans"; host.object.quaternion.identity();
  assert.deepEqual(a.object.applyPose(host.token,pose).realizedPose.r,[0,0,0]);
  assert.deepEqual(a.camera.applyPose(host.token,pose).realizedPose.t,[0,0,0]);
  const old=host.token; host.token={};
  assert.equal(a.object.applyPose(old,pose).success,false);
  host.enabled=false; assert.equal(a.object.captureContext(),undefined);
});
test("SDK cancels reset gestures, rejects late poses, and accepts a fresh gesture", () => {
  const {host,adapters:a}=setup(); const sent=[], queued=[];
  const client={state:"connected",attachNavigation(){return ()=>{}},captureNavigationSender(){return m=>sent.push(m)}};
  const session=new NavigationSession(client,a.camera,{objectAdapter:a.object,objectObservation:a.readObject,
    observation:a.readCamera,scheduler:{post:f=>queued.push(f),postAt:()=>{}}});
  const flush=()=>{for(let i=0;queued.length;i++){assert.ok(i<100);queued.shift()()}};
  const begin=id=>{
    session.onMotionStart(id);
    session.onNavigationQuery(new NavigationQuery({type:"request",id,method:"navigation.query",params:{gesture_id:id,values:["camera.pose","object.pose"]}},r=>sent.push(r),e=>assert.fail(e)));
    flush();
  };
  const output=(id,x)=>session.onObjectPose({type:"object.pose",gesture_id:id,seq:id,t:[x,0,0],r:[0,0,0]});
  begin(1); output(1,2); flush(); assert.equal(host.object.position.x,2);
  host.token={}; session.contextChanged(); host.object.position.x=0;
  output(1,99); flush(); assert.equal(host.object.position.x,0);
  assert.ok(sent.some(m=>m.type==="motion_cancel" && m.gesture_id===1));
  begin(2); output(2,3); flush(); assert.equal(host.object.position.x,3);
  session.close(); flush();
});
test("install link embeds the exact self-contained, app-scoped bundle", () => {
  const text=readFileSync(new URL("../public/teapot-showdown.rotatrix",import.meta.url),"utf8");
  const url=new URL(profileLink(text));
  assert.equal(gunzipSync(Buffer.from(url.searchParams.get("data"),"base64url")).toString(),text);
  assert.ok(url.href.length<=8000); assert.equal(url.searchParams.get("v"),"1");
  const bundle=JSON.parse(text); assert.deepEqual(bundle.root.definition.triggers,["tag:app.teapot_showdown"]);
  const deps=new Set(bundle.dependencies.map(d=>d.kind+":"+d.name));
  function check(node){ for(const [field,kind] of Object.entries({axis_map:"axis_maps",axis_dominance:"axis_dominance_presets",include_template:"templates"})) if(node[field])assert.ok(deps.has(kind+":"+node[field])); for(const child of node.bindings??[])check(child); }
  check(bundle.root.definition); for(const d of bundle.dependencies)check(d.definition);
});

test("off-origin bowl and ground marker stay fixed through combined-mode rotations", () => {
  const {host,adapters:a}=setup();
  host.objectOrigin.set(0,0.4,0);
  host.object.position.set(2,3,4);
  const bowl = new THREE.Vector3().fromArray(a.readObject().t);
  for (const r of [[0,0,Math.PI/2],[Math.PI/3,0,0],[0,Math.PI/2,0],[0,0,0]]) {
    const result=a.object.applyPose(host.token,{t:bowl.toArray(),r});
    host.object.updateMatrixWorld(true);
    // Same world-point calculation used by the ground marker in scene.js.
    const marker=host.object.localToWorld(host.objectOrigin.clone());
    assert.ok(marker.distanceTo(bowl)<1e-12);
    assert.ok(new THREE.Vector3().fromArray(result.realizedPose.t).distanceTo(bowl)<1e-12);
  }
  const moved=bowl.clone().add(new THREE.Vector3(1,2,3));
  a.object.applyPose(host.token,{t:moved.toArray(),r:[Math.PI/3,0,0]});
  host.object.updateMatrixWorld(true);
  assert.ok(host.object.localToWorld(host.objectOrigin.clone()).distanceTo(moved)<1e-12);
  assert.ok(new THREE.Vector3().fromArray(a.object.beginQuery(host.token).resolve("object.pose").t).distanceTo(moved)<1e-12);
});
test("rotation-only constrains the bowl position and translation-only preserves orientation", () => {
  const {host,adapters:a}=setup(); host.objectOrigin.set(0,0.4,0);
  host.gameMode="rot";
  const before=a.readObject();
  a.object.applyPose(host.token,{t:[9,9,9],r:[0,0,Math.PI/2]});
  assert.ok(new THREE.Vector3().fromArray(a.readObject().t).distanceTo(new THREE.Vector3().fromArray(before.t))<1e-12);
  const orientation=host.object.quaternion.clone();
  host.gameMode="trans";
  a.object.applyPose(host.token,{t:[1,2,3],r:[0,0,0]});
  assert.ok(host.object.quaternion.angleTo(orientation)<1e-12);
  assert.ok(new THREE.Vector3().fromArray(a.readObject().t).distanceTo(new THREE.Vector3(1,2,3))<1e-12);
});
