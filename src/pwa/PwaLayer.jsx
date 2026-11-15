// PWA notices, top-right on the title / main menu only (never during a race):
//   - "Install Toyz Race" (Chromium install dialog, or iOS "Share → Add to Home Screen" instructions)
//   - "Ready to play offline" once the first download of the game files has finished
//   - "Update ready" when a new version downloaded in the background, with Restart / Later
// A waiting update is also applied on its own while the app is hidden on one of these menu screens.

import { useEffect, useState, useSyncExternalStore } from 'react';
import { pwaStore, canShowInstall, promptInstall, applyUpdate, markOfflineReadySeen } from './register.js';

const DISMISS_KEY = 'tt.pwa.installHintDismissed';
const SAFE_SCREENS = ['title', 'main'];

const CSS = `
.tr-pwa{position:absolute; top:calc(.9em + var(--sat)); right:calc(.9em + var(--sar)); z-index:40; display:flex; flex-direction:column; align-items:flex-end; gap:.5em;
  max-width:min(26em, 60%); pointer-events:none; font-weight:800; font-size:.92em}
.tr-pwa > *{pointer-events:auto; animation:tr-pwa-in .28s ease-out both}
.tr-pwa button{font:inherit; color:inherit; background:none; border:0; margin:0; cursor:pointer; touch-action:manipulation}
.tr-pwa-pill{display:inline-flex; align-items:center; color:var(--ink); background:linear-gradient(180deg,#ffd02e,#ffb224); border:.16em solid var(--ink); border-radius:999px; box-shadow:.14em .18em 0 var(--ink)}
.tr-pwa-pill.ios{border-radius:1.1em; background:#fff6e0; align-items:flex-start}
.tr-pwa-go{display:inline-flex; align-items:center; gap:.45em; padding:.5em .35em .46em .85em; text-align:left}
.tr-pwa-go svg{width:1.15em; height:1.15em; flex:none}
.tr-pwa-go:hover span, .tr-pwa-go:focus-visible span{text-decoration:underline}
.tr-pwa-ios{font-weight:600; padding:.6em .2em .6em .9em}
.tr-pwa-ios b{font-weight:800}
.tr-pwa-ios svg{width:1em; height:1em; vertical-align:-.14em}
.tr-pwa-x{flex:none; width:1.9em; height:1.9em; margin:.1em .2em .1em 0; border-radius:50%; line-height:1; display:inline-flex; align-items:center; justify-content:center; opacity:.7}
.tr-pwa-x:hover, .tr-pwa-x:focus-visible{opacity:1; background:rgba(11,15,34,.14)}
.tr-pwa-card{display:flex; align-items:center; gap:.7em; padding:.55em .6em .55em .9em; color:var(--cream); background:var(--panel); border:.14em solid var(--line); border-radius:.9em;
  -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); box-shadow:0 .4em 1.2em rgba(0,0,0,.35)}
.tr-pwa-card small{display:block; font-weight:600; color:var(--muted)}
.tr-pwa-card .tr-pwa-ic{flex:none; font-size:1.3em}
.tr-pwa-card .tr-pwa-btn{padding:.4em .85em; border-radius:.6em; background:var(--yellow); color:var(--ink); border:.14em solid var(--ink); box-shadow:0 .16em 0 var(--ink); font-family:var(--display); font-style:italic; text-transform:uppercase; letter-spacing:.03em}
.tr-pwa-card .tr-pwa-btn.alt{background:transparent; color:var(--muted); border-color:transparent; box-shadow:none}
.tr-pwa button:focus-visible{outline:.14em solid var(--cream); outline-offset:.1em}
@keyframes tr-pwa-in{from{opacity:0; transform:translateY(-.6em)} to{opacity:1; transform:none}}
@media (prefers-reduced-motion: reduce){.tr-pwa > *{animation:none}}
`;

