import { gzipSync } from "node:zlib";
export function profileLink(text) {
  const link = "rotatrix://import?v=1&data=" + gzipSync(text, { mtime: 0 }).toString("base64url");
  if (Buffer.byteLength(text) > 2 * 1024 * 1024 || link.length > 8000) throw new Error("Profile exceeds Rotatrix import-link limits");
  return link;
}
