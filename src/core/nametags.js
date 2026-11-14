import * as THREE from 'three';

// Floating name labels above the other cars. Human players get a highlighted tag.
function makeTexture(name, human) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const font = '900 44px system-ui, -apple-system, "Segoe UI", sans-serif';
  ctx.font = font;
  const text = String(name || '').slice(0, 16);
  const w = Math.ceil(ctx.measureText(text).width) + 44;
  canvas.width = Math.max(96, w);
  canvas.height = 72;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const r = 22;
  ctx.beginPath();
  ctx.roundRect(3, 3, canvas.width - 6, canvas.height - 6, r);
  ctx.fillStyle = human ? 'rgba(20, 24, 52, 0.88)' : 'rgba(20, 24, 52, 0.55)';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = human ? '#e8b730' : 'rgba(255,255,255,0.35)';
  ctx.stroke();
  ctx.fillStyle = human ? '#f2c94c' : '#d8d8d8';
  ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 2);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return { tex, aspect: canvas.width / canvas.height };
}

export function createNameTags(scene) {
  let tags = [];
  const group = new THREE.Group();
  group.name = 'name-tags';
  scene.add(group);

  function clear() {
    for (const t of tags) {
      group.remove(t.sprite);
      t.sprite.material.map.dispose();
      t.sprite.material.dispose();
    }
    tags = [];
  }

  return {
    /** entries: [{ car, name, human }] — cars to label (do not include the local player). */
    set(entries) {
      clear();
      for (const e of entries) {
        const { tex, aspect } = makeTexture(e.name, e.human);
        const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, fog: false });
        const sprite = new THREE.Sprite(mat);
        sprite.renderOrder = 10;
        group.add(sprite);
        tags.push({ sprite, car: e.car, aspect, human: !!e.human });
      }
    },
    clear,
    update(camera, visible = true) {
      group.visible = visible;
      if (!visible) return;
      for (const t of tags) {
        const p = t.car.pos;
        const d = camera.position.distanceTo(p);
        const maxD = t.human ? 160 : 70;
        if (d > maxD || d < 2.5) { t.sprite.visible = false; continue; }
        t.sprite.visible = true;
        // Grow with distance so the label stays readable, but not fully constant-size.
        const h = Math.min(4.2, Math.max(0.55, d * 0.034)) * (t.human ? 1.15 : 0.9);
        t.sprite.scale.set(h * t.aspect, h, 1);
        t.sprite.position.set(p.x, p.y + 1.5 + h * 0.6, p.z);
        t.sprite.material.opacity = Math.min(1, (maxD - d) / (maxD * 0.25));
      }
    },
  };
}
