// Toyz Race — tracks module. See CONTRACT.md.
import { buildCenterline, createTrack } from './builder.js';
import { garden } from './garden.js';
import { kitchen } from './kitchen.js';
import { toyshop } from './toyshop.js';
import { beach } from './beach.js';
import { snow } from './snow.js';
import { bedroom } from './bedroom.js';
import { KART_DEFS } from './karting.js';

const DEFS = [garden, kitchen, snow, toyshop, bedroom, beach];

const meta = (d) => {
  const line = buildCenterline(d);
  return {
    id: d.id,
    name: d.name,
    description: d.description,
    difficulty: d.difficulty,
    defaultLaps: d.defaultLaps,
    lengthLabel: `${Math.round(line.L)} m`,
    kart: !!d.kart,
  };
};

/** Track catalogue for menus (single race, championship, time trial, multiplayer). */
export const TRACKS = DEFS.map(meta);
/** (extra) Kart circuits: narrow, twisty, nothing on the road. Karting mode only. */
export const KART_TRACKS = KART_DEFS.map(meta);

/** Build a fresh Track (see CONTRACT.md). Unknown ids fall back to the first track. */
export function buildTrack(id) {
  const def = DEFS.find((d) => d.id === id) || KART_DEFS.find((d) => d.id === id) || DEFS[0];
  const track = createTrack(def);
  track.kart = !!def.kart;
  return track;
}
