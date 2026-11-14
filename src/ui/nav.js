// Tiny focus-list helper shared by menu, pause and results. No DOM focus is used (except for the
// name <input>): the focused item simply carries the .tr-focus class.
//
// item: { el, enter?(), left?(), right?(), up?(), down?(), skip?() }
//   left/right/up/down return true when the item consumed the key itself (e.g. moved inside a grid).

import { el, esc, clamp, retrigger, fracX } from './util.js';

export function createNav({ sound, horizontal = false } = {}) {
  const nav = { items: [], index: 0, horizontal };
  const snd = (n) => { if (sound) sound(n); };

  const usable = (it) => it && !(it.skip && it.skip());

  nav.set = (items, index = 0) => {
    nav.items.forEach((it) => it.el.classList.remove('tr-focus'));
    nav.items = items;
    items.forEach((it, i) => {
      if (it._wired) return;
      it._wired = true;
      it.el.addEventListener('mouseenter', () => { if (usable(it)) nav.focus(nav.items.indexOf(it), true); });
      it.el.addEventListener('click', (e) => {
        if (!usable(it)) return;
        nav.focus(nav.items.indexOf(it), true);
        if (it.click) it.click(e);
        else if (it.enter) { snd('ui-select'); it.enter(); }
      });
    });
    nav.index = -1;
    nav.focus(clamp(index, 0, Math.max(0, items.length - 1)), true);
  };

  nav.focus = (i, silent) => {
    if (i < 0 || i >= nav.items.length) return;
    if (!usable(nav.items[i])) {
      const j = nav.items.findIndex(usable);
      if (j < 0) return;
      i = j;
    }
    if (i === nav.index) return;
    const prev = nav.items[nav.index];
    if (prev) {
      prev.el.classList.remove('tr-focus');
      if (prev.blur) prev.blur();
    }
    nav.index = i;
    nav.items[i].el.classList.add('tr-focus');
    if (!silent) snd('ui-move');
  };

  nav.move = (d) => {
    const n = nav.items.length;
    if (!n) return;
    let i = nav.index;
    for (let k = 0; k < n; k++) {
      i = (i + d + n) % n;
      if (usable(nav.items[i])) break;
    }
    nav.focus(i);
  };

  nav.current = () => nav.items[nav.index];

  /** Returns true when the key was handled. */
  nav.key = (e) => {
    const it = nav.current();
    const k = e.key;
    const prevKey = nav.horizontal ? 'ArrowLeft' : 'ArrowUp';
    const nextKey = nav.horizontal ? 'ArrowRight' : 'ArrowDown';
    if (k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight') {
      const fn = it && it[k === 'ArrowUp' ? 'up' : k === 'ArrowDown' ? 'down' : k === 'ArrowLeft' ? 'left' : 'right'];
      if (fn && fn()) return true;
      if (k === prevKey) nav.move(-1);
      else if (k === nextKey) nav.move(1);
      else if (nav.horizontal) nav.move(k === 'ArrowUp' ? -1 : 1);
      return true;
    }
    if (k === 'Enter' || k === ' ' || k === 'Spacebar') {
      if (e.repeat) return true;
      if (it && it.enter) { snd('ui-select'); it.enter(); }
      return true;
    }
    return false;
  };

  return nav;
}

// ---------------------------------------------------------------- item builders

export function button(label, sub, onEnter, cls) {
  const node = el('div', 'tr-btn' + (cls ? ' ' + cls : ''));
  node.setAttribute('role', 'button');
  node.innerHTML = '<span class="tr-btn-l">' + esc(label) + '</span>' + (sub ? '<span class="tr-btn-s">' + esc(sub) + '</span>' : '');
  return {
    el: node,
    enter: onEnter,
    setLabel(l) { node.querySelector('.tr-btn-l').textContent = l; },
  };
}

/**
 * Left/right value selector row.
 * options(): [{ value, label }], get(): value, set(value)
 */
