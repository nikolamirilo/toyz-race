// Toyz Race — standalone server: serves dist/ + the multiplayer relay on one port.
//   npm run build && npm run serve        (PORT=8080 npm run serve to change the port)
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { attachRelay, handleMpInfo, lanAddresses } from './relay.js';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.wasm': 'application/wasm',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.bin': 'application/octet-stream',
  '.hdr': 'application/octet-stream',
  '.ktx2': 'image/ktx2',
};

function statFile(p) {
  try {
    const s = fs.statSync(p);
    return s.isFile() ? s : null;
  } catch {
    return null;
  }
}

/** Create (not yet listening) http server serving `root` + relay. */
export function createStandaloneServer({ root, relayPath = '/mp' } = {}) {
  const distDir = path.resolve(root || path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist'));

  const server = http.createServer((req, res) => {
    if (handleMpInfo(req, res, { path: relayPath })) return;
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    let pathname;
    try {
      pathname = decodeURIComponent((req.url || '/').split('?')[0]);
    } catch {
      res.writeHead(400).end('Bad request');
      return;
    }
    let file = path.join(distDir, path.normalize('/' + pathname));
    if (file !== distDir && !file.startsWith(distDir + path.sep)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    if (pathname.endsWith('/')) file = path.join(file, 'index.html');
    let stat = statFile(file);
    let fallback = false;
    if (!stat) {
      // SPA fallback for navigations; real 404 for missing assets (anything with an extension).
      if (path.extname(pathname)) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
        return;
      }
      file = path.join(distDir, 'index.html');
      stat = statFile(file);
      fallback = true;
      if (!stat) {
        res
          .writeHead(503, { 'Content-Type': 'text/plain; charset=utf-8' })
          .end('dist/index.html not found - run "npm run build" first.');
        return;
      }
    }
    const ext = path.extname(file).toLowerCase();
    const isHtml = ext === '.html';
    const hashed = !fallback && /[\\/]assets[\\/]/.test(file);
    // PWA: the service worker, its workbox runtime and the manifest must always be revalidated so updates are seen.
    const base = path.basename(file);
    const isServiceWorker = /^(sw|service-worker|registerSW)\.js$/.test(base) || /^workbox-[\w-]+\.js$/.test(base);
    const revalidate = isHtml || isServiceWorker || ext === '.webmanifest';
    const headers = {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Content-Length': stat.size,
      'Cache-Control': revalidate ? 'no-cache' : hashed ? 'public, max-age=31536000, immutable' : 'public, max-age=3600',
      'X-Content-Type-Options': 'nosniff',
    };
    if (isServiceWorker) headers['Service-Worker-Allowed'] = '/';
    res.writeHead(200, headers);
    if (req.method === 'HEAD') {
      res.end();
      return;
    }
    fs.createReadStream(file)
      .on('error', () => res.destroy())
      .pipe(res);
  });

  const relay = attachRelay(server, { path: relayPath });
  // Nothing else speaks websocket here: refuse other upgrade paths instead of leaving them hanging.
  server.on('upgrade', (req, socket) => {
    const p = (req.url || '').split('?')[0].replace(/\/+$/, '');
    if (p !== relayPath) socket.destroy();
  });
  return { server, relay, distDir };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const port = Number(process.env.PORT) || 5173;
  const { server, distDir } = createStandaloneServer();
  server.on('error', (err) => {
    console.error(err.code === 'EADDRINUSE' ? `Port ${port} is already in use (set PORT=xxxx).` : err);
    process.exit(1);
  });
  server.listen(port, '0.0.0.0', () => {
    console.log(`\n  Toyz Race - serving ${distDir}`);
    if (!statFile(path.join(distDir, 'index.html'))) console.log('  (no build found: run "npm run build" first)');
    console.log(`\n  Local:   http://localhost:${port}/`);
    for (const a of lanAddresses()) console.log(`  Network: http://${a}:${port}/`);
    console.log('\n  Multiplayer relay on /mp - share a Network URL with players on your LAN.\n');
  });
}
