// Focusable menu rows (button, selector, slider, text input) plus small shared pieces (hint bar, logo,
// car silhouette, stars). Rows are described by plain descriptors (see Nav in store.js) built with makeKit().

import { useLayoutEffect, useRef } from 'react';
import { clamp, fracX, retrigger, carSvg, logoHtml } from '../util.js';

const cx = (...a) => a.filter(Boolean).join(' ');

/**
 * Descriptor factories. `bump` re-renders after a value changed, `sound` plays a UI sound.
 * @param {{ sound: (n: string) => void, bump: () => void }} ctx
 */
export function makeKit({ sound, bump }) {
  return {
    button(id, label, sub, enter, cls, extra) {
      return { kind: 'button', id, label, sub, enter, cls, ...extra };
    },

    /** Left/right value row. options(): [{ value, label }] */
    selector(id, label, { options, get, set, hidden = false, cls }) {
      const arrL = { current: null };
      const arrR = { current: null };
      const idx = () => {
        const o = options();
        const i = o.findIndex((x) => x.value === get());
        return i < 0 ? 0 : i;
      };
      const step = (d, wrap) => {
        const o = options();
        let i = idx() + d;
        if (wrap) i = (i + o.length) % o.length;
        if (i < 0 || i >= o.length) return true;
        set(o[i].value);
        bump();
        const arrow = d < 0 ? arrL.current : arrR.current;
        if (arrow) retrigger(arrow, 'bump');
        sound('ui-move');
        return true;
      };
      return {
        kind: 'selector', id, label, cls, hidden, options, idx, arrL, arrR, step,
        left: () => step(-1),
        right: () => step(1),
        click: () => step(1, true),
      };
    },

    /** 0..1 slider row (20 steps). */
    slider(id, label, { get, set }) {
      const step = (d) => {
        const cur = Math.round(clamp(get(), 0, 1) * 20);
        const nx = clamp(cur + d, 0, 20);
        if (nx !== cur) {
          set(nx / 20);
          bump();
          sound('ui-move');
        }
        return true;
      };
      return { kind: 'slider', id, label, get, set, left: () => step(-1), right: () => step(1), click: () => {} };
    },

    /**
     * Text input row. Enter focuses the field; Enter/Esc/Up/Down leave it (see the menu's key handler).
     * live: write the cleaned value back while typing. onSubmit: Enter inside the field calls it.
     */
    text(id, label, { get, set, maxLength = 12, live = false, onSubmit = null, cls = '', placeholder = '', capitalize = '', enterHint = 'done' }) {
      const input = { current: null };
      return {
        kind: 'text', id, label, get, set, maxLength, live, onSubmit, cls, placeholder, capitalize, enterHint, input,
        enter() {
          if (!input.current) return;
          input.current.focus();
          input.current.select();
        },
        click() {
          if (input.current) input.current.focus();
        },
        blur() {
          if (input.current && document.activeElement === input.current) input.current.blur();
        },
      };
    },
  };
}

// ---------------------------------------------------------------- row components

export function Button({ it, nav, i }) {
  const b = nav.bind(it, i);
  return (
    <div className={cx('tr-btn', it.cls, it.off && 'tr-off', b.focused && 'tr-focus')} role="button" onMouseEnter={b.onMouseEnter} onClick={b.onClick}>
      <span className="tr-btn-l">{it.label}</span>
      {it.sub ? <span className="tr-btn-s">{it.sub}</span> : null}
    </div>
  );
}

export function SelectorRow({ it, nav, i }) {
  const b = nav.bind(it, i);
  const o = it.options();
  const k = it.idx();
  return (
    <div className={cx('tr-row', it.cls, b.focused && 'tr-focus')} style={it.hidden ? { display: 'none' } : undefined} onMouseEnter={b.onMouseEnter} onClick={b.onClick}>
      <span className="tr-row-l">{it.label}</span>
      <span className="tr-sel">
        <i ref={it.arrL} className={cx('tr-arr l', k <= 0 && 'off')} onClick={(e) => { e.stopPropagation(); it.step(-1); }}>◀</i>
        <b>{o[k] ? o[k].label : ''}</b>
        <i ref={it.arrR} className={cx('tr-arr r', k >= o.length - 1 && 'off')} onClick={(e) => { e.stopPropagation(); it.step(1); }}>▶</i>
      </span>
    </div>
  );
}