export function selector(label, { options, get, set, sound }) {
  const node = el('div', 'tr-row');
  node.innerHTML =
    '<span class="tr-row-l">' + esc(label) + '</span>' +
    '<span class="tr-sel"><i class="tr-arr l">◀</i><b></b><i class="tr-arr r">▶</i></span>';
  const valEl = node.querySelector('b');
  const arrL = node.querySelector('.l');
  const arrR = node.querySelector('.r');
  const idx = () => {
    const o = options();
    const v = get();
    const i = o.findIndex((x) => x.value === v);
    return i < 0 ? 0 : i;
  };
  function render() {
    const o = options();
    const i = idx();
    valEl.textContent = o[i] ? o[i].label : '';
    arrL.classList.toggle('off', i <= 0);
    arrR.classList.toggle('off', i >= o.length - 1);
  }
  function step(d, wrap) {
    const o = options();
    let i = idx() + d;
    if (wrap) i = (i + o.length) % o.length;
    if (i < 0 || i >= o.length) return true;
    set(o[i].value);
    render();
    retrigger(d < 0 ? arrL : arrR, 'bump');
    if (sound) sound('ui-move');
    return true;
  }
  arrL.addEventListener('click', (e) => { e.stopPropagation(); step(-1); });
  arrR.addEventListener('click', (e) => { e.stopPropagation(); step(1); });
  render();
  return {
    el: node,
    render,
    left: () => step(-1),
    right: () => step(1),
    click: () => step(1, true),
    setHidden(h) { node.style.display = h ? 'none' : ''; },
    skip: () => node.style.display === 'none',
  };
}

/** 0..1 slider row. */
export function slider(label, { get, set, sound }) {
  const node = el('div', 'tr-row');
  node.innerHTML =
    '<span class="tr-row-l">' + esc(label) + '</span>' +
    '<span class="tr-rowr"><span class="tr-slider"><span class="tr-slider-fill"></span><span class="tr-slider-knob"></span></span><span class="tr-val"></span></span>';
  const track = node.querySelector('.tr-slider');
  const fill = node.querySelector('.tr-slider-fill');
  const knob = node.querySelector('.tr-slider-knob');
  const val = node.querySelector('.tr-val');
  function render() {
    const p = Math.round(clamp(get(), 0, 1) * 100);
    fill.style.width = p + '%';
    knob.style.left = p + '%';
    val.textContent = String(p);
  }
  function step(d) {
    const cur = Math.round(clamp(get(), 0, 1) * 20);
    const nx = clamp(cur + d, 0, 20);
    if (nx !== cur) {
      set(nx / 20);
      render();
      if (sound) sound('ui-move');
    }
    return true;
  }
  let dragging = false;
  const fromPointer = (e) => {
    const v = Math.round(fracX(track, e) * 20) / 20; // rotation-aware (the stage may be turned 90deg)
    if (v !== get()) {
      set(v);
      render();
    }
  };
  track.addEventListener('pointerdown', (e) => {
    dragging = true;
    try { track.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
    fromPointer(e);
  });
  track.addEventListener('pointermove', (e) => { if (dragging) fromPointer(e); });
  const end = () => {
    if (dragging && sound) sound('ui-move');
    dragging = false;
  };
  track.addEventListener('pointerup', end);
  track.addEventListener('pointercancel', end);
  track.addEventListener('lostpointercapture', end);
  render();
  return { el: node, render, left: () => step(-1), right: () => step(1), click: () => {} };
}

/**
 * Text input row. Enter focuses the field; Enter/Esc/Up/Down leave it.
 * Options: live (write the cleaned value back while typing), onSubmit (Enter inside the field calls it
 * instead of just leaving), cls / placeholder for the <input>.
 */
export function textInput(label, { get, set, maxLength = 12, live = false, onSubmit = null, cls = '', placeholder = '', capitalize = '', enterHint = 'done' }) {
  const node = el('div', 'tr-row tr-row-in');
  node.innerHTML = '<span class="tr-row-l">' + esc(label) + '</span><input class="tr-input' + (cls ? ' ' + cls : '') + '" type="text" inputmode="text" spellcheck="false" autocomplete="off" autocorrect="off"' +
    ' autocapitalize="' + (capitalize || (live ? 'characters' : 'words')) + '" enterkeyhint="' + enterHint + '"' +
    ' maxlength="' + maxLength + '"' + (placeholder ? ' placeholder="' + esc(placeholder) + '"' : '') + '>';
  const input = node.querySelector('input');
  input.value = get();
  const commit = () => {
    set(input.value);
    input.value = get();
  };
  input.addEventListener('input', () => {
    set(input.value);
    if (live && input.value !== get()) input.value = get();
  });
  input.addEventListener('blur', commit);
  if (onSubmit) input._ttSubmit = onSubmit;
  return {
    el: node,
    input,
    render() { if (document.activeElement !== input) input.value = get(); },
    enter() {
      input.focus();
      input.select();
    },
    click() { input.focus(); },
    blur() { if (document.activeElement === input) input.blur(); },
  };
}
