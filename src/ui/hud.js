// In-race HUD logic (markup: react/Hud.jsx). update() is called every frame, so every DOM write is guarded by a cached value
// and the minimap canvas is redrawn at most ~20 times per second.

import { clamp, fmtTime, ordinalSuffix, retrigger } from './util.js';

const MAP_INTERVAL_MS = 50;
const SPEED_SCALE = 3.6; // units/s -> "km/h" style number

/**
 * Per-frame HUD controller over the markup rendered by react/Hud.jsx (`node` = .tr-hud, `fx` = countdown / banner layer).
 * Updates go straight to the DOM, never through React state: updateHUD() runs 60 times a second.
 */
export function createHUD(node, fx) {
  // ---- cached refs: each [data-r] gets a dedicated text node for cheap updates
  const text = {};
  node.querySelectorAll('[data-r]').forEach((n) => {
    const tn = document.createTextNode(n.textContent);
    n.textContent = '';
    n.appendChild(tn);
    text[n.getAttribute('data-r')] = tn;
  });
  const last = {};
  function setText(key, str) {
    if (last[key] !== str) {
      last[key] = str;
      text[key].data = str;
      return true;
    }
    return false;
  }
  const q = (s) => node.querySelector(s);
  const posEl = q('.tr-h-pos');
  const lapEl = q('.tr-h-lap');
  const itemEl = q('.tr-h-item');
  const speedEl = q('.tr-h-speed');
  const arcEl = q('.tr-h-arc');
  const wrongEl = q('.tr-h-wrong');
  const countEl = fx.querySelector('.tr-h-count');
  const flashEl = fx.querySelector('.tr-h-flash');
  const mapBox = q('.tr-h-map');
  const canvas = q('.tr-h-map canvas');
  const g = canvas.getContext ? canvas.getContext('2d') : null;

  let visible = false;
  let flashTimer = 0;
  let flashTimer2 = 0;
  let countTimer = 0;

  // ---- minimap state
  let mapPx = 0; // canvas backing size (square)
  let mapPoints = null;
  let mapLen = 0;
  let mapBg = null; // offscreen canvas with the static track outline
  let mapScale = 1, mapOx = 0, mapOy = 0;
  let mapLastDraw = 0;

  function measureMap() {
    // layout size (not the bounding rect): unaffected by a rotated / scaled stage
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const px = Math.max(64, Math.round(Math.min(mapBox.clientWidth, mapBox.clientHeight) * dpr));
    if (px !== mapPx) {
      mapPx = px;
      canvas.width = px;
      canvas.height = px;
      mapPoints = null; // force background rebuild
    }
  }

  function buildMapBg(points) {
    mapPoints = points;
    mapLen = points.length;
    if (!mapBg) mapBg = document.createElement('canvas');
    mapBg.width = mapPx;
    mapBg.height = mapPx;
    const c = mapBg.getContext('2d');
    c.clearRect(0, 0, mapPx, mapPx);
    if (!points.length) return;
    let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (p[0] < minX) minX = p[0];
      if (p[0] > maxX) maxX = p[0];
      if (p[1] < minZ) minZ = p[1];
      if (p[1] > maxZ) maxZ = p[1];
    }
    const pad = mapPx * 0.13;
    const w = Math.max(1e-3, maxX - minX);
    const h = Math.max(1e-3, maxZ - minZ);
    mapScale = Math.min((mapPx - pad * 2) / w, (mapPx - pad * 2) / h);
    mapOx = (mapPx - w * mapScale) / 2 - minX * mapScale;
    mapOy = (mapPx - h * mapScale) / 2 - minZ * mapScale;

    const trace = () => {
      c.beginPath();
      for (let i = 0; i < points.length; i++) {
        const x = points[i][0] * mapScale + mapOx;
        const y = points[i][1] * mapScale + mapOy;
        if (i === 0) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.closePath();
    };
    c.lineJoin = 'round';
    c.lineCap = 'round';
    trace();
    c.strokeStyle = '#0b0f22';
    c.lineWidth = mapPx * 0.075;
    c.stroke();
    trace();
    c.strokeStyle = '#fff6e0';
    c.lineWidth = mapPx * 0.042;
    c.stroke();
    trace();
    c.strokeStyle = '#3a4474';
    c.lineWidth = mapPx * 0.012;
    c.setLineDash([mapPx * 0.02, mapPx * 0.03]);
    c.stroke();
    c.setLineDash([]);
    // start/finish tick, perpendicular to the first segment
    if (points.length > 1) {
      const x0 = points[0][0] * mapScale + mapOx;
      const y0 = points[0][1] * mapScale + mapOy;
      let dx = points[1][0] - points[0][0];
      let dy = points[1][1] - points[0][1];
      const d = Math.hypot(dx, dy) || 1;
      dx /= d;
      dy /= d;
      const hw = mapPx * 0.045;
      c.beginPath();
      c.moveTo(x0 - dy * hw, y0 + dx * hw);
      c.lineTo(x0 + dy * hw, y0 - dx * hw);
      c.strokeStyle = '#0b0f22';
      c.lineWidth = mapPx * 0.035;
      c.lineCap = 'butt';
      c.stroke();
      c.strokeStyle = '#ff6b1a';
      c.lineWidth = mapPx * 0.018;
      c.stroke();
    }
  }

  function drawMap(mm, now) {
    if (!g || !mm || !mm.points) return;
    if (now - mapLastDraw < MAP_INTERVAL_MS) return;
    mapLastDraw = now;
    if (!mapPx) measureMap();
    if (mm.points !== mapPoints || mm.points.length !== mapLen) buildMapBg(mm.points);
    g.clearRect(0, 0, mapPx, mapPx);
    if (mapBg) g.drawImage(mapBg, 0, 0);
    const cars = mm.cars;
    if (!cars) return;
    const r = mapPx * 0.03;
    let me = null;
    g.lineWidth = mapPx * 0.014;
    g.strokeStyle = '#0b0f22';
    for (let i = cars.length - 1; i >= 0; i--) {
      const c = cars[i];
      if (c.isPlayer) { me = c; continue; }
      g.beginPath();
      g.arc(c.x * mapScale + mapOx, c.z * mapScale + mapOy, r, 0, 6.2832);
      g.fillStyle = c.color || '#9aa6c8';
      g.fill();
      g.stroke();
    }
    if (me) {
      const x = me.x * mapScale + mapOx;
      const y = me.z * mapScale + mapOy;
      const pulse = 1 + 0.18 * Math.sin(now * 0.008);
      g.beginPath();
      g.arc(x, y, r * 2.1 * pulse, 0, 6.2832);
      g.fillStyle = 'rgba(255,208,46,.3)';
      g.fill();
      g.beginPath();
      g.arc(x, y, r * 1.45, 0, 6.2832);
      g.fillStyle = me.color || '#ffd02e';
      g.fill();
      g.lineWidth = mapPx * 0.022;
      g.strokeStyle = '#ffffff';
      g.stroke();
      g.lineWidth = mapPx * 0.008;
      g.strokeStyle = '#0b0f22';
      g.beginPath();
      g.arc(x, y, r * 1.45 + mapPx * 0.014, 0, 6.2832);
      g.stroke();
    }
  }

  function onResize() {
    if (visible) measureMap();
    else mapPx = 0;
  }
  window.addEventListener('resize', onResize);
  // the stage can change size without a window resize (rotation, touch class toggled, harness)
  const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(onResize) : null;
  if (ro) ro.observe(mapBox);

  // ---- per-frame update
  function update(d) {
    if (!d) return;
    const now = performance.now();

    if (d.speed != null) {
      const sp = Math.abs(d.speed);
      setText('kmh', String(Math.round(sp * SPEED_SCALE)));
      const top = d.topSpeed > 0 ? d.topSpeed : 40;
      const pct = Math.round(clamp(sp / (top * 1.2), 0, 1) * 200) / 2; // 0.5% steps
      if (last.arc !== pct) {
        last.arc = pct;
        arcEl.style.strokeDashoffset = String(100 - pct);
      }
    }
    const boost = !!d.boost;
    if (last.boost !== boost) {
      last.boost = boost;
      speedEl.classList.toggle('boost', boost);
    }

    if (d.position != null) {
      const total = d.total || 0;
      const showPos = total > 1;
      if (last.showPos !== showPos) {
        last.showPos = showPos;
        posEl.style.display = showPos ? '' : 'none';
      }
      if (showPos) {
        if (setText('posn', String(d.position))) {
          text.poss.data = ordinalSuffix(d.position);
          posEl.classList.toggle('p1', d.position === 1);
          if (last.posInit) retrigger(posEl, 'pop');
          last.posInit = true;
        }
        setText('post', '/ ' + total);
      }
    }
    if (d.lap != null) {
      if (setText('lap', d.lap + ' / ' + (d.laps || '?'))) {
        lapEl.classList.toggle('final', d.laps > 1 && d.lap >= d.laps);
      }
    }
    if (d.time != null) setText('time', fmtTime(d.time));
    if (d.lapTime != null) setText('lapt', fmtTime(d.lapTime));
    if (d.bestLap !== undefined) setText('best', fmtTime(d.bestLap));
    if (d.lastLap !== undefined) setText('last', fmtTime(d.lastLap));

    if (d.item !== undefined) {
      const id = d.item ? d.item.id || d.item.name : '';
      if (last.item !== id) {
        last.item = id;
        if (d.item) {
          text.itemic.data = d.item.icon || '?';
          text.itemn.data = d.item.name || 'ITEM';
          itemEl.classList.add('has');
          retrigger(itemEl, 'pop');
          clearTimeout(itemEl._t);
          itemEl._t = setTimeout(() => itemEl.classList.remove('pop'), 420);
        } else {
          text.itemic.data = '';
          text.itemn.data = 'NO ITEM';
          itemEl.classList.remove('has', 'pop');
        }
      }
    }

    const wrong = !!d.wrongWay;
    if (last.wrong !== wrong) {
      last.wrong = wrong;
      wrongEl.classList.toggle('on', wrong);
    }

    if (d.minimap) drawMap(d.minimap, now);
  }

  function showCountdown(str) {
    const s = String(str);
    countEl.textContent = s;
    countEl.classList.toggle('go', !/^\d+$/.test(s));
    retrigger(countEl, 'run');
    clearTimeout(countTimer);
    countTimer = setTimeout(() => countEl.classList.remove('run'), 1300);
  }

  function flashMessage(str, ms) {
    const dur = ms > 0 ? ms : 1800;
    flashEl.textContent = String(str);
    flashEl.classList.remove('out');
    retrigger(flashEl, 'on');
    clearTimeout(flashTimer);
    clearTimeout(flashTimer2);
    flashTimer = setTimeout(() => {
      flashEl.classList.remove('on');
      flashEl.classList.add('out');
      flashTimer2 = setTimeout(() => flashEl.classList.remove('out'), 300);
    }, dur);
  }

  function reset() {
    clearTimeout(flashTimer);
    clearTimeout(flashTimer2);
    clearTimeout(countTimer);
    flashEl.classList.remove('on', 'out');
    countEl.classList.remove('run');
    wrongEl.classList.remove('on');
    last.wrong = false;
    last.posInit = false;
  }

  return {
    node,
    itemEl,
    update,
    showCountdown,
    flashMessage,
    show() {
      if (visible) return;
      visible = true;
      reset();
      node.classList.add('on');
      measureMap();
      mapLastDraw = 0;
    },
    hide() {
      if (!visible) return;
      visible = false;
      reset();
      node.classList.remove('on');
    },
    get visible() { return visible; },
    destroy() {
      window.removeEventListener('resize', onResize);
      if (ro) ro.disconnect();
      reset();
    },
  };
}
