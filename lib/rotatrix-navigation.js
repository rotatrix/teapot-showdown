import * as THREE from "three";
import { UNAVAILABLE } from "@openaxis/sdk";

export function readPose(object) {
  const q = object.quaternion;
  const length = Math.hypot(q.x, q.y, q.z);
  const scale = length < 1e-8 ? 0 : 2 * Math.atan2(length, q.w) / length;
  return { t: object.position.toArray(), r: [q.x * scale, q.y * scale, q.z * scale] };
}
export function interactionTags(mode) {
  return ["app.teapot_showdown",
    ...(mode !== "trans" ? ["interaction.object.rotate"] : []),
    ...(mode !== "rot" ? ["interaction.object.translate"] : [])];
}
// Replace the host context at each reset and preview boundary.
export function createAdapters(host) {
  const current = context => context === host.context() && host.active();
  const captureContext = () => host.active() ? host.context() : undefined;
  const readCamera = () => ({ ...readPose(host.camera), fov: host.camera.fov * Math.PI / 180 });
  // The game objects are rigid meshes directly under the scene. OpenAxis uses
  // the bowl center as their logical origin; Three.js keeps its geometry origin.
  const originOffset = () => host.objectOrigin.clone().applyQuaternion(host.object.quaternion);
  const readObject = () => ({
    ...readPose(host.object),
    t: originOffset().add(host.object.position).toArray(),
  });
  const bounds = () => {
    host.object.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(host.object, true);
    return { min: box.min.toArray(), max: box.max.toArray() };
  };
  const capture = (pose, facts) => ({
    initialObservation: () => structuredClone(pose),
    resolve: name => Object.hasOwn(facts, name) ? structuredClone(facts[name]) : UNAVAILABLE,
  });
  return {
    readCamera, readObject,
    camera: {
      captureContext, isCurrent: current,
      beginQuery() {
        const pose = readCamera();
        const objectBounds = bounds();
        return capture(pose, {
          "document.id": "teapot-showdown", "camera.pose": pose,
          "world.orientation": { forward: [0, 0, -1], up: [0, 1, 0], handedness: "right" },
          "viewport.aspect": host.camera.aspect,
          "model.bounds": objectBounds, "selection.bounds": objectBounds,
        });
      },
      // Camera movement is constrained: report the actual fixed viewpoint.
      applyPose: context => ({ success: current(context), realizedPose: readCamera() }),
    },
    object: {
      captureContext, isCurrent: current,
      beginQuery() {
        const pose = readObject();
        // In 1.0 Rotatrix prefers the bounds center over the transform origin.
        // Omit this optional fact to retain the bowl pivot. Camera queries still
        // expose the real geometry through model.bounds and selection.bounds.
        return capture(pose, { "object.pose": pose });
      },
      applyPose(context, pose) {
        if (!current(context)) return { success: false };
        const bowlPosition = new THREE.Vector3().fromArray(
          host.mode() === "rot" ? readObject().t : pose.t,
        );
        if (host.mode() !== "trans") {
          const angle = Math.hypot(...pose.r);
          const scale = angle < 1e-8 ? 0.5 : Math.sin(angle / 2) / angle;
          host.object.quaternion.set(...pose.r.map(v => v * scale), Math.cos(angle / 2));
        }
        host.object.position.copy(bowlPosition).sub(originOffset());
        host.activity();
        return { success: true, realizedPose: readObject() };
      },
    },
  };
}
