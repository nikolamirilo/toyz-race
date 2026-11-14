// Toyz Race — PWA glue: service worker registration, install prompt, and a small "Install" hint pill.
//
//   import { initPWA, createInstallHint } from './pwa/register.js';
//   initPWA();                                   // once, at startup
//   const hint = createInstallHint();            // appended to #app, hidden
//   hint.setVisible(menuIsVisible);              // call whenever the menu shows / hides
//
// Service workers (and therefore installing + offline play) need a secure context: https:// or http://localhost.
// On plain http://192.168.x.x the game still runs, but nothing here does anything (it fails silently).

const DISMISS_KEY = 'tt.pwa.installHintDismissed';
const RELOAD_KEY = 'tt.pwa.updateReload';
const STYLE_ID = 'tr-pwa-style';

/** @type {any} the stashed `beforeinstallprompt` event (Chromium only) */
let deferredPrompt = null;
let installed = false;
let listening = false;
let initDone = false;
/** @type {Set<(available: boolean) => void>} */
const listeners = new Set();

function hasWindow() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function notify() {
  const v = canInstall();
  for (const cb of [...listeners]) {
    try {
      cb(v);
    } catch (err) {
      console.error(err);
    }
  }
}

function listenForInstall() {
  if (listening || !hasWindow()) return;
  listening = true;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault(); // keep the browser's own mini-infobar away; we show our own button
    deferredPrompt = e;
    notify();
  });
  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    installed = true;
    notify();
  });
}
// Start listening as soon as the module is evaluated: `beforeinstallprompt` can fire early.
listenForInstall();

/** True when running as an installed app (home-screen icon / installed PWA window). */
export function isStandalone() {
  if (!hasWindow()) return false;
  try {
    if (window.matchMedia('(display-mode: standalone), (display-mode: fullscreen), (display-mode: minimal-ui)').matches) {
      // A browser tab that merely went fullscreen (stage.js requests it on phones) also matches display-mode: fullscreen.
      if (!document.fullscreenElement) return true;
    }
  } catch {}
  return navigator.standalone === true; // iOS Safari
}

/** iPhone / iPod / iPad (including iPadOS pretending to be a Mac). */
export function isIOS() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  if (/iPad|iPhone|iPod/.test(ua)) return true;
  return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;
}

/** True when `promptInstall()` can open the browser's native install dialog right now (Chromium: Android / desktop). */
export function canInstall() {
  return !!deferredPrompt && !installed && !isStandalone();
}

/** True when an install button makes sense at all: native prompt available, or iOS where we can show instructions. */
export function canShowInstall() {
  if (installed || isStandalone()) return false;
  return canInstall() || (isIOS() && hasWindow() && window.isSecureContext !== false);
}

/**
 * Subscribe to install availability. `cb(available)` is called immediately with the current state and again whenever
 * it changes (prompt became available, app got installed). Returns an unsubscribe function.
 */
export function onInstallAvailable(cb) {
  listeners.add(cb);
  try {
    cb(canInstall());
  } catch (err) {
    console.error(err);
  }
  return () => listeners.delete(cb);
}

/**
 * Open the install flow. Must be called from a user gesture (click / tap).
 * Resolves with { outcome }:
 *   'accepted' | 'dismissed'  — the native dialog was shown (Android Chrome, desktop Chrome / Edge)
 *   'ios-instructions'        — iOS has no install prompt: tell the player "Share → Add to Home Screen"
 *   'installed'               — already running as an installed app
 *   'unavailable'             — nothing to do (unsupported browser, not a secure context, or prompt not offered yet)
 */
export async function promptInstall() {
  if (installed || isStandalone()) return { outcome: 'installed' };
  if (deferredPrompt) {
    const ev = deferredPrompt;
    deferredPrompt = null; // a prompt event can be used only once
    try {
      await ev.prompt();
      const choice = await ev.userChoice;
      notify();
      return { outcome: choice && choice.outcome === 'accepted' ? 'accepted' : 'dismissed' };
    } catch {
      notify();
      return { outcome: 'unavailable' };
    }
  }
  if (isIOS()) return { outcome: 'ios-instructions' };
  return { outcome: 'unavailable' };
}

