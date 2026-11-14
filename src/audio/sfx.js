// Synthesised one-shot sound effects. Every sound is a small function (ctx, out, t, v) that schedules
// a handful of oscillators / noise bursts starting at time t with overall volume v.

/** Oscillator with pitch sweep and a percussive envelope. */
export function tone(ctx, out, { type = 'sine', f = 440, f2 = 0, t = 0, dur = 0.15, vol = 0.2, attack = 0.004, lp = 0 }) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(f, t);
  if (f2 > 0) o.frequency.exponentialRampToValueAtTime(f2, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  if (lp > 0) {
    const fl = ctx.createBiquadFilter();
    fl.type = 'lowpass';
    fl.frequency.value = lp;
    o.connect(fl);
    fl.connect(g);
  } else {
    o.connect(g);
  }
  g.connect(out);
  o.start(t);
  o.stop(t + dur + 0.03);
  return o;
}

/** Filtered noise burst with optional filter sweep. */
export function noise(ctx, out, buffer, { t = 0, dur = 0.2, vol = 0.2, type = 'bandpass', f = 1000, f2 = 0, q = 1, attack = 0.003 }) {
  const s = ctx.createBufferSource();
  s.buffer = buffer;
  s.loop = true;
  const fl = ctx.createBiquadFilter();
  fl.type = type;
  fl.Q.value = q;
  fl.frequency.setValueAtTime(f, t);
  if (f2 > 0) fl.frequency.exponentialRampToValueAtTime(f2, t + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vol, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(fl);
  fl.connect(g);
  g.connect(out);
  s.start(t, Math.random() * 1.5);
  s.stop(t + dur + 0.03);
}

const N = (m) => 440 * Math.pow(2, (m - 69) / 12); // midi -> Hz

/** Soft bell-ish note: sine + quiet octave partial. */
function bell(ctx, out, t, midi, dur, vol) {
  tone(ctx, out, { type: 'sine', f: N(midi), t, dur, vol });
  tone(ctx, out, { type: 'triangle', f: N(midi + 12), t, dur: dur * 0.6, vol: vol * 0.35 });
}

/** Bright but rounded synth-brass note for fanfares. */
function brass(ctx, out, t, midi, dur, vol) {
  tone(ctx, out, { type: 'sawtooth', f: N(midi), t, dur, vol: vol * 0.6, attack: 0.015, lp: 2600 });
  tone(ctx, out, { type: 'square', f: N(midi) * 1.004, t, dur, vol: vol * 0.3, attack: 0.015, lp: 1800 });
}

// name -> { gap: min seconds between retriggers, fn }
export const SOUNDS = {
  'ui-move': { gap: 0.03, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'triangle', f: 720, f2: 940, t, dur: 0.06, vol: 0.16 * v });
  } },
  'ui-select': { gap: 0.05, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'triangle', f: N(76), t, dur: 0.09, vol: 0.2 * v });
    tone(ctx, out, { type: 'triangle', f: N(83), t: t + 0.07, dur: 0.16, vol: 0.2 * v });
    tone(ctx, out, { type: 'sine', f: N(95), t: t + 0.07, dur: 0.12, vol: 0.06 * v });
  } },
  'ui-back': { gap: 0.05, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'triangle', f: N(76), t, dur: 0.08, vol: 0.18 * v });
    tone(ctx, out, { type: 'triangle', f: N(69), t: t + 0.06, dur: 0.14, vol: 0.18 * v });
  } },
  count: { gap: 0.1, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'square', f: N(69), t, dur: 0.22, vol: 0.14 * v, lp: 1800 });
    tone(ctx, out, { type: 'sine', f: N(69), t, dur: 0.28, vol: 0.22 * v });
  } },
  go: { gap: 0.1, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'square', f: N(81), t, dur: 0.6, vol: 0.13 * v, lp: 2600 });
    tone(ctx, out, { type: 'sine', f: N(81), t, dur: 0.7, vol: 0.22 * v });
    tone(ctx, out, { type: 'triangle', f: N(88), t, dur: 0.6, vol: 0.12 * v });
    noise(ctx, out, nb, { t, dur: 0.35, vol: 0.06 * v, type: 'highpass', f: 5000 });
  } },
  pickup: { gap: 0.05, fn(ctx, out, nb, t, v) {
    [84, 88, 91, 96].forEach((m, i) => bell(ctx, out, t + i * 0.055, m, 0.2, 0.17 * v));
  } },
  boost: { gap: 0.15, fn(ctx, out, nb, t, v) {
    noise(ctx, out, nb, { t, dur: 0.75, vol: 0.22 * v, f: 500, f2: 5200, q: 1.4, attack: 0.05 });
    tone(ctx, out, { type: 'sawtooth', f: 160, f2: 880, t, dur: 0.55, vol: 0.12 * v, attack: 0.03, lp: 2400 });
    tone(ctx, out, { type: 'sine', f: 320, f2: 1760, t, dur: 0.5, vol: 0.08 * v, attack: 0.03 });
  } },
  fire: { gap: 0.06, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'square', f: 980, f2: 190, t, dur: 0.2, vol: 0.16 * v, lp: 3200 });
    noise(ctx, out, nb, { t, dur: 0.12, vol: 0.14 * v, f: 2400, f2: 700, q: 0.8 });
    tone(ctx, out, { type: 'sine', f: 180, f2: 70, t, dur: 0.14, vol: 0.2 * v });
  } },
  explosion: { gap: 0.08, fn(ctx, out, nb, t, v) {
    noise(ctx, out, nb, { t, dur: 0.75, vol: 0.4 * v, type: 'lowpass', f: 2600, f2: 180, q: 0.5 });
    tone(ctx, out, { type: 'sine', f: 130, f2: 38, t, dur: 0.55, vol: 0.45 * v });
    tone(ctx, out, { type: 'triangle', f: 310, f2: 60, t, dur: 0.22, vol: 0.18 * v });
    noise(ctx, out, nb, { t: t + 0.02, dur: 0.14, vol: 0.14 * v, type: 'highpass', f: 3500 });
  } },
  zap: { gap: 0.08, fn(ctx, out, nb, t, v) {
    const o = tone(ctx, out, { type: 'sawtooth', f: 1500, t, dur: 0.42, vol: 0.13 * v, lp: 4200 });
    for (let i = 0; i < 12; i++) o.frequency.setValueAtTime((i % 2 ? 620 : 1500) * (1 - i * 0.045), t + i * 0.032);
    tone(ctx, out, { type: 'square', f: 2400, f2: 300, t, dur: 0.35, vol: 0.05 * v, lp: 5000 });
    noise(ctx, out, nb, { t, dur: 0.3, vol: 0.08 * v, type: 'highpass', f: 4200 });
  } },
  splat: { gap: 0.08, fn(ctx, out, nb, t, v) {
    noise(ctx, out, nb, { t, dur: 0.3, vol: 0.3 * v, type: 'lowpass', f: 1500, f2: 240, q: 2 });
    tone(ctx, out, { type: 'sine', f: 340, f2: 70, t, dur: 0.22, vol: 0.26 * v });
    tone(ctx, out, { type: 'sine', f: 190, f2: 420, t: t + 0.13, dur: 0.1, vol: 0.14 * v });
  } },
  crash: { gap: 0.09, fn(ctx, out, nb, t, v) {
    noise(ctx, out, nb, { t, dur: 0.32, vol: 0.32 * v, f: 1300, f2: 400, q: 0.7 });
    tone(ctx, out, { type: 'sine', f: 120, f2: 48, t, dur: 0.25, vol: 0.36 * v });
    tone(ctx, out, { type: 'square', f: 420, f2: 150, t, dur: 0.07, vol: 0.08 * v, lp: 1800 });
  } },
  bump: { gap: 0.07, fn(ctx, out, nb, t, v) {
    tone(ctx, out, { type: 'sine', f: 170, f2: 72, t, dur: 0.13, vol: 0.3 * v });
    noise(ctx, out, nb, { t, dur: 0.07, vol: 0.12 * v, type: 'lowpass', f: 1400 });
  } },
  lap: { gap: 0.2, fn(ctx, out, nb, t, v) {
    bell(ctx, out, t, 88, 0.3, 0.2 * v);
    bell(ctx, out, t + 0.12, 93, 0.5, 0.2 * v);
  } },
  'final-lap': { gap: 0.3, fn(ctx, out, nb, t, v) {
    for (let k = 0; k < 2; k++) {
      [81, 85, 88].forEach((m, i) => {
        tone(ctx, out, { type: 'square', f: N(m), t: t + k * 0.3 + i * 0.075, dur: 0.11, vol: 0.11 * v, lp: 3000 });
        tone(ctx, out, { type: 'sine', f: N(m), t: t + k * 0.3 + i * 0.075, dur: 0.14, vol: 0.14 * v });
      });
    }
    bell(ctx, out, t + 0.6, 93, 0.6, 0.18 * v);
  } },
  finish: { gap: 0.5, fn(ctx, out, nb, t, v) {
    [[72, 0, 0.16], [76, 0.14, 0.16], [79, 0.28, 0.16], [84, 0.42, 0.7]].forEach(([m, d, len]) => brass(ctx, out, t + d, m, len, 0.2 * v));
    brass(ctx, out, t + 0.42, 76, 0.7, 0.12 * v);
    noise(ctx, out, nb, { t: t + 0.42, dur: 0.5, vol: 0.05 * v, type: 'highpass', f: 6000 });
  } },
  win: { gap: 0.5, fn(ctx, out, nb, t, v) {
    const seq = [[72, 0, 0.14], [72, 0.15, 0.1], [72, 0.26, 0.1], [76, 0.38, 0.2], [79, 0.6, 0.2], [76, 0.82, 0.12], [79, 0.95, 0.14], [84, 1.1, 1.0]];
    seq.forEach(([m, d, len]) => brass(ctx, out, t + d, m, len, 0.2 * v));
    [[60, 0.38, 0.4], [64, 0.6, 0.4], [67, 1.1, 1.0], [76, 1.1, 1.0], [48, 1.1, 1.0]].forEach(([m, d, len]) => brass(ctx, out, t + d, m, len, 0.1 * v));
    [1.1, 1.2, 1.3, 1.42].forEach((d, i) => bell(ctx, out, t + d, 96 + [0, 4, 7, 12][i], 0.5, 0.08 * v));
    noise(ctx, out, nb, { t: t + 1.1, dur: 0.9, vol: 0.05 * v, type: 'highpass', f: 6000 });
  } },
};
