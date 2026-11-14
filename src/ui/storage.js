// localStorage-backed settings, last menu selections and lap/race records.
// Everything is try/catch guarded so private mode / node never throws.

import { isTouch } from './util.js';

export const STORAGE_KEYS = {
  settings: 'toyzrace.settings',
  records: 'toyzrace.records',
  menu: 'toyzrace.menu',
};

// One-time move of the pre-rename keys (the game shipped as "tinytorque.*") so players keep
// their settings, menu selections and records across the rename. Safe to drop in a later version.
const LEGACY_KEYS = {
  settings: 'tinytorque.settings',
  records: 'tinytorque.records',
  menu: 'tinytorque.menu',
};

function migrateLegacyKeys() {
  try {
    for (const k of Object.keys(STORAGE_KEYS)) {
      const old = localStorage.getItem(LEGACY_KEYS[k]);
      if (old == null) continue;
      if (localStorage.getItem(STORAGE_KEYS[k]) == null) localStorage.setItem(STORAGE_KEYS[k], old);
      localStorage.removeItem(LEGACY_KEYS[k]);
    }
  } catch (e) {
    /* storage unavailable: nothing to migrate */
  }
}

export const DEFAULT_SETTINGS = {
  masterVolume: 0.8,
  musicVolume: 0.6,
  sfxVolume: 0.9,
  quality: 'high',
  playerName: 'Player',
  cameraShake: true,
  cameraView: null, // 'close' | 'medium' | 'far'. null = not chosen yet -> medium on touch, far on desktop
  autoGas: null, // touch controls: accelerate automatically. null = not chosen yet -> ON on touch devices
};

function load(key) {
  try {
    const s = localStorage.getItem(key);
    const v = s ? JSON.parse(s) : null;
    return v && typeof v === 'object' ? v : null;
  } catch (e) {
    return null;
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* storage unavailable: keep in memory only */
  }
}

const num01 = (v, d) => (typeof v === 'number' && isFinite(v) ? Math.min(1, Math.max(0, v)) : d);

export function cleanName(s) {
  const n = String(s == null ? '' : s).replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 12);
  return n || DEFAULT_SETTINGS.playerName;
}

function sanitizeSettings(raw) {
  const d = DEFAULT_SETTINGS;
  const r = raw || {};
  return {
    masterVolume: num01(r.masterVolume, d.masterVolume),
    musicVolume: num01(r.musicVolume, d.musicVolume),
    sfxVolume: num01(r.sfxVolume, d.sfxVolume),
    quality: ['low', 'medium', 'high'].includes(r.quality) ? r.quality : d.quality,
    playerName: cleanName(r.playerName),
    cameraShake: typeof r.cameraShake === 'boolean' ? r.cameraShake : d.cameraShake,
    autoGas: typeof r.autoGas === 'boolean' ? r.autoGas : null,
    cameraView: ['close', 'medium', 'far'].includes(r.cameraView) ? r.cameraView : null,
  };
}

export function createStore() {
  migrateLegacyKeys();
  const settings = sanitizeSettings(load(STORAGE_KEYS.settings));
  const sel = Object.assign(
    { mode: 'race', carId: null, trackId: null, laps: null, opponents: 7, difficulty: 1, mainIndex: 0 },
    load(STORAGE_KEYS.menu) || {}
  );
  let rec = load(STORAGE_KEYS.records) || {};
  if (!rec.lap || typeof rec.lap !== 'object') rec.lap = {};
  if (!rec.race || typeof rec.race !== 'object') rec.race = {};

  const valid = (t) => typeof t === 'number' && isFinite(t) && t > 0;

  const records = {
    getBestLap(trackId) {
      const v = rec.lap[trackId];
      return valid(v) ? v : null;
    },
    /** Stores t only if it beats the stored best. Returns true when it is a new record. */
    setBestLap(trackId, t) {
      if (!valid(t)) return false;
      const cur = records.getBestLap(trackId);
      if (cur != null && cur <= t) return false;
      rec.lap[trackId] = t;
      save(STORAGE_KEYS.records, rec);
      return true;
    },
    getBestRace(trackId, laps) {
      const v = rec.race[trackId + ':' + laps];
      return valid(v) ? v : null;
    },
    setBestRace(trackId, laps, t) {
      if (!valid(t)) return false;
      const cur = records.getBestRace(trackId, laps);
      if (cur != null && cur <= t) return false;
      rec.race[trackId + ':' + laps] = t;
      save(STORAGE_KEYS.records, rec);
      return true;
    },
    clear() {
      rec = { lap: {}, race: {} };
      save(STORAGE_KEYS.records, rec);
    },
  };

  return {
    settings,
    sel,
    records,
    /** copy of the settings as handed to the integrator: autoGas resolved to a boolean (default ON on touch devices) */
    getSettings() {
      return Object.assign({}, settings, {
        autoGas: settings.autoGas == null ? isTouch() : !!settings.autoGas,
        cameraView: settings.cameraView || (isTouch() ? 'medium' : 'far'),
      });
    },
    saveSettings() { save(STORAGE_KEYS.settings, settings); },
    saveSel() { save(STORAGE_KEYS.menu, sel); },
  };
}
