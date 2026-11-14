// On-screen touch controls for phones / small tablets (html.tr-touch). Shown only while the HUD is up and no
// menu / pause / results layer is open. The integrator reads `state` (exposed as ui.touch) every frame.
//
// Pointer Events + pointer capture, so several fingers work at once (steer + gas + item). A finger that slides
// from one button onto its neighbour of the same group (left <-> right, gas <-> brake) switches without lifting.
// Hit-testing uses document.elementFromPoint, which is correct when the stage is CSS-rotated.

import { el } from './util.js';

const GROUP = { left: 'steer', right: 'steer', gas: 'pedal', brake: 'pedal', drift: 'drift', fire: 'fire' };
const SLIDES = { steer: true, pedal: true };

const ARROW = (flip) => '<svg viewBox="0 0 40 40" aria-hidden="true"' + (flip ? ' style="transform:scaleX(-1)"' : '') + '><path d="M27 5 L9 20 L27 35 Z" fill="currentColor" stroke="#0b0f22" stroke-width="3.5" stroke-linejoin="round" paint-order="stroke"/></svg>';
const ICON = {
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor"/><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor"/></svg>',
  camera: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8.5 A2 2 0 0 1 5 6.5 H7.6 L9 4.5 H15 L16.4 6.5 H19 A2 2 0 0 1 21 8.5 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 Z" fill="currentColor"/><circle cx="12" cy="12.6" r="3.6" fill="none" stroke="#0b0f22" stroke-width="2"/></svg>',
  reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.2 8.2 A7.2 7.2 0 1 1 4.8 12.6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/><path d="M3.2 4.2 L6.6 8.8 L11.6 6.4" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

export function createTouchControls(root, { handlers, getAutoGas, itemSlot }) {
  const h = handlers || {};
  /** Stable object: the integrator keeps a reference and polls it. */
  const state = { active: false, throttle: 0, steer: 0, handbrake: false, fire: false };

  const node = el('div', 'tr-layer tr-tc',
    '<div class="tr-tc-top">' +
    '<div class="tr-tc-sm" data-act="onResetRequest" role="button" aria-label="Reset car to the track">' + ICON.reset + '</div>' +
    '<div class="tr-tc-sm" data-act="onCameraRequest" role="button" aria-label="Change camera">' + ICON.camera + '</div>' +
    '<div class="tr-tc-sm" data-act="onPauseRequest" role="button" aria-label="Pause">' + ICON.pause + '</div>' +
    '</div>' +
    '<div class="tr-tc-btn tr-tc-l" data-tc="left" role="button" aria-label="Steer left">' + ARROW(false) + '</div>' +
    '<div class="tr-tc-btn tr-tc-r" data-tc="right" role="button" aria-label="Steer right">' + ARROW(true) + '</div>' +
    '<div class="tr-tc-btn tr-tc-drift" data-tc="drift" role="button" aria-label="Handbrake"><b>Drift</b></div>' +
    '<div class="tr-tc-btn tr-tc-item empty" data-tc="fire" role="button" aria-label="Use item"><i></i><small>Item</small></div>' +
    '<div class="tr-tc-btn tr-tc-brake" data-tc="brake" role="button" aria-label="Brake / reverse"><b>Brake</b><small>Reverse</small></div>' +
    '<div class="tr-tc-btn tr-tc-gas" data-tc="gas" role="button" aria-label="Accelerate"><b>Gas</b></div>');
  root.appendChild(node);

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
      node.remove();
    },
  };
}
