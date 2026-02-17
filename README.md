# nba-api-ts

TypeScript NBA API client. Zero dependencies. Wraps **138 stats endpoints** and **4 live data endpoints** from NBA.com.

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

// Stats (stats.nba.com) — 138 endpoints
const career = await nba.stats.playerCareerStats({ playerID: 203999 });
console.log(career.careerTotalsRegularSeason[0].pts); // 25.0

const dashboard = await nba.stats.leagueDashPlayerStats({
  season: '2024-25',
  perMode: 'PerGame',
});
console.log(dashboard.leagueDashPlayerStats[0].playerName);

// Live data (cdn.nba.com) — no Akamai protection
const scoreboard = await nba.live.scoreboard();
console.log(scoreboard.scoreboard.games.length, 'games today');

const boxscore = await nba.live.boxscore('0022400123');
console.log(boxscore.game.homeTeam.teamName);

const pbp = await nba.live.playByPlay('0022400123');
console.log(pbp.game.actions.length, 'plays');

const odds = await nba.live.odds();
console.log(odds.games.length, 'games with odds');
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

138 endpoints are available. Some commonly used ones:

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

## Akamai / TLS Fingerprinting

All `stats.nba.com` endpoints are behind Akamai bot protection that blocks requests based on TLS fingerprinting. This means Node.js and Bun's built-in `fetch` will be blocked. Live endpoints (`cdn.nba.com`) work fine from any environment.

To use stats endpoints from a server, provide a custom `fetch` backed by a library that can impersonate a browser's TLS fingerprint:

```typescript
// Using tls-client (recommended)
import { NBAClient } from 'nba-api-ts';
import tlsClient from 'tls-client';

const session = new tlsClient.Session({ clientIdentifier: 'chrome_131' });

const nba = new NBAClient({
  stats: {
    fetch: (url, init) => session.get(url, { headers: init?.headers }),
  },
});

// Now stats endpoints work from Node/Bun
const career = await nba.stats.playerCareerStats({ playerID: 203999 });
```

Any fetch-compatible function works — `tls-client`, `curl-impersonate`, Puppeteer, or a proxy that adds the right TLS fingerprint.

## Development

```bash
bun install
bun test
bun run build

# Run integration tests against real NBA API
NBA_INTEGRATION_TESTS=1 bun test tests/integration
```

## License

MIT
