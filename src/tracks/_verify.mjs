// node src/tracks/_verify.mjs — structural checks for every track (no browser needed).
import * as THREE from 'three';
import { TRACKS, buildTrack } from './index.js';

let failures = 0;
const fail = (id, msg) => { failures++; console.log(`  FAIL [${id}] ${msg}`); };
const ok = (c, id, msg) => { if (!c) fail(id, msg); };
const wrapT = (d) => { d = Math.abs(d) % 1; return Math.min(d, 1 - d); };

ok(TRACKS.length === 4, 'index', 'TRACKS must have 4 entries');
for (const meta of TRACKS) {
  for (const k of ['id', 'name', 'description', 'difficulty', 'defaultLaps', 'lengthLabel']) ok(meta[k] !== undefined, meta.id, 'meta.' + k);
  const t0 = performance.now();
  const tr = buildTrack(meta.id);
  const buildMs = performance.now() - t0;
  const id = tr.id, L = tr.length;
  const K = 2000;
  const S = [];
  for (let i = 0; i < K; i++) S.push(tr.sample(i / K));
  const maxHW = Math.max(...S.map((s) => s.halfWidth)), minHW = Math.min(...S.map((s) => s.halfWidth));

  // --- API shape
  for (const k of ['group', 'background', 'length', 'sample', 'project', 'startGrid', 'pickupSpots', 'obstacles', 'boostPads', 'minimap', 'update', 'dispose', 'sun'])
    ok(tr[k] !== undefined && tr[k] !== null, id, 'missing ' + k);
  ok(tr.group.isGroup, id, 'group');
  ok(tr.background.isColor || tr.background.isTexture, id, 'background type');
  ok(tr.fog === null || tr.fog.isFog, id, 'fog type');

  // --- closed + length
  const gap = S[0].pos.distanceTo(tr.sample(0.99999).pos);
  ok(gap < 0.05, id, 'curve not closed: ' + gap);
  ok(Math.abs(tr.sample(1).pos.distanceTo(S[0].pos)) < 1e-6, id, 'sample(1) != sample(0)');
  ok(L >= 450 && L <= 900, id, 'length ' + L.toFixed(1));
  let acc = 0;
  for (let i = 0; i < K; i++) { const a = S[i].pos, b = S[(i + 1) % K].pos; acc += Math.hypot(a.x - b.x, a.z - b.z); }
  ok(Math.abs(acc - L) < L * 0.005, id, `length mismatch ${acc.toFixed(1)} vs ${L.toFixed(1)}`);

  // --- vectors, slopes, curvature
  let maxSlope = 0, minR = Infinity, maxY = -Infinity, minY = Infinity;
  for (let i = 0; i < K; i++) {
    const s = S[i], n = S[(i + 1) % K], p = S[(i + K - 1) % K];
    ok(Math.abs(s.tangent.length() - 1) < 1e-6 && Math.abs(s.right.length() - 1) < 1e-6 && Math.abs(s.right.y) < 1e-9, id, 'non-unit vectors at ' + i);
    ok(Math.abs(s.right.x * s.tangent.x + s.right.z * s.tangent.z) < 1e-3, id, 'right not perpendicular at ' + i);
    // right = (-tz, 0, tx) convention: heading increases to the LEFT, right is -X when facing +Z
    const hl = Math.hypot(s.tangent.x, s.tangent.z);
    ok(Math.abs(s.right.x + s.tangent.z / hl) < 1e-3 && Math.abs(s.right.z - s.tangent.x / hl) < 1e-3, id, 'right handedness at ' + i);
    const dx = n.pos.x - s.pos.x, dz = n.pos.z - s.pos.z;
    ok(dx * s.tangent.x + dz * s.tangent.z > 0, id, 'tangent not along increasing t at ' + i);
    maxSlope = Math.max(maxSlope, Math.abs(Math.atan2(n.pos.y - s.pos.y, Math.hypot(dx, dz))));
    let dh = Math.atan2(n.tangent.x, n.tangent.z) - Math.atan2(p.tangent.x, p.tangent.z);
    while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    const ds = Math.hypot(n.pos.x - p.pos.x, n.pos.z - p.pos.z);
    if (Math.abs(dh) > 1e-6) minR = Math.min(minR, ds / Math.abs(dh));
    maxY = Math.max(maxY, s.pos.y); minY = Math.min(minY, s.pos.y);
    ok(s.halfWidth >= 6 && s.halfWidth <= 9.001, id, 'halfWidth out of 6..9: ' + s.halfWidth);
  }
  const slopeDeg = (maxSlope * 180) / Math.PI;
  ok(slopeDeg < 25, id, 'slope ' + slopeDeg.toFixed(1));
  ok(minR > maxHW + tr.wallOffset + 1, id, `min corner radius ${minR.toFixed(1)} too tight for halfWidth ${maxHW}`);
  ok(minY > 0.05, id, 'road below ground ' + minY);

  // --- no self intersection / overlap: non-adjacent parts must be > 2*hw + 2 (+ walls) apart
  let minSep = Infinity;
  const guard = Math.ceil(((Math.PI * (2 * maxHW + 6)) / L) * K) + 4; // skip neighbours within a half-circle of arc
  for (let i = 0; i < K; i++) for (let j = i + guard; j < K; j++) {
    if (K - j + i < guard) continue;
    const d = Math.hypot(S[i].pos.x - S[j].pos.x, S[i].pos.z - S[j].pos.z) - S[i].halfWidth - S[j].halfWidth;
    if (d < minSep) minSep = d;
  }
  ok(minSep > 2 + 2 * tr.wallOffset, id, `road overlaps itself: free gap ${minSep.toFixed(2)}`);
  const segX = (a, b, c, d) => {
    const o = (p, q, r) => Math.sign((q.x - p.x) * (r.z - p.z) - (q.z - p.z) * (r.x - p.x));
    return o(a, b, c) !== o(a, b, d) && o(c, d, a) !== o(c, d, b);
  };
  let crossings = 0;
  const KS = 500;
  for (let i = 0; i < KS; i++) for (let j = i + 2; j < KS; j++) {
    if (i === 0 && j === KS - 1) continue;
    if (segX(S[i * 4].pos, S[((i + 1) * 4) % K].pos, S[j * 4].pos, S[((j + 1) * 4) % K].pos)) crossings++;
  }
  ok(crossings === 0, id, 'centerline self-intersections: ' + crossings);

  // --- project round trip (global + hinted), lateral offsets, no branch jumping with a hint
  let maxDt = 0, maxLat = 0, maxLatErr = 0, maxDy = 0;
  const v = new THREE.Vector3();
  for (let k = 0; k < 200; k++) {
    const t = (k + 0.37) / 200;
    const s = tr.sample(t);
    for (const hint of [undefined, t, t - 4 / L, t + 4 / L]) {
      const p = tr.project(s.pos, hint);
      maxDt = Math.max(maxDt, wrapT(p.t - t) * L);
      maxLat = Math.max(maxLat, Math.abs(p.lateral));
      maxDy = Math.max(maxDy, Math.abs(p.y - s.pos.y));
      ok(Math.abs(p.halfWidth - s.halfWidth) < 0.05, id, 'project halfWidth');
    }
    for (const f of [-0.9, -0.5, 0.5, 0.9]) {
      const lat = f * s.halfWidth;
      v.copy(s.pos).addScaledVector(s.right, lat);
      for (const hint of [undefined, t]) {
        const p = tr.project(v, hint);
        maxLatErr = Math.max(maxLatErr, Math.abs(p.lateral - lat));
        ok(wrapT(p.t - t) * L < 1.0, id, `offset projection moved t by ${(wrapT(p.t - t) * L).toFixed(2)} at t=${t.toFixed(3)} lat=${lat.toFixed(1)}`);
      }
    }
  }
  ok(maxDt < 0.02, id, 'round trip t error (units) ' + maxDt);
  ok(maxLat < 0.01, id, 'round trip lateral ' + maxLat);
  ok(maxDy < 0.01, id, 'round trip y ' + maxDy);
  ok(maxLatErr < 0.12, id, 'lateral offset error ' + maxLatErr);
  // simulated lap with hint, including wrap, driving on the wall line
  let hint = 0.98, bad = 0;
  for (let k = 0; k < 3000; k++) {
    const t = (0.98 + (k / 3000) * 1.1) % 1;
    const s = tr.sample(t);
    v.copy(s.pos).addScaledVector(s.right, (k % 2 ? 1 : -1) * s.halfWidth);
    const p = tr.project(v, hint);
    if (wrapT(p.t - t) * L > 1.5) bad++;
    hint = p.t;
  }
  ok(bad === 0, id, 'hinted lap lost track ' + bad + ' times');
  // stale hint far away must still find the right place (teleport / respawn)
  { const s = tr.sample(0.5); const p = tr.project(s.pos, 0.02); ok(wrapT(p.t - 0.5) * L < 0.5, id, 'stale hint not recovered'); }
  const pr0 = performance.now();
  for (let k = 0; k < 20000; k++) tr.project(S[(k * 7) % K].pos, ((k * 7) % K) / K);
  const hintedUs = ((performance.now() - pr0) / 20000) * 1000;
  const pr1 = performance.now();
  for (let k = 0; k < 20000; k++) tr.project(S[(k * 7) % K].pos);
  const globalUs = ((performance.now() - pr1) / 20000) * 1000;

  // --- start grid
  ok(tr.startGrid.length === 8, id, 'startGrid length');
  const h0 = Math.atan2(S[0].tangent.x, S[0].tangent.z);
  tr.startGrid.forEach((g, i) => {
    const p = tr.project(g.pos);
    ok(Math.abs(p.lateral) < p.halfWidth - 1.2, id, `grid ${i} off road (lat ${p.lateral.toFixed(1)})`);
    ok(p.t > 0.9, id, `grid ${i} not behind the line (t=${p.t.toFixed(3)})`);
    ok((1 - p.t) * L > 3 && (1 - p.t) * L < 40, id, `grid ${i} distance behind line ${((1 - p.t) * L).toFixed(1)}`);
    ok(Math.abs(g.pos.y - p.y) < 0.02, id, `grid ${i} y`);
    let dh = g.heading - h0; while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    ok(Math.abs(dh) < 0.12, id, `grid ${i} heading differs from start heading by ${dh.toFixed(2)}`);
    for (let j = 0; j < i; j++) ok(g.pos.distanceTo(tr.startGrid[j].pos) > 3, id, `grid ${i}/${j} too close`);
    if (i > 0) ok(p.t < tr.project(tr.startGrid[i - 1].pos).t, id, `grid ${i} should be behind grid ${i - 1}`);
  });
  // start straight: low curvature 45 units behind and 30 ahead of the line
  for (let d = -45; d <= 30; d += 3) {
    const a = tr.sample(d / L), b = tr.sample((d + 3) / L);
    let dh = Math.atan2(b.tangent.x, b.tangent.z) - Math.atan2(a.tangent.x, a.tangent.z);
    while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    ok(Math.abs(dh) < 0.03, id, 'start straight is curved at ' + d);
  }

  // --- pickups, boost pads, obstacles
  ok(tr.pickupSpots.length >= 12 && tr.pickupSpots.length <= 24, id, 'pickup count ' + tr.pickupSpots.length);
  for (const s of tr.pickupSpots) {
    const p = tr.project(s);
    ok(Math.abs(p.lateral) < p.halfWidth - 1.5, id, 'pickup off road');
    ok(Math.abs(s.y - p.y) < 0.02, id, 'pickup y');
    for (const g of tr.startGrid) ok(g.pos.distanceTo(s) > 8, id, 'pickup on grid');
  }
  ok(tr.boostPads.length >= 2 && tr.boostPads.length <= 4, id, 'boost pad count');
  for (const b of tr.boostPads) {
    const p = tr.project(b);
    ok(Math.abs(p.lateral) + b.radius < p.halfWidth, id, 'boost pad off road');
    const s = tr.sample(p.t);
    let dh = b.heading - Math.atan2(s.tangent.x, s.tangent.z); while (dh > Math.PI) dh -= 2 * Math.PI; while (dh < -Math.PI) dh += 2 * Math.PI;
    ok(Math.abs(dh) < 0.05, id, 'boost heading');
  }
  ok(tr.obstacles.length <= 4, id, 'too many obstacles');
  for (const o of tr.obstacles) {
    const p = tr.project(o);
    ok(Math.abs(p.lateral) + o.radius < p.halfWidth, id, 'obstacle not inside road');
    ok(p.halfWidth * 2 - o.radius * 2 - (p.halfWidth - Math.abs(p.lateral) - o.radius) > 6, id, 'obstacle leaves no gap');
    ok(p.t * L > 40 && (1 - p.t) * L > 45, id, 'obstacle too close to the start');
    for (const s of tr.pickupSpots) ok(Math.hypot(s.x - o.x, s.z - o.z) > 8, id, 'obstacle on a pickup');
    for (const b of tr.boostPads) ok(Math.hypot(b.x - o.x, b.z - o.z) > 12, id, 'obstacle on a boost pad');
  }
  ok(tr.minimap.length >= 100 && tr.minimap.length <= 140 && tr.minimap[0].length === 2, id, 'minimap');

  // --- scenery footprints: everything decorative must be outside the drivable band (and outside the barrier)
  const obstacleSet = tr.obstacles;
  let worst = Infinity, worstName = '';
  for (const f of tr.debug.footprints) {
    const p = tr.project(f);
    const s = tr.sample(p.t);
    const dist = Math.hypot(f.x - s.pos.x, f.z - s.pos.z);
    const clear = dist - f.r - p.halfWidth;
    if (clear < worst) { worst = clear; worstName = f.name; }
    if (clear < tr.wallOffset) {
      const listed = obstacleSet.some((o) => Math.hypot(o.x - f.x, o.z - f.z) < 0.5);
      if (!listed) fail(id, `scenery '${f.name}' at (${f.x.toFixed(1)}, ${f.z.toFixed(1)}) r=${f.r} intrudes: clearance to road edge ${clear.toFixed(2)}`);
    }
  }
  // --- mesh level check: any mesh vertex below 4.5 units above the road and inside the band? (catches unregistered props)
  let intruders = 0;
  const allowed = new Set(['road', 'startline', 'boostpad', 'ground', 'rug', 'sky', 'wet-sand']);
  const obstacleNear = (x, z) => tr.obstacles.some((o) => Math.hypot(o.x - x, o.z - z) < o.radius + 1.2);
  tr.group.updateMatrixWorld(true);
  const m4 = new THREE.Matrix4();
  tr.group.traverse((o) => {
    if (!o.isMesh || allowed.has(o.name)) return;
    const pos = o.geometry.attributes.position;
    const inst = o.isInstancedMesh ? o.count : 1;
    for (let n = 0; n < inst; n++) {
      if (o.isInstancedMesh) { o.getMatrixAt(n, m4); m4.premultiply(o.matrixWorld); } else m4.copy(o.matrixWorld);
      const step = o.isInstancedMesh ? Math.max(1, pos.count >> 2) : 1;
      for (let i = 0; i < pos.count; i += step) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m4);
        if (Math.abs(v.x) > 150 || Math.abs(v.z) > 110) continue;
        const p = tr.project(v);
        const s = tr.sample(p.t);
        const dist = Math.hypot(v.x - s.pos.x, v.z - s.pos.z);
        if (dist < p.halfWidth - 0.02 && v.y < p.y + 4.5 && v.y > p.y - 0.2 && !obstacleNear(v.x, v.z)) {
          if (intruders < 5) console.log(`    intruding vertex of '${o.name}' at (${v.x.toFixed(1)}, ${v.y.toFixed(1)}, ${v.z.toFixed(1)}) lateral ${p.lateral.toFixed(2)} t=${p.t.toFixed(3)}`);
          intruders++;
        }
      }
    }
  });
  ok(intruders === 0, id, `${intruders} mesh vertices inside the drivable band below 4.5 units`);

  // --- lights + update + dispose
  let dirShadow = 0, shadowLights = 0;
  tr.group.traverse((o) => { if (o.isLight && o.castShadow) { shadowLights++; if (o.isDirectionalLight) dirShadow++; } });
  ok(shadowLights === 1 && dirShadow === 1, id, 'exactly one shadow-casting directional light');
  ok(tr.sun.isDirectionalLight && tr.sun.shadow.mapSize.x === 2048, id, 'sun');
  for (let k = 0; k < 5; k++) tr.update(1 / 60, k / 60);
  tr.followShadow(new THREE.Vector3(10, 0, 10), 70);

  const d = tr.debug;
  console.log(`${failures ? '✗' : '✓'} ${id.padEnd(8)} "${tr.name}"  len ${L.toFixed(0)}  hw ${minHW.toFixed(1)}-${maxHW.toFixed(1)}  y ${minY.toFixed(2)}..${maxY.toFixed(2)}  slope ${slopeDeg.toFixed(1)}°  minR ${minR.toFixed(1)}  minGap ${minSep.toFixed(1)}  samples ${tr.samples}`);
  console.log(`    meshes(draw calls) ${d.meshCount}  lights ${d.lightCount}  tris ${d.triangles}  footprints ${d.footprints.length} (tightest '${worstName}' ${worst.toFixed(2)})  pickups ${tr.pickupSpots.length}  boosts ${tr.boostPads.length}  obstacles ${tr.obstacles.length}`);
  console.log(`    project: hinted ${hintedUs.toFixed(2)}µs  global ${globalUs.toFixed(2)}µs  roundtrip Δt ${maxDt.toExponential(1)}u lat ${maxLat.toExponential(1)}  build ${buildMs.toFixed(0)}ms`);
  tr.dispose();
  tr.dispose();
}
console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL TRACK CHECKS PASSED');
process.exit(failures ? 1 : 0);