async function registerServiceWorker({ applyWaitingOnLaunch }) {
  const base = import.meta.env.BASE_URL || '/';
  const url = base + 'sw.js';
  const hadController = !!navigator.serviceWorker.controller;
  const launchedAt = hasWindow() && window.performance ? performance.now() : 0;
  const reg = await navigator.serviceWorker.register(url, { scope: base });

  // An update that was downloaded during an earlier session but could not take over (the app was never fully closed)
  // is applied right now, at launch, with a single early reload. Updates found during THIS session are left waiting:
  // they take effect on the next start, so a race is never interrupted.
  if (applyWaitingOnLaunch && hadController && reg.waiting && launchedAt < 4000) {
    let already = false;
    try {
      already = sessionStorage.getItem(RELOAD_KEY) === '1';
      sessionStorage.setItem(RELOAD_KEY, '1');
    } catch {
      already = true; // no storage: do not risk a reload loop
    }
    if (!already) {
      navigator.serviceWorker.addEventListener('controllerchange', () => window.location.reload(), { once: true });
      reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  } else {
    try {
      sessionStorage.removeItem(RELOAD_KEY);
    } catch {}
  }
  return reg;
}

async function removeServiceWorkers() {
  // Dev: make sure a service worker left over from a production build on this origin is gone (it would break HMR).
  const regs = await navigator.serviceWorker.getRegistrations();
  await Promise.all(regs.map((r) => r.unregister()));
}

/**
 * Call once at startup. Registers the service worker in production builds only; in dev it removes any leftover one.
 * Never throws; resolves with the ServiceWorkerRegistration or null (dev, unsupported, or not https / localhost).
 * @param {{ applyWaitingOnLaunch?: boolean }} [opts]
 * @returns {Promise<ServiceWorkerRegistration | null>}
 */
export function initPWA(opts = {}) {
  if (initDone) return Promise.resolve(null);
  initDone = true;
  listenForInstall();
  const { applyWaitingOnLaunch = true } = opts;
  if (!hasWindow() || !('serviceWorker' in navigator) || window.isSecureContext === false) return Promise.resolve(null);
  if (!import.meta.env.PROD) {
    return removeServiceWorkers().then(
      () => null,
      () => null,
    );
  }
  return new Promise((resolve) => {
    const go = () =>
      registerServiceWorker({ applyWaitingOnLaunch }).then(resolve, () => resolve(null)); // fail silently
    if (document.readyState === 'complete') go();
    else window.addEventListener('load', go, { once: true });
  });
}

// ---------------------------------------------------------------------------------------------------------------------
// Install hint pill

const HINT_CSS = `
.tr-pwa-hint{position:absolute; top:max(.9em, env(safe-area-inset-top, 0px)); right:max(.9em, env(safe-area-inset-right, 0px)); z-index:40;
  display:none; align-items:center; gap:.15em; max-width:min(26em, 70%); pointer-events:auto;
  font:800 clamp(11px, 1.9vmin, 24px)/1.2 "Avenir Next","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif;
  color:#0b0f22; background:linear-gradient(180deg,#ffd02e,#ffb224); border:.16em solid #0b0f22; border-radius:999px;
  box-shadow:.14em .18em 0 #0b0f22; padding:0; -webkit-user-select:none; user-select:none; -webkit-tap-highlight-color:transparent;
  animation:tr-pwa-in .28s ease-out both}
.tr-pwa-hint *{box-sizing:border-box}
.tr-pwa-hint.on{display:inline-flex}
.tr-pwa-hint.ios-open{border-radius:1.1em; align-items:flex-start; background:#fff6e0}
.tr-pwa-hint button{font:inherit; color:inherit; background:none; border:0; margin:0; cursor:pointer; touch-action:manipulation}
.tr-pwa-go{display:inline-flex; align-items:center; gap:.45em; padding:.5em .35em .46em .85em; text-align:left; letter-spacing:.01em}
.tr-pwa-go svg{width:1.15em; height:1.15em; flex:none}
.tr-pwa-go:hover .tr-pwa-label, .tr-pwa-go:focus-visible .tr-pwa-label{text-decoration:underline}
.tr-pwa-x{flex:none; width:1.9em; height:1.9em; margin-right:.2em; border-radius:50%; font-size:1em; line-height:1; display:inline-flex; align-items:center; justify-content:center; opacity:.7}
.tr-pwa-x:hover, .tr-pwa-x:focus-visible{opacity:1; background:rgba(11,15,34,.14)}
.tr-pwa-hint button:focus-visible{outline:.14em solid #0b0f22; outline-offset:-.1em; border-radius:999px}
.tr-pwa-ios{display:none; font-weight:600; padding:.6em .2em .6em .9em}
.tr-pwa-ios b{font-weight:800}
.tr-pwa-ios svg{width:1em; height:1em; vertical-align:-.14em}
.tr-pwa-hint.ios-open .tr-pwa-ios{display:block}
.tr-pwa-hint.ios-open .tr-pwa-go{display:none}
.tr-pwa-hint.ios-open .tr-pwa-x{margin-top:.25em}
@keyframes tr-pwa-in{from{opacity:0; transform:translateY(-.6em)} to{opacity:1; transform:none}}
@media (prefers-reduced-motion: reduce){.tr-pwa-hint{animation:none}}
`;

const ICON_DOWNLOAD =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M6.5 10.5 12 16l5.5-5.5M4 21h16"/></svg>';
const ICON_SHARE =
  '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 6.5 12 2.5l4 4M7 10H5v11h14V10h-2"/></svg>';

function isDismissed() {
  try {
    return !!localStorage.getItem(DISMISS_KEY);
  } catch {
    return false;
  }
}

/**
 * Small dismissible "Install Toyz Race" pill, top-right inside the stage (#app). Created hidden.
 * It only ever shows when: setVisible(true) was called, the app is not already installed / standalone, the player has
 * not dismissed it before, and installing is actually possible (native prompt available, or iOS instructions).
 *
 * @param {{ parent?: HTMLElement | null, onOutcome?: (outcome: string) => void }} [opts]
 * @returns {{ el: HTMLElement, setVisible(v: boolean): void, show(): void, hide(): void, dismiss(): void, destroy(): void, readonly visible: boolean }}
 */
export function createInstallHint(opts = {}) {
  const parent = opts.parent || document.getElementById('app') || document.body;

  if (!document.getElementById(STYLE_ID)) {
    const st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = HINT_CSS;
    document.head.appendChild(st);
  }

  const el = document.createElement('div');
  el.className = 'tr-pwa-hint';
  el.setAttribute('role', 'region');
  el.setAttribute('aria-label', 'Install app');
  el.innerHTML =
    '<button type="button" class="tr-pwa-go">' + ICON_DOWNLOAD + '<span class="tr-pwa-label">Install Toyz Race</span></button>' +
    '<div class="tr-pwa-ios">To install: tap <b>Share</b> ' + ICON_SHARE + ' in the browser bar, then <b>Add to Home Screen</b>.</div>' +
    '<button type="button" class="tr-pwa-x" aria-label="Dismiss">✕</button>';
  const goBtn = el.querySelector('.tr-pwa-go');
  const xBtn = el.querySelector('.tr-pwa-x');

  let wanted = false;
  let dismissed = isDismissed();
  let destroyed = false;

  function refresh() {
    if (destroyed) return;
    const on = wanted && !dismissed && canShowInstall();
    el.classList.toggle('on', on);
    if (!on) el.classList.remove('ios-open');
  }

  function dismiss() {
    dismissed = true;
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    refresh();
  }

  // Keep taps on the pill away from the game's own pointer / touch handlers underneath.
  for (const type of ['pointerdown', 'pointerup', 'touchstart', 'touchend', 'mousedown', 'click']) {
    el.addEventListener(type, (e) => e.stopPropagation());
  }
  goBtn.addEventListener('click', async () => {
    const { outcome } = await promptInstall();
    if (outcome === 'ios-instructions') el.classList.add('ios-open');
    else if (outcome === 'accepted' || outcome === 'installed') refresh();
    if (opts.onOutcome) opts.onOutcome(outcome);
    if (outcome !== 'ios-instructions') refresh();
  });
  xBtn.addEventListener('click', dismiss);

  const off = onInstallAvailable(refresh);
  let mq = null;
  try {
    mq = window.matchMedia('(display-mode: standalone), (display-mode: fullscreen)');
    mq.addEventListener('change', refresh);
  } catch {
    mq = null;
  }

  parent.appendChild(el);
  refresh();

  return {
    el,
    setVisible(v) {
      wanted = !!v;
      refresh();
    },
    show() {
      this.setVisible(true);
    },
    hide() {
      this.setVisible(false);
    },
    dismiss,
    destroy() {
      destroyed = true;
      off();
      if (mq) mq.removeEventListener('change', refresh);
      el.remove();
    },
    get visible() {
      return el.classList.contains('on');
    },
  };
}
