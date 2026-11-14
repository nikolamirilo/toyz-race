// Toyz Race — tracks module. See CONTRACT.md.
import { buildCenterline, createTrack } from './builder.js';
import { garden } from './garden.js';
import { kitchen } from './kitchen.js';
import { toyshop } from './toyshop.js';
import { beach } from './beach.js';

const DEFS = [garden, kitchen, toyshop, beach];

/** Track catalogue for menus. */
export const TRACKS = DEFS.map((d) => {
  const line = buildCenterline(d);
  return {
    id: d.id,
    name: d.name,
    description: d.description,
    difficulty: d.difficulty,
    defaultLaps: d.defaultLaps,
    lengthLabel: `${Math.round(line.L)} m`,
  };
});

/** Build a fresh Track (see CONTRACT.md). Unknown ids fall back to the first track. */
export function buildTrack(id) {
  const def = DEFS.find((d) => d.id === id) || DEFS[0];
  return createTrack(def);
}
