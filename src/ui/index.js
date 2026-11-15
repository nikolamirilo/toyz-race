// Toyz Race UI: menus, HUD, pause and results, built with React (see ./react/).
// See CONTRACT.md ("src/ui/") for the interface.

import { STORAGE_KEYS, DEFAULT_SETTINGS } from './storage.js';
import { CHAMPIONSHIP_POINTS } from './react/Overlays.jsx';
import { fmtTime } from './util.js';

export { createUI } from './react/createUI.jsx';
export { CHAMPIONSHIP_POINTS, STORAGE_KEYS, DEFAULT_SETTINGS };
export const formatTime = fmtTime;