export function SliderRow({ it, nav, i, sound, bump }) {
  const b = nav.bind(it, i);
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const p = Math.round(clamp(it.get(), 0, 1) * 100);
  const fromPointer = (e) => {
    const v = Math.round(fracX(trackRef.current, e) * 20) / 20; // rotation-aware (the stage may be turned 90deg)
    if (v !== it.get()) {
      it.set(v);
      bump();
    }
  };
  const end = () => {
    if (dragging.current) sound('ui-move');
    dragging.current = false;
  };
  return (
    <div className={cx('tr-row', b.focused && 'tr-focus')} onMouseEnter={b.onMouseEnter} onClick={b.onClick}>
      <span className="tr-row-l">{it.label}</span>
      <span className="tr-rowr">
        <span
          className="tr-slider"
          ref={trackRef}
          onPointerDown={(e) => {
            dragging.current = true;
            try { trackRef.current.setPointerCapture(e.pointerId); } catch { /* synthetic event */ }
            fromPointer(e);
          }}
          onPointerMove={(e) => { if (dragging.current) fromPointer(e); }}
          onPointerUp={end}
          onPointerCancel={end}
          onLostPointerCapture={end}
        >
          <span className="tr-slider-fill" style={{ width: p + '%' }} />
          <span className="tr-slider-knob" style={{ left: p + '%' }} />
        </span>
        <span className="tr-val">{p}</span>
      </span>
    </div>
  );
}

export function TextRow({ it, nav, i }) {
  const b = nav.bind(it, i);
  // Uncontrolled <input>: while the player types, the field owns its value; otherwise it shows get().
  useLayoutEffect(() => {
    const el = it.input.current;
    if (!el) return;
    el._ttSubmit = it.onSubmit || undefined;
    if (document.activeElement !== el) el.value = it.get();
  });
  return (
    <div className={cx('tr-row tr-row-in', b.focused && 'tr-focus')} onMouseEnter={b.onMouseEnter} onClick={b.onClick}>
      <span className="tr-row-l">{it.label}</span>
      <input
        ref={it.input}
        className={cx('tr-input', it.cls)}
        type="text"
        inputMode="text"
        spellCheck={false}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize={it.capitalize || (it.live ? 'characters' : 'words')}
        enterKeyHint={it.enterHint}
        maxLength={it.maxLength}
        placeholder={it.placeholder || undefined}
        defaultValue={it.get()}
        onInput={(e) => {
          const el = e.currentTarget;
          it.set(el.value);
          if (it.live && el.value !== it.get()) el.value = it.get();
        }}
        onBlur={(e) => {
          const el = e.currentTarget;
          it.set(el.value);
          el.value = it.get();
        }}
      />
    </div>
  );
}

/** Renders any descriptor made by makeKit(). */
export function Item(props) {
  switch (props.it.kind) {
    case 'selector': return <SelectorRow {...props} />;
    case 'slider': return <SliderRow {...props} />;
    case 'text': return <TextRow {...props} />;
    default: return <Button {...props} />;
  }
}

// ---------------------------------------------------------------- static pieces

/** [[['↑', '↓'], 'Select'], ...] */
export function Hints({ list }) {
  return (
    <div className="tr-hints">
      {list.map(([keys, label]) => (
        <span key={label + keys.join('')}>
          {keys.map((k) => <i className="tr-key" key={k}>{k}</i>)}
          {label}
        </span>
      ))}
    </div>
  );
}

// The SVG / wordmark markup is static and built from escaped strings in util.js; render it without wrapper elements.
const inner = (html) => html.replace(/^<[^>]+>/, '').replace(/<\/[a-z]+>$/, '');
const LOGO_INNER = inner(logoHtml());
export const Logo = () => <div className="tr-logo" role="img" aria-label="Toyz Race" dangerouslySetInnerHTML={{ __html: LOGO_INNER }} />;
export const CarSvg = ({ color }) => <svg className="tr-carsvg" viewBox="0 0 64 34" aria-hidden="true" dangerouslySetInnerHTML={{ __html: inner(carSvg(color)) }} />;
export function Stars({ n, max = 4 }) {
  const v = n || 1;
  const out = [];
  for (let i = 1; i <= max; i++) out.push(<i key={i} className={i <= v ? 'on' : ''}>★</i>);
  return <span className="tr-stars" aria-label={'Difficulty ' + v + ' of ' + max}>{out}</span>;
}
export const BackBtn = ({ onBack }) => (
  <i className="tr-backbtn" role="button" aria-label="Back" onClick={(e) => { e.stopPropagation(); onBack(); }}>◀</i>
);