const ICON_DOWNLOAD = (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12M6.5 10.5 12 16l5.5-5.5M4 21h16" /></svg>
);
const ICON_SHARE = (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3M8 6.5 12 2.5l4 4M7 10H5v11h14V10h-2" /></svg>
);

function injectCss() {
  if (typeof document === 'undefined' || document.getElementById('tr-pwa-style')) return;
  const s = document.createElement('style');
  s.id = 'tr-pwa-style';
  s.textContent = CSS;
  document.head.appendChild(s);
}

const readDismissed = () => {
  try {
    return !!localStorage.getItem(DISMISS_KEY);
  } catch {
    return false;
  }
};

// keep taps on the notices away from the game's own pointer / touch handlers underneath
const stop = (e) => e.stopPropagation();
const shield = { onPointerDown: stop, onPointerUp: stop, onTouchStart: stop, onTouchEnd: stop, onMouseDown: stop };

export function PwaLayer({ menu, overlays }) {
  injectCss();
  const pwa = useSyncExternalStore(pwaStore.subscribe, pwaStore.get, pwaStore.get);
  const [dismissed, setDismissed] = useState(readDismissed);
  const [ios, setIos] = useState(false);
  const [later, setLater] = useState(false);

  // only on the title / main menu, with nothing else on top
  const safe = menu.visible && SAFE_SCREENS.includes(menu.current) && !overlays.pause.visible && !overlays.results.visible;

  // Apply a downloaded update by itself while the app is in the background on a safe screen.
  useEffect(() => {
    if (!pwa.updateReady || !safe) return undefined;
    const onHide = () => { if (document.visibilityState === 'hidden') applyUpdate(); };
    document.addEventListener('visibilitychange', onHide);
    return () => document.removeEventListener('visibilitychange', onHide);
  }, [pwa.updateReady, safe]);

  // "Ready offline" is a one-off: it goes away by itself
  useEffect(() => {
    if (!pwa.offlineReady || !safe) return undefined;
    const t = setTimeout(markOfflineReadySeen, 6000);
    return () => clearTimeout(t);
  }, [pwa.offlineReady, safe]);

  if (!safe) return null;
  const showInstall = !dismissed && canShowInstall();
  const dismissInstall = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
  };

  return (
    <div className="tr-pwa">
      {pwa.updateReady && !later ? (
        <div className="tr-pwa-card" role="status" {...shield}>
          <span className="tr-pwa-ic" aria-hidden="true">✨</span>
          <span>New version ready<small>Downloaded in the background</small></span>
          <button type="button" className="tr-pwa-btn" onClick={applyUpdate}>Restart</button>
          <button type="button" className="tr-pwa-btn alt" onClick={() => setLater(true)}>Later</button>
        </div>
      ) : null}
      {pwa.offlineReady ? (
        <div className="tr-pwa-card" role="status" {...shield}>
          <span className="tr-pwa-ic" aria-hidden="true">✔</span>
          <span>Ready to play offline<small>Everything except multiplayer works with no connection</small></span>
          <button type="button" className="tr-pwa-x" aria-label="Dismiss" onClick={markOfflineReadySeen}>✕</button>
        </div>
      ) : null}
      {showInstall ? (
        <div className={'tr-pwa-pill' + (ios ? ' ios' : '')} role="region" aria-label="Install app" {...shield}>
          {ios ? (
            <div className="tr-pwa-ios">To install: tap <b>Share</b> {ICON_SHARE} in the browser bar, then <b>Add to Home Screen</b>.</div>
          ) : (
            <button
              type="button"
              className="tr-pwa-go"
              onClick={async () => {
                const { outcome } = await promptInstall();
                if (outcome === 'ios-instructions') setIos(true);
              }}
            >
              {ICON_DOWNLOAD}
              <span>Install Toyz Race</span>
            </button>
          )}
          <button type="button" className="tr-pwa-x" aria-label="Dismiss" onClick={dismissInstall}>✕</button>
        </div>
      ) : null}
    </div>
  );
}
