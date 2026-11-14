import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { attachRelay, mpInfoMiddleware } from './server/relay.js';

// ---------------------------------------------------------------- feature flags
// Multiplayer is opt-in at build time. Unset => OFF: the relay is not attached to the dev /
// preview server, and `__MULTIPLAYER__` folds to false so Rollup drops src/net/*, the lobby
// screens and the whole net glue from the bundle. See src/flags.js.
const MULTIPLAYER = /^(1|true|on|yes)$/i.test(String(process.env.VITE_MULTIPLAYER || ''));
console.log(`  toyz-race: multiplayer ${MULTIPLAYER ? 'ON (VITE_MULTIPLAYER set)' : 'OFF (set VITE_MULTIPLAYER=1 to build it in)'}`);

// Multiplayer relay on the same port as the dev / preview server (ws upgrade path /mp, GET /mp/info).
function multiplayerRelay() {
  const wire = (server) => {
    server.middlewares.use(mpInfoMiddleware({ path: '/mp' }));
    if (server.httpServer) attachRelay(server.httpServer, { path: '/mp' });
  };
  return {
    name: 'toyz-race-relay',
    configureServer: wire,
    configurePreviewServer: wire,
  };
}

// Dev only: the service worker is OFF in `npm run dev`. But a production build may have been opened on the same
// origin before (npm run serve / preview share localhost ports with dev) and its service worker would keep serving
// the cached build instead of the dev server. So in dev, /sw.js answers with a worker that removes itself.
const SELF_DESTROYING_SW = `// Toyz Race dev: removes a previously installed production service worker.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    await self.registration.unregister();
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k.startsWith('workbox-') || k.includes('precache')).map((k) => caches.delete(k)));
    const clients = await self.clients.matchAll({ type: 'window' });
    for (const c of clients) c.navigate(c.url).catch(() => {});
  })());
});
`;
// Mirrors the standalone server: with the flag off, /mp* is a 404 instead of the SPA fallback.
function relayDisabled() {
  const wire = (server) => {
    server.middlewares.use((req, res, next) => {
      const p = (req.url || '').split('?')[0].replace(/\/+$/, '');
      if (p !== '/mp' && !p.startsWith('/mp/')) return next();
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain; charset=utf-8');
      res.end('Multiplayer is disabled in this build.');
    });
  };
  return { name: 'toyz-race-relay-disabled', configureServer: wire, configurePreviewServer: wire };
}

function devServiceWorkerOff() {
  return {
    name: 'toyz-race-dev-sw-off',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if ((req.url || '').split('?')[0] !== '/sw.js') return next();
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript; charset=utf-8');
        res.setHeader('Cache-Control', 'no-store');
        res.end(SELF_DESTROYING_SW);
      });
    },
  };
}

export default defineConfig({
  plugins: [
    // Falsy entries are ignored by Vite: with the flag off the relay is never wired up.
    MULTIPLAYER ? multiplayerRelay() : relayDisabled(),
    devServiceWorkerOff(),
    // Service worker (workbox generateSW) -> dist/sw.js. Registered by src/pwa/register.js in production builds only.
    VitePWA({
      strategies: 'generateSW',
      filename: 'sw.js',
      injectRegister: false, // src/pwa/register.js does it
      manifest: false, // hand-written public/manifest.webmanifest (relative urls, works under any base path)
      devOptions: { enabled: false },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest,woff,woff2,ttf,json,wasm,glb,gltf,bin,mp3,ogg,wav,m4a,jpg,jpeg,webp,avif,ktx2,hdr}'],
        maximumFileSizeToCacheInBytes: 8 * 1024 * 1024, // the three.js game chunk is ~1 MB
        navigateFallback: 'index.html',
        // Never answer the multiplayer relay from the cache (ws upgrade on /mp, GET /mp/info).
        navigateFallbackDenylist: [/\/mp(\/|$)/],
        cleanupOutdatedCaches: true,
        // A new version installs in the background and WAITS: it takes over on the next launch, never mid-race.
        skipWaiting: false,
        clientsClaim: true,
      },
    }),
  ],
  // Substituted into the sources; src/flags.js turns it into the exported MULTIPLAYER constant.
  define: { __MULTIPLAYER__: JSON.stringify(MULTIPLAYER) },
  server: { host: true, port: 5173, strictPort: true },
  preview: { host: true, port: 5173, strictPort: true },
});
