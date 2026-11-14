// Toyz Race audio: everything is synthesised with WebAudio, no files.
// All methods are safe no-ops before unlock() and in environments without AudioContext (node).

import { SOUNDS } from './sfx.js';
import { createMusic } from './music.js';

export const SOUND_NAMES = Object.keys(SOUNDS);

const clamp01 = (v, d) => (typeof v === 'number' && isFinite(v) ? Math.min(1, Math.max(0, v)) : d);

export function createAudio() {
  let ctx = null;
  let master = null, muteGain = null, musicBus = null, sfxBus = null, noiseBuf = null;
  let music = null;
  let engine = null;
  let skid = null;

  const vol = { master: 0.8, music: 0.6, sfx: 0.9 };
  let muted = false;
  let wantMusic = null;
  const eng = { rpm: 0, throttle: 0, active: false };
  let skidAmt = 0;
  const lastPlayed = {};

  const AC = () => (typeof window !== 'undefined' ? window.AudioContext || window.webkitAudioContext : null);

  function ramp(param, value, tc = 0.05) {
    const now = ctx.currentTime;
    param.cancelScheduledValues(now);
    param.setTargetAtTime(value, now, tc);
  }

  function build() {
    // buses: (music | sfx) -> master -> mute -> compressor (limiter-ish) -> out
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 12;
    comp.ratio.value = 8;
    comp.attack.value = 0.004;
    comp.release.value = 0.18;
    comp.connect(ctx.destination);
    muteGain = ctx.createGain();
    muteGain.gain.value = muted ? 0 : 1;
    muteGain.connect(comp);
    master = ctx.createGain();
    master.gain.value = vol.master;
    master.connect(muteGain);
    musicBus = ctx.createGain();
    musicBus.gain.value = vol.music;
    musicBus.connect(master);
    sfxBus = ctx.createGain();
    sfxBus.gain.value = vol.sfx;
    sfxBus.connect(master);

    // shared white noise
    const len = Math.floor(ctx.sampleRate * 2);
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;

    buildEngine();
    buildSkid();
    music = createMusic(ctx, musicBus, noiseBuf);
  }

  // ---- electric RC motor: two detuned saws (motor hum), a high triangle (gear whine) and band-passed
  //      noise (brush/gear grit), through a low-pass that opens with rpm and throttle.
  function buildEngine() {
    const out = ctx.createGain();
    out.gain.value = 0;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 700;
    lp.Q.value = 0.8;
    lp.connect(out);
    out.connect(sfxBus);

    const mk = (type, gain) => {
      const o = ctx.createOscillator();
      o.type = type;
      const g = ctx.createGain();
      g.gain.value = gain;
      o.connect(g);
      g.connect(lp);
      o.start();
      return { o, g };
    };
    const a = mk('sawtooth', 0.3);
    const b = mk('sawtooth', 0.22);
    const whine = mk('triangle', 0.0);
    const sub = mk('square', 0.1);

    const ns = ctx.createBufferSource();
    ns.buffer = noiseBuf;
    ns.loop = true;
    const nf = ctx.createBiquadFilter();
    nf.type = 'bandpass';
    nf.Q.value = 2.2;
    nf.frequency.value = 900;
    const ng = ctx.createGain();
    ng.gain.value = 0;
    ns.connect(nf);
    nf.connect(ng);
    ng.connect(out);
    ns.start();

    // gentle wobble so the tone never sits perfectly still
    const lfo = ctx.createOscillator();
    lfo.frequency.value = 11;
    const lfoG = ctx.createGain();
    lfoG.gain.value = 2.5;
    lfo.connect(lfoG);
    lfoG.connect(a.o.frequency);
    lfoG.connect(b.o.frequency);
    lfo.start();

    engine = { out, lp, a, b, whine, sub, nf, ng };
    applyEngine();
  }

  function applyEngine() {
    if (!engine) return;
    const rpm = eng.rpm;
    const th = eng.throttle;
    const f = 70 + rpm * rpm * 150 + rpm * 190; // ~70..410 Hz
    ramp(engine.a.o.frequency, f, 0.06);
    ramp(engine.b.o.frequency, f * 1.012 + 1.5, 0.06);
    ramp(engine.sub.o.frequency, f * 0.5, 0.06);
    ramp(engine.whine.o.frequency, f * 4.02, 0.06);
    ramp(engine.whine.g.gain, 0.03 + rpm * 0.16 + th * 0.05, 0.08);
    ramp(engine.lp.frequency, 500 + rpm * 2300 + th * 900, 0.08);
    ramp(engine.nf.frequency, 600 + rpm * 3200, 0.08);
    ramp(engine.ng.gain, eng.active ? 0.01 + rpm * 0.035 + th * 0.02 : 0, 0.1);
    ramp(engine.out.gain, eng.active ? 0.035 + rpm * 0.05 + th * 0.055 : 0, eng.active ? 0.08 : 0.15);
  }

  function buildSkid() {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1700;
    bp.Q.value = 4.5;
    const bp2 = ctx.createBiquadFilter();
    bp2.type = 'peaking';
    bp2.frequency.value = 2600;
    bp2.Q.value = 3;
    bp2.gain.value = 8;
    const g = ctx.createGain();
    g.gain.value = 0;
    src.connect(bp);
    bp.connect(bp2);
    bp2.connect(g);
    g.connect(sfxBus);
    src.start();
    skid = { bp, g };
    applySkid();
  }

  function applySkid() {
    if (!skid) return;
    ramp(skid.g.gain, skidAmt * skidAmt * 0.3, 0.07);
    ramp(skid.bp.frequency, 1300 + skidAmt * 900, 0.1);
  }

  return {
    unlock() {
      const Ctor = AC();
      if (!Ctor) return;
      if (!ctx) {
        try {
          ctx = new Ctor({ latencyHint: 'interactive' });
          build();
        } catch (e) {
          ctx = null;
          return;
        }
      }
      if (ctx.state === 'suspended') {
        const p = ctx.resume();
        if (p && p.catch) p.catch(() => {});
      }
      if (wantMusic && music && music.kind !== wantMusic) music.start(wantMusic);
    },

    setVolumes({ master: m, music: mu, sfx: s } = {}) {
      vol.master = clamp01(m, vol.master);
      vol.music = clamp01(mu, vol.music);
      vol.sfx = clamp01(s, vol.sfx);
      if (!ctx) return;
      ramp(master.gain, vol.master);
      ramp(musicBus.gain, vol.music);
      ramp(sfxBus.gain, vol.sfx);
    },

    setEngine({ rpm = 0, throttle = 0, active = false } = {}) {
      eng.rpm = clamp01(rpm, 0);
      eng.throttle = clamp01(Math.abs(throttle), 0);
      eng.active = !!active;
      if (ctx) applyEngine();
    },

    setSkid(amount) {
      const a = clamp01(amount, 0);
      if (a === skidAmt) return;
      skidAmt = a;
      if (ctx) applySkid();
    },

    play(name, { volume = 1 } = {}) {
      if (!ctx || ctx.state === 'closed') return; // a suspended context simply plays on resume
      const s = SOUNDS[name];
      if (!s) return;
      const now = ctx.currentTime;
      if (lastPlayed[name] != null && now - lastPlayed[name] < s.gap) return;
      lastPlayed[name] = now;
      const v = clamp01(volume, 1);
      if (v <= 0) return;
      try {
        s.fn(ctx, sfxBus, noiseBuf, now + 0.005, v);
      } catch (e) { /* never let a sound break the game loop */ }
    },

    startMusic(kind) {
      wantMusic = kind === 'race' ? 'race' : 'menu';
      if (ctx && music) music.start(wantMusic);
    },

    stopMusic() {
      wantMusic = null;
      if (ctx && music) music.stop();
    },

    setMuted(m) {
      muted = !!m;
      if (ctx) ramp(muteGain.gain, muted ? 0 : 1, 0.03);
    },

    // ---- extras beyond the contract
    isMuted: () => muted,
    isUnlocked: () => !!ctx && ctx.state === 'running',
    get context() { return ctx; },
  };
}
