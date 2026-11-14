// Generative music: two step-sequenced loops (menu: laid-back, race: ~140 bpm) scheduled with a
// look-ahead timer. Progressions, arp shapes, leads and fills vary from section to section.

import { tone, noise } from './sfx.js';

const N = (m) => 440 * Math.pow(2, (m - 69) / 12);
const LOOKAHEAD = 0.16; // seconds scheduled ahead
const TICK_MS = 30;

// chords as [root semitone offset from key, 'm' | 'M']
const RACE_PROGS = [
  [[0, 'm'], [-4, 'M'], [3, 'M'], [-2, 'M']],
  [[0, 'm'], [-2, 'M'], [-4, 'M'], [-5, 'M']],
  [[5, 'm'], [0, 'm'], [-4, 'M'], [-2, 'M']],
  [[-4, 'M'], [-2, 'M'], [0, 'm'], [0, 'm']],
  [[0, 'm'], [3, 'M'], [-2, 'M'], [5, 'm']],
];
const MENU_PROGS = [
  [[0, 'M7'], [-3, 'm7'], [5, 'M7'], [7, 'M']],
  [[5, 'M7'], [4, 'm7'], [2, 'm7'], [7, 'M']],
  [[-3, 'm7'], [5, 'M7'], [0, 'M7'], [7, 'M']],
];
const CHORD = { m: [0, 3, 7], M: [0, 4, 7], m7: [0, 3, 7, 10], M7: [0, 4, 7, 11] };
const ARPS = [
  [0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3],
  [0, 2, 1, 3, 0, 2, 1, 3, 0, 2, 1, 3, 3, 2, 1, 0],
  [3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 1, 2, 3, 2],
  [0, 0, 2, 0, 1, 0, 3, 0, 0, 0, 2, 0, 1, 3, 2, 1],
];

