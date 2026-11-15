// Toyz Race — logo / icon generator. Writes the SVG sources into public/ and rasterises the PNGs.
//   npm run icons
// The mark is the game's blue rally car (Mud Muffin, the real 3D model: scripts/logo/scene.js) caught mid-slide on
// opposite lock, bursting out of the yellow->orange disc with speed streaks, tyre smoke and sparks.
//
// Needs a Chromium driven by Playwright (`npx playwright install chromium`, not a project dependency): it renders
// the car with WebGL and rasterises the SVGs. Vite (a devDependency) serves the render page while the script runs.
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
fs.mkdirSync(pub, { recursive: true });

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (err) {
  console.error('This script needs Playwright:  npm i --no-save playwright && npx playwright install chromium');
  process.exit(1);
}

const NAVY = '#0b0f22';
const CREAM = '#fff6e0';
const POSE = 'h=-0.35&steer=0.9&roll=0.14&cy=1.5&ly=0.38&dutch=-0.12&fov=27';
// The car in the render runs from the nose (lower left) to the tail (upper right) along this angle.
const AXIS = -19;

const n2 = (v) => +v.toFixed(2);

/** A four-point sparkle centred on (x, y). */
function spark(x, y, r, fill = '#ffd02e') {
  const k = r * 0.28;
  return `<path d="M${n2(x)} ${n2(y - r)}L${n2(x + k)} ${n2(y - k)}L${n2(x + r)} ${n2(y)}L${n2(x + k)} ${n2(y + k)}L${n2(x)} ${n2(y + r)}L${n2(x - k)} ${n2(y + k)}L${n2(x - r)} ${n2(y)}L${n2(x - k)} ${n2(y - k)}Z" fill="${fill}" stroke="${NAVY}" stroke-width=".9" stroke-linejoin="round"/>`;
}

/** Speed streaks trailing behind the car: [x, y, length, width, colour, opacity], drawn along AXIS. */
function streaks(list) {
  const a = (AXIS * Math.PI) / 180;
  return list
    .map(([x, y, len, w, c, o]) => `<path d="M${n2(x)} ${n2(y)}l${n2(Math.cos(a) * len)} ${n2(Math.sin(a) * len)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round" opacity="${o}"/>`)
    .join('');
}

/** Cartoon tyre smoke: overlapping cream puffs with one ink outline around the lot. */
function smoke(puffs) {
  const c = (extra) => puffs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${n2(r + extra)}"/>`).join('');
  return `<g fill="${NAVY}">${c(1.1)}</g><g fill="${CREAM}">${c(0)}</g>` +
    `<g fill="#e4d9c2">${puffs.map(([x, y, r]) => `<circle cx="${n2(x + r * 0.22)}" cy="${n2(y + r * 0.3)}" r="${n2(r * 0.55)}"/>`).join('')}</g>`;
}

/**
 * The hero: car + effects in a 100x100 box. `disc` adds the sun disc behind it (app icons); without it the art is a
 * free-standing sticker (the in-game logo).
 */
function art(carHref, { disc }) {
  const behind =
    streaks([
      [58, 20, 46, 2.6, '#ffd02e', 0.95], [70, 29, 40, 1.6, CREAM, 0.9], [84, 37, 30, 3.2, '#ff6b1a', 0.95],
      [90, 50, 26, 1.8, CREAM, 0.85], [80, 73, 34, 2.4, '#ffd02e', 0.9], [62, 86, 30, 1.5, CREAM, 0.7],
    ]) +
    smoke([[83, 64, 6.2], [90.5, 59.5, 5.2], [91, 68.5, 4.6], [97, 64, 3.6], [77.5, 69, 4.2]]);
  return (
    (disc
      ? `<circle cx="50" cy="50" r="46" fill="url(#sun)" stroke="${NAVY}" stroke-width="3"/>` +
        `<circle cx="50" cy="50" r="41.5" fill="none" stroke="${CREAM}" stroke-opacity=".35" stroke-width="2"/>` +
        // sunburst wedges, clipped to the disc
        `<g clip-path="url(#disc)" fill="${CREAM}" opacity=".16">${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => `<path d="M50 50L${n2(50 + 70 * Math.cos((i * 45 + 8) * Math.PI / 180))} ${n2(50 + 70 * Math.sin((i * 45 + 8) * Math.PI / 180))}L${n2(50 + 70 * Math.cos((i * 45 + 26) * Math.PI / 180))} ${n2(50 + 70 * Math.sin((i * 45 + 26) * Math.PI / 180))}Z"/>`).join('')}</g>`
      : '') +
    behind +
    // contact shadow under the wheels
    `<ellipse cx="50" cy="72" rx="33" ry="5.5" fill="${NAVY}" opacity=".38" transform="rotate(${AXIS} 50 72)"/>` +
    `<image href="${carHref}" x="0" y="2" width="100" height="100" filter="url(#ink)"/>` +
    spark(20, 24, 5.2) + spark(31, 14, 2.6, CREAM) + spark(12, 80, 3.2, CREAM) + spark(70, 90, 2.4)
  );
}

