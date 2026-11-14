// Test-only mock Track implementing the CONTRACT.md Track interface (sample / project / obstacles / boostPads).
// Layout: long straight with a jump crest, a radius-10 hairpin, an S-bend, sweepers and a tight left-right.
import * as THREE from 'three';

export function createMockTrack({ halfWidth = 7, obstacles = true, reverseRight = false } = {}) {
  const P = [
    [0, 0], [40, 0], [80, 0], [120, 0], [150, 2], [166, 14], [168, 32], [156, 46], [136, 48],  // straight + R10-ish hairpin
    [110, 44], [88, 50], [76, 66], [80, 84], [98, 94], [124, 96], [146, 106], [152, 126],          // S-bends
    [140, 144], [116, 150], [70, 150], [30, 150], [0, 150], [-22, 140], [-30, 120],               // back straight
    [-22, 100], [-4, 90], [4, 74], [-6, 58], [-24, 50], [-34, 34], [-30, 14], [-16, 2],            // tight left-right
  ];
  const curve = new THREE.CatmullRomCurve3(P.map(([x, z]) => new THREE.Vector3(x, 0, z)), true, 'centripetal');
  const N = 2400;
  const pts = curve.getSpacedPoints(N); // N+1 points, last == first
  pts.pop();
  const length = curve.getLength();
  const seg = length / N;

  // elevation: a sharp crest on the main straight (jump) and a rolling hill on the back straight
  const elev = (s) => {
    const g = (c, w, h) => { let d = s - c; d -= Math.round(d / length) * length; return h * Math.exp(-(d * d) / (w * w)); };
    return g(70, 9, 2.6) + g(length * 0.62, 26, 4);
  };
  const px = new Float64Array(N), pz = new Float64Array(N), py = new Float64Array(N);
  const tx = new Float64Array(N), tz = new Float64Array(N);
  for (let i = 0; i < N; i++) { px[i] = pts[i].x; pz[i] = pts[i].z; py[i] = elev(i * seg); }
  for (let i = 0; i < N; i++) {
    const a = (i + N - 1) % N, b = (i + 1) % N;
    const dx = px[b] - px[a], dz = pz[b] - pz[a], l = Math.hypot(dx, dz);
    tx[i] = dx / l; tz[i] = dz / l;
  }
  const rs = reverseRight ? -1 : 1;

  let minRadius = Infinity, minRadiusAt = 0;
  for (let i = 0; i < N; i++) {
    const a = (i + N - 3) % N, b = (i + 3) % N;
    let dh = Math.atan2(tx[b], tz[b]) - Math.atan2(tx[a], tz[a]);
    dh = Math.atan2(Math.sin(dh), Math.cos(dh));
    const r = Math.abs((6 * seg) / dh);
    if (r < minRadius) { minRadius = r; minRadiusAt = i / N; }
  }

  function sample(t) {
    t -= Math.floor(t);
    const f = t * N, i = Math.floor(f) % N, j = (i + 1) % N, u = f - Math.floor(f);
    const tgx = tx[i] + (tx[j] - tx[i]) * u, tgz = tz[i] + (tz[j] - tz[i]) * u;
    const l = Math.hypot(tgx, tgz);
    const dy = (py[j] - py[i]) / seg;
    const tangent = new THREE.Vector3(tgx / l, dy, tgz / l).normalize();
    return {
      pos: new THREE.Vector3(px[i] + (px[j] - px[i]) * u, py[i] + (py[j] - py[i]) * u, pz[i] + (pz[j] - pz[i]) * u),
      tangent,
      right: new THREE.Vector3((-tgz / l) * rs, 0, (tgx / l) * rs), // tangent x up
      halfWidth,
    };
  }

  const out = { t: 0, lateral: 0, y: 0, halfWidth };
  function project(pos, hintT) {
    let best = 0, bd = Infinity;
    if (hintT === undefined || hintT === null) {
      for (let i = 0; i < N; i += 4) {
        const dx = pos.x - px[i], dz = pos.z - pz[i], d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
      for (let k = -4; k <= 4; k++) {
        const i = (best + k + N) % N;
        const dx = pos.x - px[i], dz = pos.z - pz[i], d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    } else {
      const h = Math.floor((hintT - Math.floor(hintT)) * N);
      for (let k = -30; k <= 30; k++) {
        const i = (h + k + N) % N;
        const dx = pos.x - px[i], dz = pos.z - pz[i], d = dx * dx + dz * dz;
        if (d < bd) { bd = d; best = i; }
      }
    }
    // refine on the two neighbouring segments
    let i = best;
    let u = ((pos.x - px[i]) * tx[i] + (pos.z - pz[i]) * tz[i]) / seg;
    if (u < 0) { i = (i + N - 1) % N; u += 1; }
    u = u < 0 ? 0 : u > 1 ? 1 : u;
    const j = (i + 1) % N;
    const cx = px[i] + (px[j] - px[i]) * u, cz = pz[i] + (pz[j] - pz[i]) * u;
    const tgx = tx[i] + (tx[j] - tx[i]) * u, tgz = tz[i] + (tz[j] - tz[i]) * u;
    const l = Math.hypot(tgx, tgz);
    out.t = ((i + u) / N) % 1;
    out.lateral = ((pos.x - cx) * (-tgz / l) + (pos.z - cz) * (tgx / l)) * rs;
    out.y = py[i] + (py[j] - py[i]) * u;
    out.halfWidth = halfWidth;
    return out;
  }

  const at = (t, lat) => { const s = sample(t); return { x: s.pos.x + s.right.x * lat, z: s.pos.z + s.right.z * lat }; };
  const obs = obstacles
    ? [{ ...at(0.3, 2.5), radius: 1.2 }, { ...at(0.52, -3), radius: 1.0 }, { ...at(0.9, 0), radius: 1.4 }, { ...at(0.05, -2), radius: 0.9 }]
    : [];
  const pads = [
    { ...at(0.02, 2), radius: 1.6, heading: 0 },
    { ...at(0.56, 0), radius: 1.6, heading: 0 },
  ];
  const startGrid = [];
  for (let i = 0; i < 8; i++) {
    const t = 1 - (6 + i * 3.2) / length;
    const s = sample(t);
    const lat = (i % 2 ? 1 : -1) * 2.4;
    startGrid.push({ pos: s.pos.clone().addScaledVector(s.right, lat), heading: Math.atan2(s.tangent.x, s.tangent.z) });
  }

  return {
    id: 'mock', name: 'Mock Loop', length, sample, project, obstacles: obs, boostPads: pads, startGrid,
    minRadius, minRadiusAt, elev,
  };
}
