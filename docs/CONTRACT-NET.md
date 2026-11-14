# Toyz Race — multiplayer contract (addendum to CONTRACT.md)

Goal: a player hosts a room, other people on the network join with a 4-letter code (or a link), everybody
races together, and every grid slot not taken by a human is a bot. Up to 8 cars total.

Model: **host-authoritative world, client-authoritative own car.**
- Every human simulates THEIR OWN car locally with the normal `Car` physics (zero input lag) and streams its state.
- The host simulates bots, pickups, items/weapons, laps, positions, finishing — the whole Race — and treats remote
  humans' cars as "puppets" whose transform/velocity come from the network (extrapolated between packets).
- Clients run a replica Race: own car simulated locally, every other car is a puppet interpolated from host snapshots;
  pickups / projectiles / puddles / shields / held items / laps / positions / race state come from host snapshots;
  race events (countdown, go, lap, pickup, fire, hit, …) are forwarded by the host and re-emitted locally so the
  integrator's existing event wiring (HUD, audio, camera shake) works unchanged on clients.
- Effects on a remote human's car (weapon hit → spin/impulse/launch, turbo, boost) are sent by the host as a targeted
  message and applied by that client to its own car.

## 0. Feature flag — multiplayer is OPT-IN at build time

Everything in this document is compiled in only when the env var `VITE_MULTIPLAYER` is set to
`1`/`true`/`on`/`yes`. **Unset means OFF**, which is the default for every script and for plain
node (tests, the UI harness), where Vite's `define` never runs.

```
npm run dev        npm run build        npm run preview        npm run serve        # single-player
npm run dev:mp     npm run build:mp     npm run preview:mp     npm run serve:mp     # multiplayer
```

`src/flags.js` exports the resolved `MULTIPLAYER` constant; `vite.config.js` substitutes it via
`define: { __MULTIPLAYER__ }`. Because it folds to a literal, a flag-off build is *stripped*, not
merely hidden:

- `src/net/*` is dropped from the bundle (no WebSocket client, no `joinUrls`, no `/mp/info` fetch).
- The `mp` and `lobby` screens are never built; the main menu has no "Multiplayer" entry and
  `ui.showLobby` / `updateLobby` / `showMpError` are no-ops. A `?join=CODE` URL is ignored.
- The relay is not attached to the dev, preview or standalone server, and `/mp*` answers `404`.

The flag must match between build and serve: a `build:mp` bundle needs `serve:mp`, or the client
will look for a relay that is not there. The build and the server each print which mode they are in.

**Not stripped:** the host/client sync inside `src/race/*` (`net.js`, `puppet.js`) stays in the
bundle, dormant — `Race` only activates it when it is constructed with a `net` option, which cannot
happen when the flag is off. Gating it too would mean teaching `src/race` about build flags.

Three owners. Each edits ONLY its own area.

## 1. Transport — owner: net agent. Files: `server/*`, `vite.config.js`, `src/net/*`, may add deps to package.json (`ws`).

Relay server (Node, `ws`), attached to the Vite dev server AND the Vite preview server through a plugin in
`vite.config.js` (`configureServer` / `configurePreviewServer`, upgrade path `/mp`), so `npm run dev` is still the only
command. Also `server/standalone.js` (`npm run serve`) that serves `dist/` + the relay on one port for people who built
the game. `vite.config.js` must set `server.host: true` and `preview.host: true` (LAN access), port 5173 strict.
The plugin also answers `GET /mp/info` → `{ addresses: ["192.168.1.20", ...], port }` (non-internal IPv4s).

Rooms: 4-letter codes (unambiguous alphabet), max 8 members, first member is host; host leaving closes the room;
a room that has `locked: true` (race running) rejects new joins with a clear error. Heartbeat/ping to drop dead sockets.
The server only relays; it never interprets game messages.

`src/net/index.js`:

```js
export function createNet(); // -> net
net.host({ name, meta })            // Promise<{ code }>            creates a room, you are host
net.join(code, { name, meta })      // Promise<{ code }>            rejects with Error(message) (unknown room, full, locked)
net.leave()
net.connected; net.isHost; net.id; net.code;
net.peers                            // [{ id, name, isHost, meta }] INCLUDING yourself, host first, join order
net.setMeta(patch)                   // merge into your meta (e.g. { carId }) and broadcast; triggers 'peers' everywhere
net.setRoomState(patch)              // host only: shared room state object (e.g. lobby settings, locked) -> 'room' everywhere
net.room                             // last room state
net.send(type, data, toId)           // relay JSON to everyone else, or to one peer when toId is given
net.on(event, cb) / net.off          // 'peers' (peers), 'room' (roomState), 'message' (type, data, fromId),
                                     // 'close' ({ reason }) — socket lost / room closed / kicked, 'ping' (ms)
net.joinUrls()                       // Promise<string[]>  e.g. ["http://192.168.1.20:5173/?join=ABCD"] from /mp/info (+ location.origin)
```

