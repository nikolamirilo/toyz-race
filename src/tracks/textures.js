// Canvas-drawn textures. Every function here is a draw callback factory: (g, w, h) => void.
// They only run in the browser (see canvasTex in util.js).

function speckle(g, w, h, n, colors, s0 = 1, s1 = 3, alpha = 1) {
  g.globalAlpha = alpha;
  for (let i = 0; i < n; i++) {
    g.fillStyle = colors[(Math.random() * colors.length) | 0];
    const s = s0 + Math.random() * (s1 - s0);
    g.fillRect(Math.random() * w, Math.random() * h, s, s);
  }
  g.globalAlpha = 1;
}

function roundRect(g, x, y, w, h, r) {
  g.beginPath();
  g.moveTo(x + r, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
}

/** Road: u across (canvas x), v along (canvas y). styles: paving | mat | neon | planks */
export const drawRoad = (style) => (g, w, h) => {
  const S = {
    paving: { base: '#8d8983', sp: ['#7c7872', '#9d9992', '#a8a39b', '#6f6b66'], edge: '#f6f1e4', dash: '#ffd84a' },
    mat: { base: '#3a3e4b', sp: ['#333743', '#444958', '#2d303b'], edge: '#ffd23c', dash: '#f4f4f4' },
    neon: { base: '#0f1228', sp: ['#141837', '#0b0d1e', '#1a1f45'], edge: '#27f0ff', dash: '#ff3fd0' },
    planks: { base: '#b98a55', sp: ['#a97b49', '#c79a63'], edge: '#fbf6ea', dash: '#fbf6ea' },
  }[style];
  g.fillStyle = S.base;
  g.fillRect(0, 0, w, h);
  if (style === 'planks') {
    const n = 16, ph = h / n;
    const tones = ['#b98a55', '#c2945e', '#ad7e4a', '#c99c66', '#b5854f', '#a67743'];
    for (let i = 0; i < n; i++) {
      g.fillStyle = tones[(i * 5 + ((i * i) % 3)) % tones.length];
      g.fillRect(0, i * ph, w, ph);
      // grain
      g.globalAlpha = 0.16;
      for (let k = 0; k < 26; k++) {
        g.fillStyle = k % 2 ? '#6e4a25' : '#e3bd8a';
        const y = i * ph + 3 + Math.random() * (ph - 6);
        const x = Math.random() * w;
        g.fillRect(x, y, 40 + Math.random() * 160, 1.5);
      }
      g.globalAlpha = 1;
      g.fillStyle = '#5a3c1e';
      g.fillRect(0, i * ph, w, 3);
      g.fillStyle = 'rgba(255,235,200,0.25)';
      g.fillRect(0, i * ph + 3, w, 2);
      g.fillStyle = '#4b3520';
      for (const x of [20, w - 24, w / 2 - 2]) { g.beginPath(); g.arc(x, i * ph + ph / 2, 3, 0, 7); g.fill(); }
    }
  } else {
    speckle(g, w, h, 9000, S.sp, 1, 3, 0.55);
    if (style === 'neon') {
      g.strokeStyle = 'rgba(80,110,255,0.16)';
      g.lineWidth = 2;
      for (let i = 0; i <= 8; i++) { g.beginPath(); g.moveTo(0, (i * h) / 8); g.lineTo(w, (i * h) / 8); g.stroke(); }
      for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo((i * w) / 4, 0); g.lineTo((i * w) / 4, h); g.stroke(); }
    }
    if (style === 'mat') {
      g.globalAlpha = 0.07;
      g.fillStyle = '#ffffff';
      for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 1);
      g.globalAlpha = 1;
    }
    // tyre marks
    g.globalAlpha = 0.1;
    g.fillStyle = '#000';
    for (const x of [0.3, 0.36, 0.63, 0.7]) g.fillRect(x * w - 7, 0, 14, h);
    g.globalAlpha = 1;
  }
  // edge lines
  const glow = style === 'neon';
  if (glow) { g.shadowColor = S.edge; g.shadowBlur = 14; }
  g.fillStyle = S.edge;
  g.globalAlpha = style === 'planks' ? 0.85 : 1;
  g.fillRect(w * 0.035, 0, w * 0.025, h);
  g.fillRect(w * 0.94, 0, w * 0.025, h);
  // centre dashes (2 per tile)
  if (glow) g.shadowColor = S.dash;
  g.fillStyle = S.dash;
  g.fillRect(w * 0.488, h * 0.06, w * 0.024, h * 0.26);
  g.fillRect(w * 0.488, h * 0.56, w * 0.024, h * 0.26);
  g.globalAlpha = 1;
  g.shadowBlur = 0;
};

