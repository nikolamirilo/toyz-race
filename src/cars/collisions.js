// Circle-vs-circle car collisions: positional push-apart + impulse exchange weighted by mass.

const RESTITUTION = 0.45;

export function resolveCarCollisions(cars) {
  let maxImpact = 0;
  const n = cars.length;
  for (let i = 0; i < n; i++) {
    const a = cars[i];
    for (let j = i + 1; j < n; j++) {
      const b = cars[j];
      if (a.frozen && b.frozen) continue;
      if (Math.abs(a.pos.y - b.pos.y) > 0.9) continue; // one is flying over the other
      let dx = b.pos.x - a.pos.x;
      let dz = b.pos.z - a.pos.z;
      const minD = (a.radius + b.radius) * 0.82; // cars are narrower than their bounding circle
      const d2 = dx * dx + dz * dz;
      if (d2 >= minD * minD) continue;
      let d = Math.sqrt(d2);
      if (d < 1e-4) { // coincident: pick a deterministic direction
        dx = Math.sin(i * 2.4 + j); dz = Math.cos(i * 2.4 + j); d = 1;
      }
      const nx = dx / d, nz = dz / d;
      const ma = a.def ? a.def.mass : 1, mb = b.def ? b.def.mass : 1;
      const ia = a.frozen ? 0 : 1 / ma, ib = b.frozen ? 0 : 1 / mb;
      const isum = ia + ib;
      if (isum <= 0) continue;
      // separate
      const pen = minD - d;
      const pa = pen * (ia / isum), pb = pen * (ib / isum);
      a.pos.x -= nx * pa; a.pos.z -= nz * pa;
      b.pos.x += nx * pb; b.pos.z += nz * pb;
      // impulse
      const vrel = (b.vel.x - a.vel.x) * nx + (b.vel.z - a.vel.z) * nz;
      if (vrel < 0) {
        const jimp = (-(1 + RESTITUTION) * vrel) / isum;
        a.vel.x -= nx * jimp * ia; a.vel.z -= nz * jimp * ia;
        b.vel.x += nx * jimp * ib; b.vel.z += nz * jimp * ib;
        if (-vrel > maxImpact) maxImpact = -vrel;
        if (a.carHit !== undefined) a.carHit = Math.max(a.carHit, -vrel);
        if (b.carHit !== undefined) b.carHit = Math.max(b.carHit, -vrel);
      }
    }
  }
  return maxImpact;
}
