// Toyz Race — race module public API (see CONTRACT.md).
import { Car, AIDriver, CARS, resolveCarCollisions } from '../cars/index.js';
import { RaceCore } from './race-core.js';

export { ITEMS } from './items.js';

export class Race extends RaceCore {
  /**
   * new Race({ scene, track, playerCarId, playerName, laps, opponents, difficulty, mode })
   * Optional extras: { random, autopilot, playerGridSlot, deps } — `deps` overrides the cars module (tests).
   * Multiplayer (CONTRACT-NET.md §2): net: { role: 'host', localId, remotes: [{ id, name, carId }] }
   *                                   net: { role: 'client', localId, roster }  — roster from the host's getRoster().
   *   race.getRoster(), race.on('net', (msg, toId) => …), race.netReceive(msg, fromId), race.dropRemote(netId), race.netRole
   */
  constructor(opts) {
    super(opts, { Car, AIDriver, CARS, resolveCarCollisions, ...(opts && opts.deps) });
  }
}
