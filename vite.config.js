import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { attachRelay, mpInfoMiddleware } from './server/relay.js';

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
    multiplayerRelay(),
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
  server: { host: true, port: 5173, strictPort: true },
  preview: { host: true, port: 5173, strictPort: true },
});
