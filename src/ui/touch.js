// On-screen touch controls (markup: react/Touch.jsx) for phones / small tablets (html.tr-touch). Shown only while the HUD is up and no
// menu / pause / results layer is open. The integrator reads `state` (exposed as ui.touch) every frame.
//
// Pointer Events + pointer capture, so several fingers work at once (steer + gas + item). A finger that slides
// from one button onto its neighbour of the same group (left <-> right, gas <-> brake) switches without lifting.
// Hit-testing uses document.elementFromPoint, which is correct when the stage is CSS-rotated.


const GROUP = { left: 'steer', right: 'steer', gas: 'pedal', brake: 'pedal', drift: 'drift', fire: 'fire' };
const SLIDES = { steer: true, pedal: true };

/** Controller over the markup rendered by react/Touch.jsx (`node` = .tr-tc). */
export function createTouchControls(node, { handlers, getAutoGas, itemSlot }) {
  const h = handlers || {};
  /** Stable object: the integrator keeps a reference and polls it. */
  const state = { active: false, throttle: 0, steer: 0, handbrake: false, fire: false };

  const itemBtn = node.querySelector('.tr-tc-item');
  const itemIc = itemBtn.querySelector('i');
  const buttons = Array.from(node.querySelectorAll('[data-tc]'));
  if (itemSlot) {
    // the HUD item slot doubles as a fire button
    itemSlot.setAttribute('data-tc', 'fire');
    buttons.push(itemSlot);
  }
  buttons.forEach((b) => { b._tc = b.getAttribute('data-tc'); });

  const ptrs = new Map(); // pointerId -> { el, name, seq }
  let seq = 0;
  let auto = false;

  function recompute() {
    let left = 0, right = 0, gas = false, brake = false, drift = false, fire = false;
    ptrs.forEach((p) => {
      if (p.name === 'left') left = Math.max(left, p.seq);
      else if (p.name === 'right') right = Math.max(right, p.seq);
      else if (p.name === 'gas') gas = true;
      else if (p.name === 'brake') brake = true;
      else if (p.name === 'drift') drift = true;
      else if (p.name === 'fire') fire = true;
    });
    // two thumbs on both steer buttons: the later press wins. +1 = left (keyboard convention)
    state.steer = left || right ? (left > right ? 1 : -1) : 0;
    state.throttle = !state.active ? 0 : brake ? -1 : gas || auto ? 1 : 0;
    state.handbrake = drift;
    state.fire = fire;
    for (let i = 0; i < buttons.length; i++) {
      const b = buttons[i];
      let on = false;
      ptrs.forEach((p) => { if (p.el === b) on = true; });
      if (b._on !== on) {
        b._on = on;
        b.classList.toggle('on', on);
      }
    }
  }

  function press(e) {
    if (!state.active) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    const btn = e.currentTarget;
    e.preventDefault();
    try { btn.setPointerCapture(e.pointerId); } catch (err) { /* synthetic event / already gone */ }
    ptrs.set(e.pointerId, { el: btn, name: btn._tc, seq: ++seq });
    recompute();
  }
  function move(e) {
    const p = ptrs.get(e.pointerId);
    if (!p) return;
    const grp = GROUP[p.name];
    if (!SLIDES[grp]) return;
    const hit = document.elementFromPoint(e.clientX, e.clientY);
    const btn = hit && hit.closest ? hit.closest('[data-tc]') : null;
    if (btn && btn !== p.el && GROUP[btn._tc] === grp) {
      p.el = btn;
      p.name = btn._tc;
      p.seq = ++seq;
      recompute();
    }
  }
  function release(e) {
    if (ptrs.delete(e.pointerId)) recompute();
  }
  const stop = (e) => e.preventDefault();

  buttons.forEach((b) => {
    b.addEventListener('pointerdown', press);
    b.addEventListener('pointermove', move);
    b.addEventListener('pointerup', release);
    b.addEventListener('pointercancel', release);
    b.addEventListener('lostpointercapture', release);
    b.addEventListener('contextmenu', stop);
    // iOS: no long-press callout / magnifier / double-tap zoom on the pads
    b.addEventListener('touchstart', (e) => { if (state.active && e.cancelable) e.preventDefault(); }, { passive: false });
  });
  // safety net: a finger lifted anywhere always releases its button, capture or not
  window.addEventListener('pointerup', release, true);
  window.addEventListener('pointercancel', release, true);
  node.addEventListener('contextmenu', stop);

  node.querySelectorAll('[data-act]').forEach((b) => {
    const name = b.getAttribute('data-act');
    b.addEventListener('click', (e) => {
      e.preventDefault();
      if (state.active && h[name]) h[name]();
    });
  });

  let itemKey = null;
  return {
    node,
    state,
    setActive(on) {
      on = !!on;
      auto = !!(getAutoGas && getAutoGas());
      node.classList.toggle('auto', auto);
      if (state.active !== on) {
        state.active = on;
        node.classList.toggle('on', on);
        ptrs.clear();
      }
      recompute();
    },
    /** held item (ITEMS entry) or null: shown on the round ITEM button */
    setItem(item) {
      const key = item ? item.id || item.name || '?' : '';
      if (key === itemKey) return;
      itemKey = key;
      itemIc.textContent = item ? item.icon || '?' : '';
      itemBtn.classList.toggle('empty', !item);
    },
    destroy() {
      window.removeEventListener('pointerup', release, true);
      window.removeEventListener('pointercancel', release, true);
    },
  };
}
