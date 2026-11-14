// Toyz Race — icon generator. Writes the SVG sources into public/ and rasterises the PNGs.
//   node scripts/generate-icons.mjs        (macOS: uses the built-in `sips` to rasterise SVG -> PNG, no dependencies)
// The mark is the wordmark's wheel (see wheelSvg() in src/ui/util.js) on a yellow->orange disc over the game's navy.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
fs.mkdirSync(pub, { recursive: true });

const NAVY = '#0b0f22';

/** Wheel + disc artwork, drawn in a 100x100 box centred on (50,50); the disc radius is 46. */
function art() {
  let holes = '';
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
    const x = (50 + Math.cos(a) * 12.4).toFixed(2);
    const y = (50 + Math.sin(a) * 12.4).toFixed(2);
    holes += `<circle cx="${x}" cy="${y}" r="4.5" fill="#ff6b1a" stroke="${NAVY}" stroke-width="2"/>`;
  }
  return (
    // speed stripes peeking out behind the disc
    `<path d="M2 37h20M-2 50h22M2 63h20" stroke="#ffd02e" stroke-width="5" stroke-linecap="round" opacity=".9"/>` +
    `<circle cx="50" cy="50" r="46" fill="url(#sun)" stroke="${NAVY}" stroke-width="3"/>` +
    `<circle cx="50" cy="50" r="41.5" fill="none" stroke="#fff6e0" stroke-opacity=".35" stroke-width="2"/>` +
    // tyre, tread, rim, hub (same construction as the logo wheel)
    `<circle cx="50" cy="50" r="34.5" fill="#232a52" stroke="${NAVY}" stroke-width="6.5"/>` +
    `<circle cx="50" cy="50" r="32" fill="none" stroke="#4a548c" stroke-width="5.6" stroke-dasharray="4 4.378"/>` +
    `<circle cx="50" cy="50" r="22" fill="#fff6e0" stroke="${NAVY}" stroke-width="5"/>` +
    holes +
    `<circle cx="50" cy="50" r="4" fill="${NAVY}"/>`
  );
}

/**
 * @param {object} o
 * @param {number} o.scale   artwork scale around the centre (1 = disc radius 46% of the icon)
 * @param {number} o.radius  corner radius of the navy tile (0 = full-bleed square)
 */
function svg({ scale, radius }) {
  const t = (50 * (1 - scale)).toFixed(3);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">` +
    `<defs>` +
    `<linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd02e"/><stop offset="1" stop-color="#ff6b1a"/></linearGradient>` +
    `<radialGradient id="bg" cx=".5" cy=".4" r=".75"><stop offset="0" stop-color="#1b2550"/><stop offset="1" stop-color="${NAVY}"/></radialGradient>` +
    `<clipPath id="tile"><rect width="100" height="100" rx="${radius}"/></clipPath>` +
    `</defs>` +
    `<g clip-path="url(#tile)">` +
    `<rect width="100" height="100" fill="url(#bg)"/>` +
    `<g transform="translate(${t} ${t}) scale(${scale})">${art()}</g>` +
    `</g>` +
    `</svg>\n`
  );
}

const sources = {
  // "any" purpose icon: rounded navy tile, transparent corners.
  'icon.svg': svg({ scale: 0.86, radius: 22 }),
  // maskable: full-bleed, artwork inside the central 80% safe zone (disc radius 0.46 * 0.74 = 34% < 40%).
  'icon-maskable.svg': svg({ scale: 0.74, radius: 0 }),
  // apple-touch-icon source: full-bleed and opaque (iOS applies its own mask and turns alpha black).
  'icon-apple.svg': svg({ scale: 0.84, radius: 0 }),
};
sources['favicon.svg'] = sources['icon.svg'];

for (const [name, text] of Object.entries(sources)) fs.writeFileSync(path.join(pub, name), text);

const pngs = [
  ['icon.svg', 'icon-192.png', 192],
  ['icon.svg', 'icon-512.png', 512],
  ['icon-maskable.svg', 'icon-maskable-192.png', 192],
  ['icon-maskable.svg', 'icon-maskable-512.png', 512],
  ['icon-apple.svg', 'apple-touch-icon.png', 180],
  ['icon.svg', 'favicon-32.png', 32],
];

for (const [src, out, size] of pngs) {
  try {
    execFileSync('sips', ['-s', 'format', 'png', '-z', String(size), String(size), path.join(pub, src), '--out', path.join(pub, out)], { stdio: 'pipe' });
  } catch (err) {
    console.error(`Could not rasterise ${src} -> ${out}: this script needs macOS "sips" (or rasterise public/*.svg with any SVG tool).`);
    console.error(String(err.stderr || err.message));
    process.exit(1);
  }
  console.log(`  ${out}  ${size}x${size}`);
}
// The apple-touch source is only an intermediate.
fs.rmSync(path.join(pub, 'icon-apple.svg'));
console.log('Icons written to public/');