export const drawChecker = (a = '#f7f7f7', b = '#16161a') => (g, w, h) => {
  g.fillStyle = a; g.fillRect(0, 0, w, h);
  g.fillStyle = b; g.fillRect(0, 0, w / 2, h / 2); g.fillRect(w / 2, h / 2, w / 2, h / 2);
};

/** Chevrons pointing to +u (canvas right). */
export const drawChevron = (bg, fg) => (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.fillStyle = fg;
  for (let i = 0; i < 2; i++) {
    const x = w * (0.08 + i * 0.5);
    g.beginPath();
    g.moveTo(x, h * 0.1); g.lineTo(x + w * 0.18, h * 0.1); g.lineTo(x + w * 0.36, h * 0.5);
    g.lineTo(x + w * 0.18, h * 0.9); g.lineTo(x, h * 0.9); g.lineTo(x + w * 0.18, h * 0.5);
    g.closePath(); g.fill();
  }
  g.strokeStyle = fg; g.lineWidth = 6; g.strokeRect(3, 3, w - 6, h - 6);
};

/** Boost arrows pointing to +v (canvas up), transparent background. */
export const drawBoost = (c1 = '#fff36b', c2 = '#ff8a1e') => (g, w, h) => {
  g.clearRect(0, 0, w, h);
  const grd = g.createLinearGradient(0, 0, w, 0);
  grd.addColorStop(0, 'rgba(255,140,30,0)'); grd.addColorStop(0.5, 'rgba(255,170,40,0.55)'); grd.addColorStop(1, 'rgba(255,140,30,0)');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.shadowColor = c2; g.shadowBlur = 18;
  for (let i = 0; i < 2; i++) {
    const y0 = h * (0.5 * i);
    g.fillStyle = i ? c1 : '#ffffff';
    g.beginPath();
    g.moveTo(w * 0.5, y0 + h * 0.06); g.lineTo(w * 0.92, y0 + h * 0.34); g.lineTo(w * 0.92, y0 + h * 0.46);
    g.lineTo(w * 0.5, y0 + h * 0.2); g.lineTo(w * 0.08, y0 + h * 0.46); g.lineTo(w * 0.08, y0 + h * 0.34);
    g.closePath(); g.fill();
  }
  g.shadowBlur = 0;
};

export const drawBanner = (text, bg, fg, accent) => (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  const s = h / 4;
  for (let x = 0; x < w; x += s) for (let y = 0; y < 2; y++) {
    g.fillStyle = ((x / s + y) | 0) % 2 ? '#111' : '#fafafa';
    g.fillRect(x, y ? h - s * 0.5 : 0, s, s * 0.5);
  }
  g.fillStyle = accent;
  g.fillRect(0, s * 0.5, w, 6); g.fillRect(0, h - s * 0.5 - 6, w, 6);
  g.font = `900 ${Math.floor(h * 0.42)}px "Arial Black", Impact, sans-serif`;
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineWidth = 10; g.strokeStyle = 'rgba(0,0,0,0.55)';
  let fs = h * 0.42;
  while (g.measureText(text).width > w * 0.9 && fs > 10) { fs -= 4; g.font = `900 ${Math.floor(fs)}px "Arial Black", Impact, sans-serif`; }
  g.strokeText(text, w / 2, h / 2 + 2);
  g.fillStyle = fg; g.fillText(text, w / 2, h / 2 + 2);
};

