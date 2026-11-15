// Toyz Race UI (React). Same imperative API as before (see CONTRACT.md, "src/ui/"), so src/main.js and the
// game loop drive it exactly as they did: ui.showMenu(), ui.updateHUD(data) every frame, ui.touch polled, ...
//
// Menus, pause, results and the PWA notices are React components over small external stores; the HUD and the
// touch controls render their markup with React and update the DOM directly (they change every frame).

import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { useLayoutEffect, useRef } from 'react';
import { injectStyles } from '../styles.js';
import { createStore } from '../storage.js';
import { createHUD } from '../hud.js';
import { createTouchControls } from '../touch.js';
import { isTouch } from '../util.js';
import { createStoreHub, useStore } from './store.js';
import { makeKit } from './items.jsx';
import { createMenuModel } from './menuModel.js';
import { Menu } from './Menu.jsx';
import { Hud } from './Hud.jsx';
import { Touch } from './Touch.jsx';
import { createOverlays, Pause, Results } from './Overlays.jsx';
import { PwaLayer } from '../../pwa/PwaLayer.jsx';

function App({ hub, menu, overlays, kit, bump, onMount }) {
  useStore(hub);
  const hudRef = useRef(null);
  const fxRef = useRef(null);
  const touchRef = useRef(null);
  useLayoutEffect(() => onMount({ hud: hudRef.current, fx: fxRef.current, touch: touchRef.current }), [onMount]);
  return (
    <div className="tr-root">
      <Menu m={menu} kit={kit} bump={bump} />
      <Hud nodeRef={hudRef} fxRef={fxRef} />
      {/* on-screen controls (phones): above the HUD, below pause / results */}
      <Touch nodeRef={touchRef} />
      <Pause pause={overlays.pause} kit={kit} />
      <Results results={overlays.results} kit={kit} />
      <PwaLayer menu={menu} overlays={overlays} />
    </div>
  );
}

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
      setCameraView: noop,
      touch: { active: false, throttle: 0, steer: 0, handbrake: false, fire: false },
      records: store.records,
      isCapturingInput: () => false,
      destroy: noop,
    };
  }

  injectStyles();
  const hub = createStoreHub();
  // Every API call flushes React synchronously, so the DOM matches right away (the game reads it back,
  // e.g. getMenuScreen(), and a key press must act on what is on screen).
  let flushing = 0;
  const bump = () => hub.bump();
  const sync = (fn) => {
    if (flushing) return fn();
    let out;
    flushing++;
    try {
      flushSync(() => { out = fn(); });
    } finally {
      flushing--;
    }
    return out;
  };

  const menu = createMenuModel({ tracks, cars, items, handlers, store, bump });
  const overlays = createOverlays({ handlers, bump });
  const { pause, results } = overlays;
  const sound = (n) => { if (handlers.onUiSound) handlers.onUiSound(n); };
  const kit = makeKit({ sound, bump });

  let hud = null;
  let touchc = null;
  const onMount = ({ hud: hudNode, fx, touch }) => {
    hud = createHUD(hudNode, fx);
    touchc = createTouchControls(touch, { handlers, getAutoGas: () => store.getSettings().autoGas, itemSlot: hud.itemEl });
  };

  const reactRoot = createRoot(root);
  flushSync(() => reactRoot.render(<App hub={hub} menu={menu} overlays={overlays} kit={kit} bump={bump} onMount={onMount} />));

  const syncTouch = () => touchc.setActive(hud.visible && isTouch() && !menu.visible && !pause.visible && !results.visible);
  // src/core/stage.js toggles html.tr-touch: follow it (touch-only rows, link labels, on-screen controls)
  const classWatch = typeof MutationObserver !== 'undefined' ? new MutationObserver(() => { syncTouch(); sync(bump); }) : null;
  if (classWatch) classWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  // Multiplayer needs the network: the menu greys it out while offline
  const onNet = () => sync(menu.onNetworkChange);
  window.addEventListener('online', onNet);
  window.addEventListener('offline', onNet);

  // Exactly one layer owns the keyboard: results > pause > menu. With none visible we do nothing at all.
  const activeLayer = () => (results.visible ? results : pause.visible ? pause : menu.visible ? menu : null);

  function onKeyDown(e) {
    const layer = activeLayer();
    if (!layer) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // A key press that itself opened this layer (e.g. the integrator's Esc -> showPause) must not also act on it.
    if (e.timeStamp && e.timeStamp < layer.shownAt) return;
    const res = sync(() => layer.handleKey(e));
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
      sync(() => {
        pause.hide();
        results.hide();
        menu.show(screen, opts);
      });
      syncTouch();
    },
    /** hides every menu screen, the multiplayer "Connecting…" state and the lobby included */
    hideMenu() { sync(menu.hide); syncTouch(); },

    // ---- multiplayer (CONTRACT-NET.md section 3)
    /** { code, joinUrls, isHost, players: [{ id, name, carId, isHost, isYou }], settings: { trackId, laps, difficulty, bots }, status } */
    showLobby(data) {
      sync(() => {
        pause.hide();
        results.hide();
        menu.showLobby(data);
      });
      syncTouch();
    },
    /** any subset of the showLobby shape; no-op when no lobby is open */
    updateLobby(partial) { sync(() => menu.updateLobby(partial)); },
    isLobbyVisible() { return menu.visible && menu.current === 'lobby'; },
    /** leaves "Connecting…" / the lobby and shows the message on the mp screen so the user can retry */
    showMpError(message) {
      sync(() => {
        pause.hide();
        results.hide();
        menu.showMpError(message);
      });
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
      if (!pause.visible) sync(() => pause.show(opts));
      syncTouch();
    },
    hidePause() { sync(pause.hide); syncTouch(); },
    showResults(data) {
      sync(() => {
        pause.hide();
        results.show(data);
      });
      syncTouch();
    },
    hideResults() { sync(results.hide); syncTouch(); },
    /** { masterVolume, musicVolume, sfxVolume, quality, playerName, cameraShake, cameraView, autoGas } */
    getSettings() { return store.getSettings(); },
    /** persist the in-race camera view ('close' | 'medium' | 'far') chosen with C / the camera button */
    setCameraView(v) {
      store.settings.cameraView = v;
      store.saveSettings();
      sync(bump); // the Options screen shows it
    },
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
    getMenuScreen() { return menu.visible ? menu.current : null; },
    /** remembered menu selections: { mode, carId, trackId, laps, opponents, difficulty } */
    getSelection() { return menu.getSelection(); },
    destroy() {
      window.removeEventListener('keydown', onKeyDown, true);
      window.removeEventListener('online', onNet);
      window.removeEventListener('offline', onNet);
      if (classWatch) classWatch.disconnect();
      touchc.destroy();
      hud.destroy();
      reactRoot.unmount();
    },
  };
}
