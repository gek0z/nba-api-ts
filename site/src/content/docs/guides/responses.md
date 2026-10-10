---
title: Responses
description: How nba-api-ts turns the NBA's headers-and-rowSet tables into typed objects, and how V3 endpoints differ.
---

stats.nba.com answers in one of two formats. Each endpoint page says which one under **Format**.

## V2: tables become rows

Most endpoints return named tables, each a list of column headers and an array of rows:

```json
{
  "resultSets": [
    {
      "name": "CareerTotalsRegularSeason",
      "headers": ["PLAYER_ID", "GP", "PTS", "FG3_PCT"],
      "rowSet": [[2544, 1622, 43440, 0.348446794448]]
    }
  ]
}
```

The client turns each table into an array of objects, keyed by the table's name in camelCase:

```ts
const res = await nba.stats.playerCareerStats({ playerID: 2544, perMode: "Totals" });

res.careerTotalsRegularSeason[0];
// { playerId: 2544, gp: 1622, pts: 43440, fg3Pct: 0.348446794448, … }
```

Column names are lower-cased and every `_x` becomes `X`:

| NBA header | Field |
|---|---|
| `PLAYER_ID` | `playerId` |
| `FG3_PCT` | `fg3Pct` |
| `GAME_DATE_EST` | `gameDateEst` |
| `TeamID` | `teamid` |

The last row is a gotcha: a few endpoints use PascalCase headers without underscores, and those come out all lower case. The types match what you get at runtime, and each endpoint page lists every column.

## V3: nested JSON

Newer endpoints (the `…V3` box scores, `boxScoreDefensiveV2`, `boxScoreHustleV2`, `playByPlayV3`, `scoreboardV3` and `scheduleLeagueV2`) return nested JSON. The client strips the `meta` wrapper and returns the payload as-is, with the NBA's own camelCase keys:

```ts
const box = await nba.stats.boxScoreTraditionalV3({ gameID: "0022400061" });
// { gameId: "0022400061", homeTeam: { teamTricode: "BOS", players: [...] }, awayTeam: { ... } }
```

:::caution[V3 types are approximate]
The declared types for V3 endpoints describe flat row arrays that don't match this nested shape. Until they're fixed, log a response and check field names before relying on them.
:::

## Parsing responses yourself

The parser is exported, for data you fetched another way:

```ts
import { parseResultSet, parseStatsResponse, snakeToCamel } from "nba-api-ts";

const parsed = parseStatsResponse(rawJson); // every result set, camelCase keys
const rows = parseResultSet(rawJson.resultSets[0]);
snakeToCamel("PLAYER_ID"); // "playerId"
```