export const drawGrass = () => (g, w, h) => {
  g.fillStyle = '#5fae3c'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 60; i++) {
    g.fillStyle = ['rgba(120,200,80,0.25)', 'rgba(60,140,50,0.25)', 'rgba(150,210,90,0.2)'][i % 3];
    g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 30 + Math.random() * 60, 0, 7); g.fill();
  }
  const cs = ['#4b9a32', '#6fc048', '#88d058', '#3f8a2c', '#7ac74e'];
  g.lineWidth = 2;
  for (let i = 0; i < 5000; i++) {
    g.strokeStyle = cs[(Math.random() * cs.length) | 0];
    const x = Math.random() * w, y = Math.random() * h;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + (Math.random() - 0.5) * 7, y - 5 - Math.random() * 9); g.stroke();
  }
  for (let i = 0; i < 40; i++) {
    g.fillStyle = ['#fff', '#ffe866', '#ffd0e8'][i % 3];
    g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 2.2, 0, 7); g.fill();
  }
};

/** 2x2 floor tiles. */
export const drawTiles = (a, b, grout, sparkle) => (g, w, h) => {
  const s = w / 2;
  for (let i = 0; i < 2; i++) for (let j = 0; j < 2; j++) {
    g.fillStyle = (i + j) % 2 ? a : b;
    g.fillRect(i * s, j * s, s, s);
    const grd = g.createLinearGradient(i * s, j * s, i * s + s, j * s + s);
    grd.addColorStop(0, 'rgba(255,255,255,0.10)'); grd.addColorStop(1, 'rgba(0,0,0,0.10)');
    g.fillStyle = grd; g.fillRect(i * s, j * s, s, s);
  }
  speckle(g, w, h, 2500, sparkle || ['rgba(255,255,255,0.5)', 'rgba(0,0,0,0.35)'], 1, 2.5, 0.25);
  g.fillStyle = grout;
  for (let i = 0; i <= 2; i++) { g.fillRect(i * s - 3, 0, 6, h); g.fillRect(0, i * s - 3, w, 6); }
};

export const drawSand = () => (g, w, h) => {
  g.fillStyle = '#ecd29a'; g.fillRect(0, 0, w, h);
  for (let i = 0; i < 40; i++) {
    g.fillStyle = i % 2 ? 'rgba(255,236,190,0.3)' : 'rgba(205,165,105,0.22)';
    g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 30 + Math.random() * 70, 0, 7); g.fill();
  }
  g.lineWidth = 3;
  for (let k = 0; k < 14; k++) {
    g.strokeStyle = k % 2 ? 'rgba(190,150,95,0.35)' : 'rgba(255,244,210,0.4)';
    const y0 = (k + 0.5) * (h / 14);
    g.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const y = y0 + Math.sin((x / w) * Math.PI * 4 + k) * 6;
      if (x === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  }
  speckle(g, w, h, 7000, ['#d8b678', '#f8e6b8', '#c9a468', '#fff3cf'], 1, 2.5, 0.6);
};

export const drawWood = (base = '#b07a45') => (g, w, h) => {
  g.fillStyle = base; g.fillRect(0, 0, w, h);
  g.globalAlpha = 0.18;
  for (let i = 0; i < 160; i++) {
    g.fillStyle = i % 2 ? '#5a3a1c' : '#e4b983';
    g.fillRect(0, Math.random() * h, w, 1 + Math.random() * 2.5);
  }
  g.globalAlpha = 1;
};

export const drawWallpaper = (a, b, dot) => (g, w, h) => {
  g.fillStyle = a; g.fillRect(0, 0, w, h);
  g.fillStyle = b;
  for (let i = 0; i < 4; i++) g.fillRect((i + 0.25) * (w / 4), 0, w / 8, h);
  g.fillStyle = dot;
  for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
    g.beginPath(); g.arc((i + 0.75) * (w / 4), (j + 0.5) * (h / 4), w / 60, 0, 7); g.fill();
  }
};

export const drawSiding = () => (g, w, h) => {
  g.fillStyle = '#f2e9d8'; g.fillRect(0, 0, w, h);
  const n = 8;
  for (let i = 0; i < n; i++) {
    const y = (i * h) / n;
    const grd = g.createLinearGradient(0, y, 0, y + h / n);
    grd.addColorStop(0, 'rgba(255,255,255,0.35)'); grd.addColorStop(0.85, 'rgba(0,0,0,0.04)'); grd.addColorStop(1, 'rgba(0,0,0,0.3)');
    g.fillStyle = grd; g.fillRect(0, y, w, h / n);
  }
};

