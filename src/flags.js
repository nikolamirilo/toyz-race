// Build-time feature flags.
//
// Values are substituted by Vite's `define` (see vite.config.js), so a disabled feature is
// dead-code-eliminated from the bundle instead of merely hidden: no lobby UI, no WebSocket
// client, no relay endpoint. Flipping a flag therefore needs a rebuild, not a redeploy.
//
// MULTIPLAYER is OPT-IN. With the env var unset — and in plain node, where `define` never runs
// (tests, the UI harness) — it is OFF. Turn it on with:
//
//     VITE_MULTIPLAYER=1 npm run dev        (or: npm run dev:mp)
//     VITE_MULTIPLAYER=1 npm run build      (or: npm run build:mp)
//     VITE_MULTIPLAYER=1 npm run serve      (or: npm run serve:mp)   <- relay for the built game
//
// `typeof` keeps this safe to import outside a Vite build; esbuild still folds the whole
// expression to a literal when the flag IS defined, which is what makes the stripping work.
/* global __MULTIPLAYER__ */
export const MULTIPLAYER = typeof __MULTIPLAYER__ === 'undefined' ? false : __MULTIPLAYER__;
