// Toyz Race — item definitions + position-weighted item roulette.

export const ITEMS = [
  {
    id: 'rocket',
    name: 'Fizz Rocket',
    icon: '🚀',
    description: 'A shaken-up bottle rocket. Chases the racer ahead and pops them into the air.',
  },
  {
    id: 'turbo',
    name: 'Turbo Cell',
    icon: '🔋',
    description: 'An overcharged battery. A couple of seconds of flat-out extra speed.',
  },
  {
    id: 'glue',
    name: 'Goo Blob',
    icon: '🟢',
    description: 'Drops a sticky puddle behind you. Anyone who drives through it spins out.',
  },
  {
    id: 'pulse',
    name: 'Zap Ring',
    icon: '⚡',
    description: 'A static shock-wave that bursts outward and scrambles every car close to you.',
  },
  {
    id: 'marble',
    name: 'Mega Marble',
    icon: '🔮',
    description: 'A giant glass marble that rolls down the track, bouncing off the walls.',
  },
  {
    id: 'shield',
    name: 'Bubble Shield',
    icon: '🫧',
    description: 'A soapy force bubble. Shrugs off the next hit for a few seconds.',
  },
  {
    id: 'zaptow',
    name: 'Magna Tug',
    icon: '🧲',
    description: 'A crackling magnet beam. Latches onto the racer ahead and reels you in while they drag.',
  },
  {
    id: 'shockcloud',
    name: 'Grumble Cloud',
    icon: '🌩️',
    description: 'A grumpy little storm. Zaps everyone ahead of you tiny and slow for a moment.',
  },
  {
    id: 'pogo',
    name: 'Pogo Spring',
    icon: '🦘',
    description: 'A giant spring under the chassis. Hop clean over goo, marbles and rivals — the landing thump shoves cars nearby.',
  },
];

export const ITEM_BY_ID = Object.create(null);
for (const it of ITEMS) ITEM_BY_ID[it.id] = it;

// Tunables shared by the weapon code and the tests.
export const ITEM_TUNING = {
  rocket: { spin: 1.1, launch: 5.5, impulse: 4, life: 4.0, turn: 3.2 },
  turbo: { boost: 2.4 },
  glue: { spin: 0.9, slow: 0.45, life: 18, radius: 2.0, arm: 1.2 },
  pulse: { spin: 0.9, launch: 3.5, impulse: 5, radius: 10, duration: 0.45 },
  marble: { spin: 0.8, launch: 4, impulse: 9, life: 7, speed: 46, radius: 0.75 },
  shield: { time: 6 },
  // tow beam: `range` = max road distance to latch, `snap` = beam breaks beyond this, `pull` = extra accel toward the
  // target up to `top` x the car's top speed; the towed car is capped at `slow` x its top speed while latched
  zaptow: { time: 2.5, range: 45, snap: 62, pull: 30, top: 1.22, slow: 0.88, fizzleBoost: 0.7 },
  // storm: every car ahead in the standings is shrunk (visual `scale`) and capped at `slow` x top speed (can still steer)
  shockcloud: { time: 2.5, slow: 0.65, scale: 0.6 },
  // pogo: hop (`launch` = vertical speed, ~0.9 s of air) + forward `kick`; landing ring nudges cars within `radius`
  pogo: { launch: 14, kick: 9, radius: 6.5, nudge: 6, hop: 2.5, ring: 0.4 },
};

export const MAX_SLOW_TIME = 2.5;   // fairness: a slow-down that still lets the driver steer lasts at most this long
export const SLOW_GRACE = 2.5;      // s after a slow-down ended during which the car can not be slowed again

const _w = new Float32Array(ITEMS.length);

/**
 * Weighted random item. `position` is 1-based, leaders get defensive items,
 * back markers get turbo / rockets.
 */
export function pickItemFor(position, total, rnd = Math.random) {
  const rel = total > 1 ? (position - 1) / (total - 1) : 0.5; // 0 = leader, 1 = last
  const mid = 1 - Math.abs(2 * rel - 1);
  _w[0] = 0.35 + 1.7 * rel; // rocket
  _w[1] = 0.55 + 1.7 * rel; // turbo
  _w[2] = 1.5 - 1.05 * rel; // glue
  _w[3] = 0.55 + 0.8 * mid; // pulse
  _w[4] = 0.75 + 0.45 * rel; // marble
  _w[5] = 1.5 - 1.15 * rel; // shield
  _w[6] = 0.2 + 0.7 * rel + 0.6 * mid; // tow beam: needs somebody ahead
  _w[7] = 0.03 + 1.25 * rel * rel; // storm: punishes the cars in front, so (almost) never for the leaders
  _w[8] = 0.6; // pogo
  let sum = 0;
  for (let i = 0; i < _w.length; i++) sum += _w[i];
  let r = rnd() * sum;
  for (let i = 0; i < _w.length; i++) {
    r -= _w[i];
    if (r <= 0) return ITEMS[i];
  }
  return ITEMS[ITEMS.length - 1];
}