export const drawRug = () => (g, w, h) => {
  g.fillStyle = '#b2433f'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#f0d9a8'; g.fillRect(w * 0.04, h * 0.06, w * 0.92, h * 0.88);
  g.fillStyle = '#2f5d7c'; g.fillRect(w * 0.07, h * 0.1, w * 0.86, h * 0.8);
  g.fillStyle = '#d98e3f';
  for (let i = 0; i < 9; i++) for (let j = 0; j < 5; j++) {
    const x = w * (0.12 + i * 0.095), y = h * (0.18 + j * 0.16);
    g.beginPath(); g.moveTo(x, y - h * 0.05); g.lineTo(x + w * 0.03, y); g.lineTo(x, y + h * 0.05); g.lineTo(x - w * 0.03, y); g.closePath();
    g.fillStyle = (i + j) % 2 ? '#d98e3f' : '#f0d9a8'; g.fill();
  }
  speckle(g, w, h, 6000, ['rgba(0,0,0,0.25)', 'rgba(255,255,255,0.2)'], 1, 2, 0.5);
};

const BRANDS = [
  ['ZAPPO', '#e6332a', '#ffd400'], ['MEGA BLOX', '#1565c0', '#ffeb3b'], ['TURBO OATS', '#f57c00', '#fff8e1'], ['STAR BITES', '#6a1b9a', '#ffd54f'],
  ['ROBO PALS', '#00897b', '#e0f7fa'], ['FIZZ POP', '#d81b60', '#fff'], ['KITE KIT', '#29b6f6', '#fff59d'], ['WOBBLE', '#7cb342', '#fff'],
  ['DINO CRUNCH', '#388e3c', '#ffcc80'], ['PUZZLE 500', '#5d4037', '#ffe082'], ['GLOW GOO', '#212121', '#76ff03'], ['SPACE CAT', '#283593', '#ff80ab'],
  ['BUBBLE UP', '#00acc1', '#ffffff'], ['CHOO CHOO', '#c62828', '#ffffff'], ['MARBLES', '#fbc02d', '#1a237e'], ['YUM RINGS', '#ef6c00', '#fffde7'],
];
export const BRAND_COLORS = BRANDS.map((b) => b[1]);

/** 4x4 atlas of original, made-up package fronts. */
export const drawPackages = () => (g, w, h) => {
  const s = w / 4;
  BRANDS.forEach(([name, bg, fg], i) => {
    const x = (i % 4) * s, y = Math.floor(i / 4) * s;
    g.save();
    g.beginPath(); g.rect(x, y, s, s); g.clip();
    g.fillStyle = bg; g.fillRect(x, y, s, s);
    // diagonal band
    g.fillStyle = 'rgba(255,255,255,0.16)';
    g.beginPath(); g.moveTo(x, y + s * 0.75); g.lineTo(x + s, y + s * 0.35); g.lineTo(x + s, y + s * 0.6); g.lineTo(x, y + s); g.closePath(); g.fill();
    // burst / mascot blob
    g.fillStyle = fg;
    g.beginPath();
    const cx = x + s * 0.5, cy = y + s * 0.6, k = 12 + (i % 3) * 4;
    for (let a = 0; a < k * 2; a++) {
      const r = s * (a % 2 ? 0.22 : 0.3), t = (a / (k * 2)) * Math.PI * 2;
      g.lineTo(cx + Math.cos(t) * r, cy + Math.sin(t) * r);
    }
    g.closePath(); g.fill();
    g.fillStyle = bg;
    g.beginPath(); g.arc(cx - s * 0.07, cy - s * 0.02, s * 0.035, 0, 7); g.arc(cx + s * 0.07, cy - s * 0.02, s * 0.035, 0, 7); g.fill();
    g.lineWidth = s * 0.02; g.strokeStyle = bg;
    g.beginPath(); g.arc(cx, cy + s * 0.03, s * 0.09, 0.15 * Math.PI, 0.85 * Math.PI); g.stroke();
    // title plate
    g.fillStyle = 'rgba(0,0,0,0.28)'; roundRect(g, x + s * 0.06, y + s * 0.07, s * 0.88, s * 0.2, s * 0.04); g.fill();
    let fs = s * 0.15;
    g.font = `900 ${fs}px "Arial Black", Impact, sans-serif`;
    while (g.measureText(name).width > s * 0.8) { fs -= 2; g.font = `900 ${fs}px "Arial Black", Impact, sans-serif`; }
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.fillStyle = '#fff'; g.fillText(name, x + s * 0.5, y + s * 0.175);
    // plain corner (used by box tops) — bottom-left of the cell in UV space
    g.fillStyle = bg; g.fillRect(x, y + s * 0.88, s * 0.12, s * 0.12);
    g.strokeStyle = 'rgba(0,0,0,0.35)'; g.lineWidth = 4; g.strokeRect(x + 2, y + 2, s - 4, s - 4);
    g.restore();
  });
};

