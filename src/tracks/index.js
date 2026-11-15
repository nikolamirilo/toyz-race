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
export function buildTrack(id, opts) {
  const def = DEFS.find((d) => d.id === id) || DEFS[0];
  return createTrack(opts ? variant(def, opts) : def);
}

/**
 * (extra) Layout variants of a track, same centreline and scenery:
 *   widthScale  multiplies the road half-width (karting: a narrow ribbon where the line through a corner matters)
 *   bare        no boost pads, obstacles or pickup crates — nothing but the road
 */
function variant(def, { widthScale = 1, bare = false }) {
  const s = widthScale;
  const lat = (o) => (o.lat ? { ...o, lat: o.lat * s } : o);
  return {
    ...def,
    _line: undefined, // the cached centreline belongs to the full-width layout
    halfWidth: def.halfWidth * s,
    waypoints: def.waypoints.map((w) => (w[3] && w[3].w ? [w[0], w[1], w[2], { ...w[3], w: w[3].w * s }] : w)),
    boostAt: bare ? [] : (def.boostAt || []).map(lat),
    obstaclesAt: bare ? [] : (def.obstaclesAt || []).map(lat),
    pickupAt: bare ? [] : def.pickupAt,
  };
}
