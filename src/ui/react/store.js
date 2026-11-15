// UI state lives in plain objects outside React, so the imperative API that src/main.js calls
// (ui.showMenu(), ui.getMenuScreen(), ...) is synchronous. Components subscribe with useStore() and
// re-render whenever bump() is called.

import { useSyncExternalStore } from 'react';
import { clamp } from '../util.js';

export function createStoreHub() {
  let version = 0;
  const listeners = new Set();
  return {
    bump() {
      version++;
      for (const l of [...listeners]) l();
    },
    subscribe(l) {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    getVersion: () => version,
  };
}

/** Re-render the calling component on every hub.bump(). */
export function useStore(hub) {
  return useSyncExternalStore(hub.subscribe, hub.getVersion, hub.getVersion);
}

/**
 * Keyboard / pointer focus list, shared by the menu, pause and results layers. No DOM focus is used (except for
 * text inputs): the focused item simply renders with .tr-focus.
 *
 * Items are plain descriptors built by the screen component on every render and handed over with setItems()
 * (from a layout effect, so they always match what is on screen):
 *   { id, hidden?, skip?(), enter?(), left?(), right?(), up?(), down?(), click?(e), blur?() }
 * left/right/up/down return true when the item consumed the key itself (e.g. moved inside a grid).
 */
export class Nav {
  constructor({ sound, horizontal = false, onChange }) {
    this.items = [];
    this.index = 0;
    this.horizontal = horizontal;
    this.sound = sound || (() => {});
    this.onChange = onChange || (() => {});
    this.fresh = true; // reset() was called: setItems() must not re-map the focus by id
  }

  usable(it) {
    return !!it && !it.hidden && !(it.skip && it.skip());
  }

  /** A new screen / layer opened: focus `index` once its items arrive. */
  reset(index = 0) {
    const prev = this.items[this.index];
    if (prev && prev.blur) prev.blur();
    this.items = [];
    this.index = index;
    this.fresh = true;
  }

  setItems(items) {
    const prevId = !this.fresh && this.items[this.index] ? this.items[this.index].id : null;
    this.items = items;
    let i = clamp(this.index, 0, Math.max(0, items.length - 1));
    // the list changed shape under us (e.g. lobby host <-> guest): keep the same item focused if it is still there
    if (prevId && (!items[i] || items[i].id !== prevId)) {
      const j = items.findIndex((x) => x.id === prevId);
      if (j >= 0) i = j;
    }
    if (!this.usable(items[i])) {
      const j = items.findIndex((x) => this.usable(x));
      if (j >= 0) i = j;
    }
    this.fresh = false;
    if (i !== this.index) {
      this.index = i;
      this.onChange();
    }
  }

  focus(i, silent) {
    if (i < 0 || i >= this.items.length) return;
    if (!this.usable(this.items[i])) {
      const j = this.items.findIndex((x) => this.usable(x));
      if (j < 0) return;
      i = j;
    }
    if (i === this.index) return;
    const prev = this.items[this.index];
    if (prev && prev.blur) prev.blur();
    this.index = i;
    if (!silent) this.sound('ui-move');
    this.onChange();
  }

  move(d) {
    const n = this.items.length;
    if (!n) return;
    let i = this.index;
    for (let k = 0; k < n; k++) {
      i = (i + d + n) % n;
      if (this.usable(this.items[i])) break;
    }
    this.focus(i);
  }

  current() {
    return this.items[this.index];
  }

  indexOf(id) {
    return this.items.findIndex((x) => x.id === id);
  }

  /** Props for the element that represents item `it` at position `i`. */
  bind(it, i) {
    return {
      focused: this.index === i,
      onMouseEnter: () => {
        if (this.usable(it)) this.focus(i, true);
      },
      onClick: (e) => {
        if (!this.usable(it)) return;
        this.focus(i, true);
        if (it.click) it.click(e);
        else if (it.enter) {
          this.sound('ui-select');
          it.enter();
        }
      },
    };
  }

  /** Returns true when the key was handled. */
  key(e) {
    const it = this.current();
    const k = e.key;
    const prevKey = this.horizontal ? 'ArrowLeft' : 'ArrowUp';
    const nextKey = this.horizontal ? 'ArrowRight' : 'ArrowDown';
    if (k === 'ArrowUp' || k === 'ArrowDown' || k === 'ArrowLeft' || k === 'ArrowRight') {
      const fn = it && it[k === 'ArrowUp' ? 'up' : k === 'ArrowDown' ? 'down' : k === 'ArrowLeft' ? 'left' : 'right'];
      if (fn && fn()) return true;
      if (k === prevKey) this.move(-1);
      else if (k === nextKey) this.move(1);
      else if (this.horizontal) this.move(k === 'ArrowUp' ? -1 : 1);
      return true;
    }
    if (k === 'Enter' || k === ' ' || k === 'Spacebar') {
      if (e.repeat) return true;
      if (it && it.enter) {
        this.sound('ui-select');
        it.enter();
      }
      return true;
    }
    return false;
  }
}