export function createMusic(ctx, bus, noiseBuf) {
  let timer = null;
  let kind = null;
  let out = null;
  let step = 0;
  let nextTime = 0;
  let seed = 1;
  let sec = null; // current section parameters

  const rnd = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const pick = (a) => a[Math.floor(rnd() * a.length)];

  function newSection(index) {
    if (kind === 'race') {
      const lead = [];
      const scale = [0, 3, 5, 7, 10, 12, 15]; // minor pentatonic over the key
      let p = 2 + Math.floor(rnd() * 3);
      for (let i = 0; i < 32; i++) {
        // 8th-note grid, 2 bars, repeated; rests keep it breathing
        if (rnd() < (i % 4 === 0 ? 0.85 : 0.5)) {
          p = Math.max(0, Math.min(scale.length - 1, p + Math.floor(rnd() * 5) - 2));
          lead.push(scale[p]);
        } else lead.push(null);
      }
      sec = {
        prog: index === 0 ? RACE_PROGS[0] : pick(RACE_PROGS),
        arp: pick(ARPS),
        lead: index % 2 === 1 || rnd() < 0.35 ? lead : null,
        breakdown: index > 0 && index % 4 === 3,
        bassOct: rnd() < 0.5,
        openHat: rnd() < 0.6,
      };
    } else {
      sec = { prog: index === 0 ? MENU_PROGS[0] : pick(MENU_PROGS), arp: pick(ARPS), sparkle: rnd() < 0.6 };
    }
  }

  // ---- drum voices
  const kick = (t, v) => tone(ctx, out, { type: 'sine', f: 150, f2: 42, t, dur: 0.2, vol: v, attack: 0.002 });
  const snare = (t, v) => {
    noise(ctx, out, noiseBuf, { t, dur: 0.15, vol: v, f: 1900, q: 0.7 });
    tone(ctx, out, { type: 'triangle', f: 210, f2: 140, t, dur: 0.09, vol: v * 0.6 });
  };
  const hat = (t, v, open) => noise(ctx, out, noiseBuf, { t, dur: open ? 0.16 : 0.04, vol: v, type: 'highpass', f: 7500 });

  function raceStep(s, t, d) {
    const bar = Math.floor(s / 16);
    const i = s % 16;
    const section = Math.floor(bar / 4);
    if (s % 64 === 0) newSection(section);
    const [rootOff, q] = sec.prog[bar % 4];
    const root = 45 + rootOff; // A2-based
    const ch = CHORD[q];
    const lastBar = bar % 4 === 3;

    // drums
    if (!sec.breakdown || bar % 4 >= 2) {
      if (i % 4 === 0) kick(t, 0.34);
      if (i === 4 || i === 12) snare(t, 0.17);
      if (lastBar && i >= 12) snare(t, 0.07 + (i - 12) * 0.03); // fill into the next section
    } else if (i === 0) kick(t, 0.3);
    if (i % 2 === 0) hat(t, i % 4 === 2 ? 0.07 : 0.035, sec.openHat && i === 14);
    else hat(t, 0.02, false);

    // bass: driving 8ths with octave pops
    if (i % 2 === 0) {
      const up = sec.bassOct ? i === 6 || i === 14 : i === 10;
      tone(ctx, out, { type: 'sawtooth', f: N(root + (up ? 12 : 0) - 12), t, dur: d * 1.7, vol: 0.2, attack: 0.006, lp: up ? 900 : 520 });
      tone(ctx, out, { type: 'sine', f: N(root - 12), t, dur: d * 1.7, vol: 0.14, attack: 0.006 });
    }

    // arp: 16ths over chord tones
    const a = sec.arp[i];
    const note = root + 24 + (a === 3 ? 12 : ch[a % ch.length]);
    tone(ctx, out, { type: 'square', f: N(note), t, dur: d * 0.9, vol: sec.breakdown ? 0.05 : 0.036, lp: 2600 });

    // chord stab on the off-beats
    if (i === 3 || i === 10) {
      for (let k = 0; k < ch.length; k++) tone(ctx, out, { type: 'sawtooth', f: N(root + 12 + ch[k]), t, dur: d * 1.6, vol: 0.03, attack: 0.01, lp: 1700 });
    }

    // lead: 8th grid, 2-bar phrase
    if (sec.lead && i % 2 === 0) {
      const n = sec.lead[((bar % 2) * 16 + i) / 2 + (bar % 4 >= 2 ? 16 : 0)];
      if (n != null) {
        const m = 69 + n; // A4 pentatonic
        tone(ctx, out, { type: 'triangle', f: N(m), t, dur: d * 2.4, vol: 0.085, attack: 0.012 });
        tone(ctx, out, { type: 'square', f: N(m) * 1.003, t, dur: d * 2.0, vol: 0.022, attack: 0.012, lp: 3000 });
      }
    }
  }

  function menuStep(s, t, d) {
    const bar = Math.floor(s / 16);
    const i = s % 16;
    if (s % 64 === 0) newSection(Math.floor(bar / 4));
    const [rootOff, q] = sec.prog[bar % 4];
    const root = 48 + rootOff; // C3-based
    const ch = CHORD[q];
    const swing = i % 2 === 1 ? d * 0.18 : 0;
    const tt = t + swing;

    // pad: one soft chord per bar
    if (i === 0) {
      for (let k = 0; k < ch.length; k++) {
        tone(ctx, out, { type: 'triangle', f: N(root + 12 + ch[k]), t, dur: d * 16.5, vol: 0.038, attack: 0.25 });
        tone(ctx, out, { type: 'sine', f: N(root + 12 + ch[k]) * 1.004, t, dur: d * 16.5, vol: 0.028, attack: 0.3 });
      }
    }
    // bass
    if (i === 0 || i === 7 || i === 10) tone(ctx, out, { type: 'sine', f: N(root - 12), t: tt, dur: d * (i === 0 ? 5 : 2.5), vol: 0.2, attack: 0.01 });
    if (i === 0 || i === 10) tone(ctx, out, { type: 'triangle', f: N(root), t: tt, dur: d * 2, vol: 0.05, attack: 0.01 });
    // soft drums
    if (i === 0 || i === 10) kick(tt, 0.2);
    if (i === 4 || i === 12) noise(ctx, out, noiseBuf, { t: tt, dur: 0.09, vol: 0.05, f: 2200, q: 1.2 });
    if (i % 2 === 0) hat(tt, i % 4 === 2 ? 0.03 : 0.014, false);
    // plucked arp on 8ths with rests
    if (i % 2 === 0 && rnd() < 0.72) {
      const a = sec.arp[i];
      const note = root + 24 + (a === 3 ? 12 : ch[a % ch.length]);
      tone(ctx, out, { type: 'triangle', f: N(note), t: tt, dur: d * 3, vol: 0.07, attack: 0.004 });
    }
    // occasional high sparkle
    if (sec.sparkle && (i === 6 || i === 14) && rnd() < 0.5) {
      tone(ctx, out, { type: 'sine', f: N(root + 36 + pick(ch)), t: tt, dur: d * 4, vol: 0.035 });
    }
  }

  function tick() {
    if (!kind || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    if (nextTime < now - 0.25) nextTime = now + 0.05; // tab was in the background: skip ahead
    const d = kind === 'race' ? 60 / 140 / 4 : 60 / 92 / 4;
    let guard = 0;
    while (nextTime < now + LOOKAHEAD && guard++ < 16) {
      if (kind === 'race') raceStep(step, nextTime, d);
      else menuStep(step, nextTime, d);
      nextTime += d;
      step++;
    }
  }

  function stop() {
    if (timer != null) clearInterval(timer);
    timer = null;
    kind = null;
    if (out) {
      const o = out;
      const now = ctx.currentTime;
      try {
        o.gain.cancelScheduledValues(now);
        o.gain.setValueAtTime(o.gain.value, now);
        o.gain.linearRampToValueAtTime(0.0001, now + 0.35);
      } catch (e) { /* ignore */ }
      setTimeout(() => { try { o.disconnect(); } catch (e) { /* ignore */ } }, 1200);
      out = null;
    }
  }

  function start(k) {
    if (k !== 'menu' && k !== 'race') k = 'menu';
    if (kind === k) return;
    stop();
    kind = k;
    out = ctx.createGain();
    const now = ctx.currentTime;
    out.gain.setValueAtTime(0.0001, now);
    out.gain.linearRampToValueAtTime(k === 'race' ? 0.85 : 1, now + 0.4);
    out.connect(bus);
    step = 0;
    seed = (Math.floor(Math.random() * 1e9) | 1) >>> 0;
    nextTime = now + 0.08;
    timer = setInterval(tick, TICK_MS);
    tick();
  }

  return { start, stop, get kind() { return kind; } };
}
