// The "stage" is the #app element that holds the canvas and the UI. On phones the game is always landscape:
// we ask the browser to lock orientation where it can (Android, installed app), and when the phone is still
// upright we rotate the whole stage by 90° with CSS so the picture is landscape anyway.
const listeners = [];

function detectPhone() {
  if (typeof window === 'undefined') return false;
  const coarse = window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
  const touch = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
  const small = Math.min(window.screen.width, window.screen.height) <= 900;
  const forced = /[?&]mobile=1/.test(location.search);
  return forced || (coarse && touch && small);
}

export const stage = {
  el: null,
  width: 1280,
  height: 720,
  rotated: false,
  isTouch: false, // touch-first device (phone / small tablet): show touch controls, lighter graphics
  onChange(cb) { listeners.push(cb); },
};

function layout() {
  const el = stage.el;
  // The on-screen keyboard shrinks the viewport; keep the stage as it is while a text field is being edited.
  const ae = document.activeElement;
  if (stage.isTouch && ae && (ae.tagName === 'INPUT' || ae.tagName === 'TEXTAREA') && stage.width > 0 && stage.el.style.width) return;
  const w = window.innerWidth, h = window.innerHeight;
  const rotate = stage.isTouch && h > w;
  stage.rotated = rotate;
  if (rotate) {
    stage.width = h; stage.height = w;
    el.style.width = `${h}px`;
    el.style.height = `${w}px`;
    el.style.left = `${w}px`;
    el.style.top = '0px';
    el.style.transformOrigin = '0 0';
    el.style.transform = 'rotate(90deg)';
  } else {
    stage.width = w; stage.height = h;
    el.style.width = `${w}px`;
    el.style.height = `${h}px`;
    el.style.left = '0px';
    el.style.top = '0px';
    el.style.transform = 'none';
  }
  document.documentElement.classList.toggle('tr-touch', stage.isTouch);
  document.documentElement.classList.toggle('tr-rotated', rotate);
  for (const cb of listeners) cb(stage);
}

async function tryLockLandscape() {
  if (!stage.isTouch) return;
  try {
    const root = document.documentElement;
    const standalone = window.matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches;
    if (!standalone && !document.fullscreenElement && root.requestFullscreen) {
      await root.requestFullscreen({ navigationUI: 'hide' });
    }
  } catch (e) { /* fullscreen not allowed (e.g. iPhone Safari) — CSS rotation covers it */ }
  try {
    if (screen.orientation && screen.orientation.lock) await screen.orientation.lock('landscape');
  } catch (e) { /* not supported — CSS rotation covers it */ }
}

export function initStage() {
  stage.el = document.getElementById('app');
  stage.isTouch = detectPhone();
  layout();
  window.addEventListener('resize', layout);
  document.addEventListener('focusout', () => setTimeout(layout, 120));
  window.addEventListener('orientationchange', () => setTimeout(layout, 60));
  if (window.visualViewport) window.visualViewport.addEventListener('resize', layout);
  // Orientation lock needs a user gesture; retry on taps until it sticks.
  window.addEventListener('pointerup', tryLockLandscape, { passive: true });
  // No pinch zoom / double-tap zoom / pull-to-refresh while playing.
  document.addEventListener('gesturestart', (e) => e.preventDefault());
  document.addEventListener('touchmove', (e) => { if (e.touches.length > 1) e.preventDefault(); }, { passive: false });
  return stage;
}
