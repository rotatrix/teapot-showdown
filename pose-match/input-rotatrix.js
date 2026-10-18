// OpenAxis 1.0: SDK-owned queries, gesture ordering and pose reconciliation.
import { OpenAxisClient, OpenAxisConnectionManager, NavigationSession } from "@openaxis/sdk";
import { createAdapters, interactionTags } from "../lib/rotatrix-navigation.js";
import { settings, ui, game, inPreview, setBackendStatus } from "./state.js";
import { camera, movable, PIVOT_LOCAL } from "./scene.js";
import { bumpActivity } from "./attract.js";

let connection;
let session;
let context = {};
let engaged = false;
let hidden = false;
let transition = Promise.resolve();
const url = location.protocol === "https:" ? "wss://localhost:6609" : "ws://localhost:6607";

export function invalidateRotatrixContext() {
  context = {};
  session?.contextChanged();
}
function refresh() {
  connection?.refreshMetadata().catch(error => console.debug("OpenAxis metadata refresh interrupted", error));
}
function resume() {
  transition = transition.then(() => {
    if (engaged && !hidden) void connection.start().catch(error => console.error("OpenAxis connection failed", error));
  });
  void transition.catch(error => console.error("OpenAxis resume failed", error));
}
function stop() {
  invalidateRotatrixContext();
  transition = transition.then(() => connection?.stop());
  // Failed teardown must not permit a second connection owner.
  void transition.catch(error => console.error("OpenAxis shutdown failed", error));
}
export function releaseRotatrix() { engaged = false; stop(); }
export function engageRotatrix() {
  if (!connection) initRotatrix();
  engaged = true;
  invalidateRotatrixContext();
  refresh();
  resume();
}
// Availability only: no hello/tags, so probing never activates a profile.
// Use the same endpoint as the actual SDK connection.
export function probeRotatrix(timeoutMs = 1200) {
  return new Promise(resolve => {
    let ws;
    try { ws = new WebSocket(url); } catch { resolve(false); return; }
    const finish = available => { clearTimeout(timer); ws.close(); resolve(available); };
    const timer = setTimeout(() => finish(false), timeoutMs);
    ws.onopen = () => finish(true);
    ws.onerror = () => finish(false);
    ws.onclose = () => { clearTimeout(timer); resolve(false); };
  });
}
function initRotatrix() {
  const client = new OpenAxisClient({ clientName: "teapot-showdown", url });
  const adapters = createAdapters({
    camera, object: movable, objectOrigin: PIVOT_LOCAL, context: () => context,
    active: () => engaged && !hidden && ui.inputMode === "rotatrix" && game.state === "running" && !inPreview(),
    mode: () => settings.gameMode, activity: bumpActivity,
  });
  session = new NavigationSession(client, adapters.camera, {
    observation: adapters.readCamera,
    objectAdapter: adapters.object, objectObservation: adapters.readObject,
  });
  connection = new OpenAxisConnectionManager(client, {
    metadata: () => ({
      capabilities: ["navigation"],
      // Retain interaction tags during preview so the ball stays in object mode.
      tags: engaged ? interactionTags(settings.gameMode) : [],
      focused: !hidden && !document.hidden && document.hasFocus(),
    }),
    onState(state) {
      setBackendStatus("rotatrix", "OpenAxis: " + state, state === "ready" ? "pill ok" : "pill err");
    },
  });
  window.addEventListener("focus", refresh);
  window.addEventListener("blur", refresh);
  document.addEventListener("visibilitychange", refresh);
  window.addEventListener("pagehide", event => {
    hidden = true;
    stop();
    if (!event.persisted) void transition.then(() => session.close()).catch(console.error);
  });
  window.addEventListener("pageshow", () => { hidden = false; resume(); refresh(); });
  window.addEventListener("resize", () => session.nativeCameraChanged());
}
