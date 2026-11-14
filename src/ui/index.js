// Toyz Race UI: menus, HUD, pause and results. Pure DOM + injected CSS.
// See CONTRACT.md ("src/ui/") for the interface.

import { injectStyles } from './styles.js';
import { createStore, STORAGE_KEYS, DEFAULT_SETTINGS } from './storage.js';
import { createMenu } from './menu.js';
import { createHUD } from './hud.js';
import { createPause, createResults, CHAMPIONSHIP_POINTS } from './overlays.js';
import { createTouchControls } from './touch.js';
import { fmtTime, el, isTouch } from './util.js';

export { CHAMPIONSHIP_POINTS, STORAGE_KEYS, DEFAULT_SETTINGS };
export const formatTime = fmtTime;

export function createUI(root, { tracks = [], cars = [], items = [], handlers = {} } = {}) {
  const store = createStore();

  // Headless (node) fallback: same API, no DOM.
  if (typeof document === 'undefined' || !root) {
    const noop = () => {};
    return {
      showMenu: noop, hideMenu: noop, showHUD: noop, hideHUD: noop, updateHUD: noop, showCountdown: noop,
      flashMessage: noop, showPause: noop, hidePause: noop, showResults: noop, hideResults: noop,
      showLobby: noop, updateLobby: noop, showMpError: noop, isLobbyVisible: () => false, getMenuScreen: () => null,
      getSettings: () => store.getSettings(),
      touch: { active: false, throttle: 0, steer: 0, handbrake: false, fire: false },
      records: store.records,
      isCapturingInput: () => false,
      destroy: noop,
    };
  }

  injectStyles();
  const base = el('div', 'tr-root');
  root.appendChild(base);

  const menu = createMenu(base, { tracks, cars, items, handlers, store });
  const hud = createHUD(base);
  const pause = createPause(base, handlers);
  const results = createResults(base, handlers);
  // On-screen controls (phones): above the HUD, below pause / results. Only while racing with nothing else open.
  const touchc = createTouchControls(base, { handlers, getAutoGas: () => store.getSettings().autoGas, itemSlot: hud.itemEl });
  base.insertBefore(touchc.node, pause.node);
  const syncTouch = () => touchc.setActive(hud.visible && isTouch() && !menu.visible && !pause.visible && !results.visible);
  // src/core/stage.js toggles html.tr-touch; follow it
  const classWatch = typeof MutationObserver !== 'undefined' ? new MutationObserver(syncTouch) : null;
  if (classWatch) classWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

  // Exactly one layer owns the keyboard: results > pause > menu. With none visible we do nothing at all.
  const activeLayer = () => (results.visible ? results : pause.visible ? pause : menu.visible ? menu : null);

  function onKeyDown(e) {
    const layer = activeLayer();
    if (!layer) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // A key press that itself opened this layer (e.g. the integrator's Esc -> showPause) must not also act on it.
    if (e.timeStamp && e.timeStamp < layer.shownAt) return;
    const res = layer.handleKey(e);
    if (res === true) {
      e.preventDefault();
      e.stopPropagation();
    } else if (res === 'pass') {
      e.stopPropagation(); // typing in the name field: keep the keys away from game shortcuts
    }
  }
  window.addEventListener('keydown', onKeyDown, true);

  return {
    /** opts: { joinCode } for screen 'mp' — pre-fills the join form and focuses "Join a game" */
    showMenu(screen = 'title', opts) {
      pause.hide();
      results.hide();
      menu.show(screen, opts);
      syncTouch();
    },
    /** hides every menu screen, the multiplayer "Connecting…" state and the lobby included */
    hideMenu() { menu.hide(); syncTouch(); },

    // ---- multiplayer (CONTRACT-NET.md section 3)
    /** { code, joinUrls, isHost, players: [{ id, name, carId, isHost, isYou }], settings: { trackId, laps, difficulty, bots }, status } */
    showLobby(data) {
      pause.hide();
      results.hide();
      menu.showLobby(data);
      syncTouch();
    },
    /** any subset of the showLobby shape; no-op when no lobby is open */
    updateLobby(partial) { menu.updateLobby(partial); },
    isLobbyVisible() { return menu.lobbyVisible; },
    /** leaves "Connecting…" / the lobby and shows the message on the mp screen so the user can retry */
    showMpError(message) {
      pause.hide();
      results.hide();
      menu.showMpError(message);
      syncTouch();
    },
    showHUD() { hud.show(); syncTouch(); },
    hideHUD() { hud.hide(); syncTouch(); },
    updateHUD(data) {
      hud.update(data);
      if (data && data.item !== undefined) touchc.setItem(data.item);
    },
    showCountdown(text) { hud.showCountdown(text); },
    flashMessage(text, ms) { hud.flashMessage(text, ms); },
    /** opts: { multiplayer: true } -> title "Menu", Resume / Leave race (onQuit), no Restart */
    showPause(opts) {
      if (!pause.visible) pause.show(opts);
      syncTouch();
    },
    hidePause() { pause.hide(); syncTouch(); },
    showResults(data) {
      pause.hide();
      results.show(data);
      syncTouch();
    },
    hideResults() { results.hide(); syncTouch(); },
    /** { masterVolume, musicVolume, sfxVolume, quality, playerName, cameraShake, cameraView, autoGas } */
    getSettings() { return store.getSettings(); },
    /** persist the in-race camera view ('close' | 'medium' | 'far') chosen with C / the camera button */
    setCameraView(v) { store.settings.cameraView = v; store.saveSettings(); },
    /**
     * On-screen touch controls, polled by the integrator every frame (stable object, never replaced):
     * { active: bool — controls are on screen, throttle: -1|0|1, steer: -1|0|1 (+1 = left), handbrake: bool, fire: bool (held) }
     * With the "Auto accelerate" option on, throttle is 1 unless BRAKE is held (-1).
     * Top-edge buttons call handlers.onPauseRequest() / onCameraRequest() / onResetRequest().
     */
    touch: touchc.state,
    records: store.records,

    // ---- extras beyond the contract
    /** true while menu / pause / results owns the keyboard */
    isCapturingInput() { return !!activeLayer(); },
    /** current menu screen name or null: 'title' | 'main' | 'car' | 'track' | 'options' | 'controls' | 'mp' | 'lobby' */
    getMenuScreen() { return menu.visible ? menu.screen : null; },
    /** remembered menu selections: { mode, carId, trackId, laps, opponents, difficulty } */
    getSelection() { return menu.getSelection(); },
    destroy() {
      window.removeEventListener('keydown', onKeyDown, true);
      if (classWatch) classWatch.disconnect();
      touchc.destroy();
      menu.destroy();
      hud.destroy();
      pause.destroy();
      results.destroy();
      base.remove();
    },
  };
}
