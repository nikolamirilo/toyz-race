// Toyz Race — logo / icon generator. Writes the icon sources into public/.
//   npm run icons
// The mark is a "photo" from the game itself: Needle Nine (the formula car) sliding through Midnight Megamart under
// the neon shelves — real models, lights, shadows, depth of field and tyre smoke (scripts/logo/shot.js). The in-game
// wordmark gets the same car as a cut-out (scripts/logo/scene.js -> public/logo-car.png).
//
// Needs a Chromium driven by Playwright (`npx playwright install chromium`, not a project dependency): it renders
// the scenes with WebGL. Vite (a devDependency) serves the render pages while the script runs.
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

// The shot (see the query parameters at the top of scripts/logo/shot.js).
const SHOT = 'track=toyshop&t=0.3&car=needlenine&slide=0.3';
const CAM = 'cam=3.1,1.0,4.7';
// Maskable icons are cropped to a circle of 80% by the launcher: step back so the whole car stays inside it.
const CAM_SAFE = 'cam=4.1,1.3,6.2';
// The cut-out next to the wordmark.
const CUTOUT = 'car=needlenine&h=-0.35&steer=0.9&roll=0.1&cy=1.3&ly=0.3&dutch=-0.1&fov=27';

/** SVG wrapper around the photo: a rounded tile (radius in % of the side; 0 = full-bleed square). */
function svg(href, radius) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">` +
    `<defs><clipPath id="tile"><rect width="100" height="100" rx="${radius}"/></clipPath></defs>` +
    `<image href="${href}" width="100" height="100" clip-path="url(#tile)" preserveAspectRatio="xMidYMid slice"/>` +
    `</svg>\n`
  );
}

const server = await createServer({ root, configFile: false, logLevel: 'error', optimizeDeps: { entries: ['scripts/logo/*.html'] }, server: { port: 5199, strictPort: false, host: '127.0.0.1' } });
await server.listen();
const base = `http://127.0.0.1:${server.config.server.port}`;
const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });

try {
  const page = await browser.newPage();
  page.on('pageerror', (e) => { throw e; });

  /** Renders a scene page at size x size and returns its canvas as a data URL. */
  async function render(pageName, query, size, type) {
    await page.setViewportSize({ width: size, height: size });
    await page.goto(`${base}/scripts/logo/${pageName}?size=${size}&${query}`);
    await page.waitForFunction('window.__ready === true', null, { timeout: 180000 });
    return page.evaluate((t) => document.querySelector('canvas').toDataURL(t, 0.86), type);
  }
  const photo = await render('shot.html', `${SHOT}&${CAM}`, 1024, 'image/png');
  const photoSafe = await render('shot.html', `${SHOT}&${CAM_SAFE}`, 1024, 'image/png');
  // small JPEGs embedded in the SVG icons (keeps them light)
  const photoLo = await render('shot.html', `${SHOT}&${CAM}`, 256, 'image/jpeg');
  const photoSafeLo = await render('shot.html', `${SHOT}&${CAM_SAFE}`, 256, 'image/jpeg');
  const cutout = await render('scene.html', CUTOUT, 800, 'image/png');

  const svgs = {
    // "any" purpose icon: rounded tile, transparent corners.
    'icon.svg': svg(photoLo, 22),
    // maskable: full-bleed, the car inside the central 80% safe zone.
    'icon-maskable.svg': svg(photoSafeLo, 0),
  };
  svgs['favicon.svg'] = svgs['icon.svg'];
  for (const [name, text] of Object.entries(svgs)) fs.writeFileSync(path.join(pub, name), text);

  const cutoutHtml =
    // the car with a neon pool of light under it, cropped to the car
    `<div style="position:relative;width:840px;height:520px;overflow:hidden">` +
    `<div style="position:absolute;left:125px;top:300px;width:640px;height:150px;border-radius:50%;background:radial-gradient(closest-side,rgba(255,79,176,.75),rgba(255,79,176,.28) 55%,rgba(255,79,176,0));transform:rotate(-12deg)"></div>` +
    `<img src="${cutout}" style="position:absolute;left:36px;top:-150px;width:800px;height:800px"></div>`;
  const pngs = [
    [svg(photo, 22), 'icon-192.png', 192, 192],
    [svg(photo, 22), 'icon-512.png', 512, 512],
    [svg(photoSafe, 0), 'icon-maskable-192.png', 192, 192],
    [svg(photoSafe, 0), 'icon-maskable-512.png', 512, 512],
    // apple-touch-icon: full-bleed and opaque (iOS applies its own mask and turns alpha black).
    [svg(photo, 0), 'apple-touch-icon.png', 180, 180],
    [svg(photo, 22), 'favicon-32.png', 32, 32],
    [cutoutHtml, 'logo-car.png', 840, 520],
  ];
  for (const [html, out, w, h] of pngs) {
    await page.setViewportSize({ width: w, height: h });
    await page.setContent(`<style>html,body{margin:0;background:transparent}body>svg{display:block;width:${w}px;height:${h}px}</style>${html}`);
    await page.waitForLoadState('load');
    await page.screenshot({ path: path.join(pub, out), omitBackground: true, clip: { x: 0, y: 0, width: w, height: h } });
    console.log(`  ${out}  ${w}x${h}`);
  }
} finally {
  await browser.close();
  await server.close();
}
console.log('Icons written to public/');
