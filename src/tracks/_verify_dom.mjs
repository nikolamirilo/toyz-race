// node src/tracks/_verify_dom.mjs — runs every canvas-texture code path against a fake 2D context,
// so typos in the drawing code are caught without a browser.
let calls = 0;
const grad = { addColorStop() {} };
const ctx2d = new Proxy({}, {
  get(t, k) {
    if (k in t) return t[k];
    if (k === 'measureText') return () => ({ width: 40 });
    if (k === 'createLinearGradient' || k === 'createRadialGradient') return () => grad;
    return () => { calls++; };
  },
  set(t, k, v) { t[k] = v; return true; },
});
globalThis.document = { createElement: () => ({ width: 0, height: 0, getContext: () => ctx2d, style: {} }) };

const { TRACKS, buildTrack } = await import('./index.js');
let textures = 0;
for (const meta of TRACKS) {
  const tr = buildTrack(meta.id);
  const seen = new Set();
  tr.group.traverse((o) => {
    if (!o.isMesh) return;
    if (o.material.vertexColors && !o.geometry.attributes.color) throw new Error(`${meta.id}: mesh '${o.name}' uses vertexColors without a color attribute`);
    if (o.material.map && !o.geometry.attributes.uv) throw new Error(`${meta.id}: mesh '${o.name}' has a map but no uv`);
    if (!o.geometry.attributes.normal && !o.material.isMeshBasicMaterial) throw new Error(`${meta.id}: mesh '${o.name}' has no normals`);
    for (const k of ['map', 'emissiveMap']) if (o.material[k]) seen.add(o.material[k]);
  });
  textures += seen.size;
  for (let k = 0; k < 120; k++) tr.update(1 / 60, k / 60);
  console.log(`✓ ${meta.id}: ${seen.size} canvas textures, ${tr.debug.meshCount} meshes`);
  tr.dispose();
}
console.log(`fake-DOM pass OK (${calls} canvas calls, ${textures} textures)`);