const DEFS =
  `<linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd02e"/><stop offset="1" stop-color="#ff6b1a"/></linearGradient>` +
  `<radialGradient id="bg" cx=".5" cy=".4" r=".75"><stop offset="0" stop-color="#1b2550"/><stop offset="1" stop-color="${NAVY}"/></radialGradient>` +
  `<clipPath id="disc"><circle cx="50" cy="50" r="44.5"/></clipPath>` +
  // sticker-style ink outline around the rendered car
  `<filter id="ink" x="-10%" y="-10%" width="120%" height="120%"><feMorphology in="SourceAlpha" operator="dilate" radius="1"/><feFlood flood-color="${NAVY}" result="c"/><feComposite in="c" in2="SourceAlpha" operator="out" result="x"/><feMorphology in="SourceAlpha" operator="dilate" radius="1" result="d"/><feComposite in="c" in2="d" operator="in" result="o"/><feMerge><feMergeNode in="o"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`;

/**
 * App icon.
 * @param {number} o.scale   artwork scale around the centre (1 = disc radius 46% of the icon)
 * @param {number} o.radius  corner radius of the navy tile (0 = full-bleed square)
 */
function iconSvg(carHref, { scale, radius }) {
  const t = (50 * (1 - scale)).toFixed(3);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">` +
    `<defs>${DEFS}<clipPath id="tile"><rect width="100" height="100" rx="${radius}"/></clipPath></defs>` +
    `<g clip-path="url(#tile)">` +
    `<rect width="100" height="100" fill="url(#bg)"/>` +
    `<g transform="translate(${t} ${t}) scale(${scale})">${art(carHref, { disc: true })}</g>` +
    `</g></svg>\n`
  );
}

/** The car sticker on its own (transparent), used next to the wordmark in the game. Slightly padded for the streaks. */
function stickerSvg(carHref) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 100" width="792" height="600"><defs>${DEFS}</defs>${art(carHref, { disc: false })}</svg>\n`;
}

const server = await createServer({ root, configFile: false, logLevel: 'error', optimizeDeps: { entries: ['scripts/logo/scene.html'] }, server: { port: 5199, strictPort: false, host: '127.0.0.1' } });
await server.listen();
const base = `http://127.0.0.1:${server.config.server.port}`;
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });

try {
  const page = await browser.newPage();
  page.on('pageerror', (e) => { throw e; });

  /** Transparent PNG (data URL) of the posed car, size x size. */
  async function renderCar(size) {
    await page.setViewportSize({ width: size, height: size });
    await page.goto(`${base}/scripts/logo/scene.html?size=${size}&${POSE}`);
    await page.waitForFunction('window.__ready === true');
    return page.evaluate(() => document.querySelector('canvas').toDataURL('image/png'));
  }
  const carHi = await renderCar(640); // PNG rasters + in-game sticker
  const carLo = await renderCar(256); // embedded in the SVG icons (keeps them small)

  const svgs = {
    // "any" purpose icon: rounded navy tile, transparent corners.
    'icon.svg': iconSvg(carLo, { scale: 0.86, radius: 22 }),
    // maskable: full-bleed, artwork inside the central 80% safe zone.
    'icon-maskable.svg': iconSvg(carLo, { scale: 0.74, radius: 0 }),
  };
  svgs['favicon.svg'] = svgs['icon.svg'];
  for (const [name, text] of Object.entries(svgs)) fs.writeFileSync(path.join(pub, name), text);

  const pngs = [
    [iconSvg(carHi, { scale: 0.86, radius: 22 }), 'icon-192.png', 192, 192],
    [iconSvg(carHi, { scale: 0.86, radius: 22 }), 'icon-512.png', 512, 512],
    [iconSvg(carHi, { scale: 0.74, radius: 0 }), 'icon-maskable-192.png', 192, 192],
    [iconSvg(carHi, { scale: 0.74, radius: 0 }), 'icon-maskable-512.png', 512, 512],
    // apple-touch-icon: full-bleed and opaque (iOS applies its own mask and turns alpha black).
    [iconSvg(carHi, { scale: 0.84, radius: 0 }), 'apple-touch-icon.png', 180, 180],
    [iconSvg(carHi, { scale: 0.92, radius: 22 }), 'favicon-32.png', 32, 32],
    [stickerSvg(carHi), 'logo-car.png', 792, 600],
  ];
  for (const [svg, out, w, h] of pngs) {
    await page.setViewportSize({ width: w, height: h });
    await page.setContent(`<style>html,body{margin:0;background:transparent}svg{display:block;width:${w}px;height:${h}px}</style>${svg}`);
    await page.screenshot({ path: path.join(pub, out), omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
    console.log(`  ${out}  ${w}x${h}`);
  }
} finally {
  await browser.close();
  await server.close();
}
console.log('Icons written to public/');
