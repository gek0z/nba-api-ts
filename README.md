# nba-api-ts

[![npm version](https://img.shields.io/npm/v/nba-api-ts)](https://www.npmjs.com/package/nba-api-ts)
[![CI](https://github.com/gek0z/nba-api-ts/actions/workflows/integration.yml/badge.svg)](https://github.com/gek0z/nba-api-ts/actions/workflows/integration.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/nba-api-ts)
[![Docs](https://img.shields.io/badge/docs-nba--api--ts.riccardo.lol-blue)](https://nba-api-ts.riccardo.lol)

TypeScript NBA API client. Zero dependencies. Wraps **138 stats endpoints** and **4 live data endpoints** from NBA.com.

## Features

- **138 stats endpoints** — player, team, game, draft, and league data from `stats.nba.com`
- **4 live endpoints** — real-time scoreboard, box scores, play-by-play, and odds from `cdn.nba.com`
- **Fully typed** — every endpoint has typed params, responses, and row interfaces
- **Built-in retry, rate limiting, and timeout** — exponential backoff, token-bucket rate limiter, configurable timeouts
- **Custom fetch injection** — plug in TLS impersonation libraries to bypass Akamai bot protection
- **Zero dependencies** — nothing to audit, nothing to break

## Requirements

- Node.js >= 18, Bun, or any runtime with `fetch` support
- Stats endpoints require a residential IP + TLS impersonation (see [Akamai / TLS Fingerprinting](#akamai--tls-fingerprinting))
- Live endpoints work from anywhere

## Install

```bash
bun add nba-api-ts
# or
npm install nba-api-ts
```

## Quick Start

```typescript
import { NBAClient } from 'nba-api-ts';

const nba = new NBAClient();

// Stats — player career totals
const career = await nba.stats.playerCareerStats({ playerID: 203999 });
console.log(career.careerTotalsRegularSeason[0].pts);

// Stats — league-wide player dashboard
const dashboard = await nba.stats.leagueDashPlayerStats({
  season: '2024-25',
  perMode: 'PerGame',
});
console.log(dashboard.leagueDashPlayerStats[0].playerName);

// Live — today's scoreboard (no Akamai, works anywhere)
const scoreboard = await nba.live.scoreboard();
console.log(scoreboard.scoreboard.games.length, 'games today');
```

## API Reference

### `NBAClient`

```typescript
const nba = new NBAClient({
  stats: { timeout: 30000, maxRetries: 3, rateLimit: 600, fetch: customFetch },
  live: { timeout: 10000, rateLimit: 0 },
});
```

- `nba.stats` — `StatsClient` with 138 endpoint methods
- `nba.live` — `LiveClient` with 4 methods (scoreboard, boxscore, playByPlay, odds)

### Stats Endpoints

138 endpoints are available ([full list](ENDPOINTS.md)). Some commonly used ones:

| Method | Description |
|--------|-------------|
| `playerCareerStats({ playerID })` | Career and season stats |
| `commonPlayerInfo({ playerID })` | Player biographical info |
| `commonAllPlayers({ season, leagueID })` | All players for a season |
| `leagueDashPlayerStats({ season })` | League-wide player stats |
| `leagueDashTeamStats({ season })` | League-wide team stats |
| `playerGameLog({ playerID, season })` | Game-by-game stats |
| `teamGameLog({ teamID, season })` | Team game-by-game stats |
| `shotChartDetail({ playerID, season })` | Shot chart data |
| `leagueGameFinder({ ... })` | Search for games |
| `boxScoreTraditionalV3({ gameID })` | Box score for a game |
| `playByPlayV2({ gameID })` | Play-by-play data |
| `scoreboardV2({ gameDate })` | Scoreboard for a date |
| `leagueStandings({ season })` | League standings |
| `leagueLeaders({ season, statCategory })` | League leaders |
| `commonTeamRoster({ teamID })` | Team roster |
| `playerIndex({ season })` | Player index |

### Response Format

Stats API responses use the NBA's `headers[]` + `rowSet[][]` format, automatically parsed into typed objects with camelCase keys:

```typescript
// Raw NBA response:
// { "headers": ["PLAYER_ID", "PTS"], "rowSet": [[203999, 25.0]] }

// Parsed:
// { playerId: 203999, pts: 25.0 }
```

### Parameters

Common parameter types are available as string unions:

```typescript
import type { PerModeDetailed, SeasonTypePlayoffs, LeagueID } from 'nba-api-ts';
import { currentSeason, formatSeason, defaults } from 'nba-api-ts';

const season = currentSeason(); // "2025-26"
const prev = formatSeason(2023); // "2023-24"
```

### Error Handling

```typescript
import { NBAApiError, NBATimeoutError, NBANetworkError } from 'nba-api-ts';

try {
  await nba.stats.playerCareerStats({ playerID: -1 });
} catch (e) {
  if (e instanceof NBAApiError) {
    console.log(e.statusCode, e.url);
  }
}
```

## Documentation

- [Full endpoint list](ENDPOINTS.md) — all 138 stats + 4 live endpoints with NBA API paths
- [API docs](https://nba-api-ts.riccardo.lol) — auto-generated TypeDoc reference

## Development

```bash
bun install
bun test            # unit tests (offline, fast)
bun run build

# Integration tests — hits real NBA API, requires residential IP
NBA_INTEGRATION_TESTS=1 bun test tests/integration

# Integration tests with TLS fingerprint impersonation
NBA_INTEGRATION_TESTS=1 NBA_USE_TLS=1 bun test tests/integration
```

## Contributing

PRs welcome. Run `bun run lint` and `bun test` before submitting.

<details>
<summary><h2>Akamai / TLS Fingerprinting</h2></summary>

All `stats.nba.com` endpoints are behind Akamai bot protection that blocks requests based on TLS fingerprinting. This means Node.js and Bun's built-in `fetch` will be blocked. Live endpoints (`cdn.nba.com`) work fine from any environment.

To use stats endpoints from a server, provide a custom `fetch` backed by a library that can impersonate a browser's TLS fingerprint:

```typescript
import { NBAClient } from 'nba-api-ts';
import { ModuleClient, SessionClient } from 'tlsclientwrapper';

const moduleClient = new ModuleClient();
await moduleClient.open();

const session = new SessionClient(moduleClient, {
  tlsClientIdentifier: 'chrome_131',
  timeoutSeconds: 30,
  defaultHeaders: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Referer': 'https://www.nba.com/',
    'Origin': 'https://www.nba.com',
  },
});

const nba = new NBAClient({
  stats: {
    fetch: async (url) => {
      const res = await session.get(url);
      if (res.status === 0) throw new Error(res.body);
      const headers: Record<string, string> = {};
      for (const [k, v] of Object.entries(res.headers))
        headers[k] = Array.isArray(v) ? v.join(', ') : String(v);
      return new Response(res.body, { status: res.status, headers });
    },
  },
});

const career = await nba.stats.playerCareerStats({ playerID: 203999 });
```

Any fetch-compatible function works — `tlsclientwrapper`, `curl-impersonate`, Puppeteer, or a proxy that adds the right TLS fingerprint.

### IP Blocking

Beyond TLS fingerprinting, `stats.nba.com` drops connections from known cloud/datacenter IP ranges. If your requests hang without any response, this is likely the cause — it affects all major providers (AWS, GCP, Azure, etc.) and CI environments like GitHub Actions.

You'll need to make requests from a residential IP, either directly (local machine, home server) or via a residential proxy.

</details>

## License

MIT
