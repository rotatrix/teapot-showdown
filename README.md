# Teapot Showdown

Match the solid teapot to the ghost as many times as you can before the clock
runs out. A mini-game for comparing 3D input devices: play with a regular
mouse, a 3Dconnexion SpaceMouse, or a [Rotatrix](https://rotatrix.com) via
OpenAxis.

**Play it:** the built game is committed to [`docs/`](docs/) — with GitHub
Pages set to serve `main` / `docs`, it runs as-is at
`https://<user>.github.io/teapot-showdown/`.

## Game modes

- **Rotation only** — the target is shown for a moment, then hidden; rotate
  from memory
- **Translation only** — move the teapot onto the ghost
- **Rotation + translation** — full 6DoF matching

Every session is recorded locally (browser localStorage). Daily and all-time
leaderboards, plus a [stats page](stats.html) with per-device median motion
graphs. By default the boards are personal — your highest scores, dated, no
name entry. **Booth mode** (in the options) adds per-run name entry and staff
claim chips for running it as a public station.

## Inputs

- **Mouse** — virtual trackball (Holroyd) or tumbler rotation, drag/wheel
  translation
- **SpaceMouse** — needs the 3DxWare driver; the 3DconnexionJS SDK is not
  redistributed and is loaded from 3dconnexion.com
- **Rotatrix** — requires Rotatrix **1.6.0 or newer**, using OpenAxis 1.0.
  The bundled navigation controls work automatically: rotation-only announces
  `interaction.object.rotate`, translation-only announces
  `interaction.object.translate`, and combined mode announces both (hold Shift
  to translate). The camera stays fixed. Configure sensitivity and handedness
  in Rotatrix. HTTPS hosting requires Local HTTPS support under Integrations.

The setup dialog offers an optional **Install Teapot Showdown profile** link
using Rotatrix's import-review flow, plus a downloadable
[profile bundle](public/teapot-showdown.rotatrix). It matches only
`app.teapot_showdown` and includes independent axis maps and dominance settings.
Enable it and place it before broader profiles when existing custom controls
interfere. Review dependency choices in Rotatrix to preserve your mappings.
Disable or replace an older Teapot Showdown profile that uses the obsolete
`object` tag. The optional profile disables axis dominance for simultaneous
three-axis input; the bundled controls retain the user's configured behavior.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:5189
pnpm test       # navigation and profile-link regressions
pnpm build      # rebuilds docs/ (commit it)
```

The integration uses the published `@openaxis/sdk@1.0.0-rc.1` package,
pinned with the lockfile. `OpenAxisConnectionManager` handles reconnection and
metadata; `NavigationSession` owns queries and pose reconciliation. Reset,
preview, and game boundaries invalidate the captured target so old gestures
cannot move a later target. The OpenAxis object origin is the bowl center. Object bounds are omitted so
Rotatrix 1.0 uses that origin as the rotation pivot; camera queries still report
accurate model and selection bounds. Returned poses are converted back to the
mesh origin, keeping the ground marker stationary during rotation.

The install link is generated from the downloadable bundle during dev/build,
using Rotatrix 1.6's gzip/base64url share format. No server fetch or config
change happens until the player opens and confirms the import in Rotatrix.

Before release, test all three game modes with a physical device, Shift in
combined mode, reset during motion, preview transitions, blur/focus, server
restart, and a second game after results. Check both local HTTP and hosted
HTTPS, and review the optional profile on a customized Rotatrix configuration.
