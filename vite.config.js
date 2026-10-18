import { readFileSync } from "node:fs";
import { profileLink } from "./lib/profile-link.js";
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [{
    name: "rotatrix-profile-link",
    transformIndexHtml(html) {
      return html.replace(/\r\n/g, "\n").replaceAll("__ROTATRIX_PROFILE_LINK__", profileLink(readFileSync(new URL("./public/teapot-showdown.rotatrix", import.meta.url), "utf8")));
    },
  }],
  server: {
    port: 5189,
    strictPort: true,
  },

  // relative asset URLs so the committed build works from any path
  // (github.io/<repo>/, a local file server, ...)
  base: "./",

  build: {
    // built site is committed so GitHub Pages can serve it from /docs
    outDir: "docs",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        stats: resolve(__dirname, "stats.html"),
      },
    },
  },
});