export const drawNeonText = (text, color) => (g, w, h) => {
  g.clearRect(0, 0, w, h);
  g.fillStyle = 'rgba(8,8,24,0.82)'; roundRect(g, 4, 4, w - 8, h - 8, 26); g.fill();
  g.lineWidth = 8; g.strokeStyle = color; g.shadowColor = color; g.shadowBlur = 26;
  roundRect(g, 16, 16, w - 32, h - 32, 20); g.stroke();
  let fs = h * 0.56;
  g.font = `900 ${fs}px "Arial Black", Impact, sans-serif`;
  while (g.measureText(text).width > w * 0.82) { fs -= 4; g.font = `900 ${fs}px "Arial Black", Impact, sans-serif`; }
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillStyle = color; g.fillText(text, w / 2, h / 2 + 4);
  g.shadowBlur = 8; g.fillStyle = '#ffffff'; g.globalAlpha = 0.85; g.fillText(text, w / 2, h / 2 + 4);
  g.globalAlpha = 1; g.shadowBlur = 0;
};

export const drawGlow = () => (g, w, h) => {
  const grd = g.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.35, 'rgba(255,255,255,0.45)'); grd.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
};

/** Vertical gradient for scene.background. stops: [[pos, css], ...] top (0) to bottom (1). */
export const drawGradient = (stops) => (g, w, h) => {
  const grd = g.createLinearGradient(0, 0, 0, h);
  for (const [p, c] of stops) grd.addColorStop(p, c);
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
};

export const drawWater = () => (g, w, h) => {
  const grd = g.createLinearGradient(0, 0, 0, h);
  grd.addColorStop(0, '#ff9d5c'); grd.addColorStop(0.5, '#3f8fa6'); grd.addColorStop(1, '#2f7f9a');
  g.fillStyle = '#3a88a2'; g.fillRect(0, 0, w, h);
  g.lineWidth = 3;
  for (let k = 0; k < 22; k++) {
    g.strokeStyle = k % 3 === 0 ? 'rgba(255,214,150,0.55)' : k % 3 === 1 ? 'rgba(255,255,255,0.28)' : 'rgba(20,70,100,0.35)';
    const y0 = (k + 0.5) * (h / 22);
    g.beginPath();
    for (let x = 0; x <= w; x += 8) {
      const y = y0 + Math.sin((x / w) * Math.PI * 6 + k * 1.7) * 5;
      if (x === 0) g.moveTo(x, y); else g.lineTo(x, y);
    }
    g.stroke();
  }
};

export const drawWindow = (sky1, sky2, frame) => (g, w, h) => {
  const grd = g.createLinearGradient(0, 0, 0, h);
  grd.addColorStop(0, sky1); grd.addColorStop(1, sky2);
  g.fillStyle = grd; g.fillRect(0, 0, w, h);
  g.fillStyle = 'rgba(255,255,255,0.75)';
  for (let i = 0; i < 4; i++) { g.beginPath(); g.ellipse(w * (0.2 + i * 0.22), h * (0.25 + (i % 2) * 0.2), w * 0.12, h * 0.05, 0, 0, 7); g.fill(); }
  g.fillStyle = frame;
  g.fillRect(0, 0, w, 14); g.fillRect(0, h - 14, w, 14); g.fillRect(0, 0, 14, h); g.fillRect(w - 14, 0, 14, h);
  g.fillRect(w / 2 - 6, 0, 12, h); g.fillRect(0, h / 2 - 6, w, 12);
};
