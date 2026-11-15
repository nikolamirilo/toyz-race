// Small DOM/format helpers shared by the UI modules. Safe to import in node.

export const hasDOM = typeof document !== 'undefined';

export function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
}

export function clamp(v, a, b) {
  return v < a ? a : v > b ? b : v;
}

const rootHas = (cls) => hasDOM && document.documentElement.classList.contains(cls);
/** Touch-first device (phone / small tablet): src/core/stage.js sets html.tr-touch. */
export const isTouch = () => rootHas('tr-touch');
/** The stage (#app) is CSS-rotated by 90deg (phone held upright): html.tr-rotated. */
export const isRotated = () => rootHas('tr-rotated');

/**
 * Horizontal position (0..1) of a pointer event inside an element, in the element's OWN axis.
 * Works when the stage is rotated by 90deg clockwise: the element's x axis then runs down the screen.
 */
export function fracX(node, e) {
  const r = node.getBoundingClientRect();
  if (isRotated()) return clamp((e.clientY - r.top) / Math.max(1, r.height), 0, 1);
  return clamp((e.clientX - r.left) / Math.max(1, r.width), 0, 1);
}

const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
export function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ESC[c]);
}

/** Format seconds as m:ss.cc. Returns a placeholder for missing / invalid values. */
export function fmtTime(t) {
  if (t == null || !isFinite(t) || t < 0) return '-:--.--';
  const cs = Math.floor(t * 100 + 1e-6);
  const m = Math.floor(cs / 6000);
  const s = Math.floor(cs / 100) % 60;
  const c = cs % 100;
  return m + ':' + (s < 10 ? '0' : '') + s + '.' + (c < 10 ? '0' : '') + c;
}

export function ordinalSuffix(n) {
  const v = n % 100;
  if (v >= 11 && v <= 13) return 'th';
  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export function ordinal(n) {
  return n + ordinalSuffix(n);
}

/** Restart a CSS animation that is driven by a class. */
export function retrigger(node, cls) {
  node.classList.remove(cls);
  void node.offsetWidth;
  node.classList.add(cls);
}

/** Generic toy buggy side silhouette used on car tiles (pure inline SVG). */
export function carSvg(color) {
  const c = esc(color || '#ff6b1a');
  return (
    '<svg class="tr-carsvg" viewBox="0 0 64 34" aria-hidden="true">' +
    '<path d="M41 8 L47 -1" stroke="#0b0f22" stroke-width="1.4" stroke-linecap="round" fill="none" transform="translate(0,3)"/>' +
    '<circle cx="47" cy="2" r="1.8" fill="#ffd02e" stroke="#0b0f22" stroke-width="1"/>' +
    '<path d="M3 11 h9 v3 h-3 v4 h-3 v-4 h-3 z" fill="' + c + '" stroke="#0b0f22" stroke-width="1.6" stroke-linejoin="round"/>' +
    '<path d="M4 25 Q3 18 10 17 L20 15 Q26 8 36 8 L44 8 Q50 8 53 14 L58 16 Q62 17 62 21 L62 25 Z" fill="' + c + '" stroke="#0b0f22" stroke-width="2" stroke-linejoin="round"/>' +
    '<path d="M24 15 Q28 10.5 35 10.5 L43 10.5 Q47 10.5 49 15 Z" fill="#cfefff" stroke="#0b0f22" stroke-width="1.4" stroke-linejoin="round"/>' +
    '<path d="M36 10.5 V15" stroke="#0b0f22" stroke-width="1.4"/>' +
    '<path d="M8 21 H58" stroke="rgba(255,255,255,.55)" stroke-width="1.6" stroke-linecap="round"/>' +
    '<circle cx="16" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="16" cy="25" r="2.8" fill="#fff6e0"/>' +
    '<circle cx="48" cy="25" r="7" fill="#1b2140" stroke="#0b0f22" stroke-width="2"/><circle cx="48" cy="25" r="2.8" fill="#fff6e0"/>' +
    '</svg>'
  );
}

/** Wheel used as the "O" of the wordmark. */
export function wheelSvg() {
  let holes = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    holes += '<circle cx="' + (50 + Math.cos(a) * 15.5).toFixed(1) + '" cy="' + (50 + Math.sin(a) * 15.5).toFixed(1) + '" r="5.6" fill="#ff6b1a" stroke="#0b0f22" stroke-width="2.5"/>';
  }
  return (
    '<svg viewBox="0 0 100 100" aria-hidden="true">' +
    '<circle cx="50" cy="50" r="43" fill="#232a52" stroke="#0b0f22" stroke-width="8"/>' +
    '<circle cx="50" cy="50" r="40" fill="none" stroke="#4a548c" stroke-width="7" stroke-dasharray="5 5.47"/>' +
    '<circle cx="50" cy="50" r="27.5" fill="#fff6e0" stroke="#0b0f22" stroke-width="6"/>' +
    holes +
    '<circle cx="50" cy="50" r="5" fill="#0b0f22"/>' +
    '</svg>'
  );
}

export function logoHtml() {
  return (
    '<div class="tr-logo" role="img" aria-label="Toyz Race">' +
    // the formula car of the app icon sliding out from behind the wordmark (public/logo-car.png, see scripts/generate-icons.mjs)
    '<img class="tr-logo-car" src="logo-car.png" alt="" draggable="false">' +
    '<div class="tr-logo-toyz"><span>T</span><span class="tr-logo-o">' + wheelSvg() + '</span><span>Y</span><span>Z</span></div>' +
    '<div class="tr-logo-race"><span>R</span><span>A</span><span>C</span><span>E</span></div>' +
    '<div class="tr-logo-strip"></div>' +
    '</div>'
  );
}

export function starsHtml(n, max = 4) {
  let s = '<span class="tr-stars" aria-label="Difficulty ' + n + ' of ' + max + '">';
  for (let i = 1; i <= max; i++) s += '<i class="' + (i <= n ? 'on' : '') + '">★</i>';
  return s + '</span>';
}
