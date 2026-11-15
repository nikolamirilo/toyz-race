// Toyz Race — car roster. All names/designs are original.
//
// stats (1..10) are for UI bars; the physics numbers next to them are what the simulation uses and are
// kept consistent with the bars (speed <-> topSpeed, accel <-> acceleration, grip <-> gripFactor, weight <-> mass).

export const CARS = [
  {
    id: 'pipsqueak', name: 'Pip Squeak', type: 'kart', class: 'Rookie',
    tagline: 'Tiny go-kart, giant grin. Turns on a coin.',
    color: '#ffd23f', accent: '#e63946',
    stats: { speed: 2, accel: 8, grip: 9, weight: 2 },
    topSpeed: 29, acceleration: 26, gripFactor: 1.15, mass: 0.7, turnRate: 3.1, radius: 0.9,
  },
  {
    id: 'hopscotch', name: 'Hopscotch', type: 'buggy', class: 'Rookie',
    tagline: 'Bouncy dune buggy that shrugs off bumps.',
    color: '#ff7b1c', accent: '#1d3557',
    stats: { speed: 4, accel: 6, grip: 7, weight: 4 },
    topSpeed: 31, acceleration: 22, gripFactor: 1.0, mass: 0.9, turnRate: 2.9, radius: 1.0,
  },
  {
    id: 'biscuitbus', name: 'Biscuit Bus', type: 'van', class: 'Rookie',
    tagline: 'Slow to wake up, impossible to shove aside.',
    color: '#3db2a5', accent: '#fff3d6',
    stats: { speed: 3, accel: 4, grip: 6, weight: 8 },
    topSpeed: 30, acceleration: 18, gripFactor: 0.95, mass: 1.5, turnRate: 2.6, radius: 1.05,
  },
  {
    id: 'mudmuffin', name: 'Mud Muffin', type: 'rally', class: 'Amateur',
    tagline: 'Rally hatch that sticks like jam to toast.',
    color: '#2f6fed', accent: '#ffffff',
    stats: { speed: 6, accel: 6, grip: 8, weight: 5 },
    topSpeed: 34, acceleration: 23, gripFactor: 1.1, mass: 1.0, turnRate: 2.9, radius: 1.0,
  },
  {
    id: 'gruffstomper', name: 'Gruff Stomper', type: 'monster', class: 'Amateur',
    tagline: 'Big wheels, bigger attitude. Bullies the pack.',
    color: '#7a3ff2', accent: '#b6ff3b',
    stats: { speed: 5, accel: 5, grip: 5, weight: 10 },
    topSpeed: 33, acceleration: 20, gripFactor: 0.9, mass: 1.8, turnRate: 2.5, radius: 1.15,
  },
  {
    id: 'brassknuckle', name: 'Brass Knuckle', type: 'muscle', class: 'Amateur',
    tagline: 'All motor, no manners. Loves going sideways.',
    color: '#c1121f', accent: '#f4c95d',
    stats: { speed: 8, accel: 6, grip: 4, weight: 7 },
    topSpeed: 37, acceleration: 21, gripFactor: 0.82, mass: 1.3, turnRate: 2.6, radius: 1.05,
  },
  {
    id: 'needlenine', name: 'Needle Nine', type: 'formula', class: 'Pro',
    tagline: 'Open-wheel missile. Fastest thing on the carpet.',
    color: '#f5f5f0', accent: '#ff3d7f',
    stats: { speed: 10, accel: 7, grip: 9, weight: 3 },
    topSpeed: 41, acceleration: 24, gripFactor: 1.2, mass: 0.8, turnRate: 2.8, radius: 1.0,
  },
  {
    id: 'ionwisp', name: 'Ion Wisp', type: 'future', class: 'Pro',
    tagline: 'Prototype from next Tuesday. Launches like a spark.',
    color: '#1b1f3b', accent: '#22e6ff',
    stats: { speed: 9, accel: 10, grip: 7, weight: 3 },
    topSpeed: 39, acceleration: 28, gripFactor: 1.0, mass: 0.85, turnRate: 3.0, radius: 1.0,
  },
];

/**
 * Karting mode: everyone drives this same go-kart (not in CARS, so it never shows up in the car select).
 *   powerUndersteer: share of steering authority lost at speed with the gas pinned — lift to turn in.
 *   wallScrub:       extra speed lost on a wall hit — running wide costs real time.
 */
export const KART = {
  id: 'gokart', name: 'Go-Kart', type: 'kart', class: 'Karting',
  tagline: 'Same kart for everyone. The lap time is all you.',
  color: '#2f6fed', accent: '#ffffff',
  stats: { speed: 5, accel: 7, grip: 9, weight: 2 },
  topSpeed: 34, acceleration: 23, gripFactor: 1.12, mass: 0.75, turnRate: 3.0, radius: 0.9,
  powerUndersteer: 0.45, wallScrub: 0.4,
};

export const CAR_BY_ID = Object.fromEntries(CARS.concat(KART).map((c) => [c.id, c]));

export function getCarDef(id) {
  return CAR_BY_ID[id] || CARS[0];
}