WebSocket URL is derived from `location` (`ws(s)://host/mp`). Must work when the page is opened via LAN IP.
Must be importable in node without throwing (guard `window`/`WebSocket`).

## 2. Race sync — owner: race agent. Files: `src/race/*`, and minimal additive edits to `src/cars/car.js` if a puppet hook is needed.

```js
// host
new Race({ ...existing, net: { role: 'host', localId, remotes: [{ id, name, carId }] } });
//   `opponents` = number of other cars in total; the first remotes.length of them are remote humans, the rest bots.
// client
new Race({ ...existing, net: { role: 'client', localId, roster } });
//   roster comes verbatim from the host's race.getRoster(); the entry with netId === localId is the local player.

race.getRoster();            // host -> JSON: [{ index, name, carId, kind: 'human'|'bot', netId|null, color }]  (grid order)
race.on('net', (msg, toId)); // something to transmit: toId null = everyone (host->all clients, client->host), else that peer only
race.netReceive(msg, fromId);// feed a received message
race.dropRemote(netId);      // host: that human left -> their car becomes a bot (AIDriver) seamlessly
race.netRole;                // 'host' | 'client' | null
```

Everything else about `Race` keeps the existing contract (`cars`, `player`, `state`, `time`, `update(dt, playerControls)`,
`info(car)`, `standings()`, events, `dispose()`), on host AND client, so the integrator's code is role-agnostic:
`race.player` is always the local human's car; `info()/standings()` are correct on clients (from host data);
all events fire on clients too (re-emitted from host messages; 'raceOver' on a client fires after the local player
finished, with host standings). `standings()` entries get `isPlayer` = local player and `isHuman` = any human.

The race module decides message content and rates itself (suggested: client → host own-car state 30 Hz, host → clients
snapshot 20 Hz, events immediately). Messages must be plain JSON-serialisable and compact (arrays of rounded numbers).
Smoothness requirements: puppets are interpolated/extrapolated (snapshot buffer with ~100 ms interpolation delay or
velocity-based dead reckoning with smooth correction — never teleport-jitter), wheel spin/steer still animate, particle
effects (smoke/sparks/boost flames) still work for puppets. Clients collide their own car against puppets locally
(`resolveCarCollisions` between local car and puppets is fine; puppets get corrected by the next snapshot).
In multiplayer the race is over for everybody at once: host emits/forwards 'raceOver' when all humans have finished
(or 20 s after the first human finished — remaining cars get estimated times), still also per the existing rule that the
local finished car goes on autopilot.

## 3. Lobby UI — owner: ui agent. Files: `src/ui/*`.

Main menu gets a "Multiplayer" entry (after Single Race). Flow:
`mp` screen: player name field, "Host a game", "Join a game" (4-letter code input, auto upper-case) → car select
(existing screen, with the mode chip "Multiplayer") → `handlers.onMpHost({ playerName, carId })` or
`handlers.onMpJoin({ code, playerName, carId })` → UI shows a "Connecting…" state until the integrator calls
`ui.showLobby(...)` or `ui.showMpError(message)` (error shown on the mp screen, user can retry).

```js
ui.showMenu('mp', { joinCode })   // integrator opens the join form pre-filled when the page URL has ?join=CODE
ui.showLobby({ code, joinUrls /* string[] */, isHost, players /* [{ id, name, carId, isHost, isYou }] */,
               settings /* { trackId, laps, difficulty, bots (0..7 = max bots to fill the grid) } */, status /* string|null */ });
ui.updateLobby(partial);          // same shape, any subset; cheap; no-op if lobby not visible
ui.isLobbyVisible();
```

Lobby screen (keeps the right half reasonably clear; integrator shows the selected track fly-over behind it and gets
`onPreview({ screen: 'lobby', trackId })`): big room code, copyable join link(s) (click to copy), player list (name, car,
host crown, "you" tag, empty slots shown as "Bot" up to the bots setting), and
- host: track selector, laps (2–8), difficulty, bots, "Start race" (enabled always; solo + bots allowed), "Change car", "Leave".
  Every change → `handlers.onMpSettings(settings)`. Start → `handlers.onMpStart(settings)`.
- client: read-only view of the host's settings, "Waiting for host…", "Change car", "Leave".
"Change car" → car select → `handlers.onMpCar({ carId })` → back to lobby. "Leave"/Esc → `handlers.onMpLeave()` (UI goes back to main menu).

Results in multiplayer: `ui.showResults({ ..., multiplayer: { isHost } })` → humans marked in the table (`standings[i].isHuman`),
single button "Back to lobby" → `handlers.onMpLobby()` (integrator then calls showLobby again). Pause overlay in
multiplayer: integrator calls `ui.showPause({ multiplayer: true })` → title "MENU" (the race does not stop), buttons
Resume / Leave race (→ `onQuit`), no Restart.
