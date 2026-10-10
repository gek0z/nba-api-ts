---
title: Parameters and seasons
description: camelCase params, season helpers, IDs, and the string union types for NBA filter values.
---

Every stats method takes one object of camelCase parameters. The client converts them to the PascalCase query string the NBA expects and leaves out anything `undefined`:

```ts
await nba.stats.leagueDashPlayerStats({ season: "2024-25", perMode: "Per36", seasonType: "Playoffs" });
// GET /stats/leaguedashplayerstats?Season=2024-25&PerMode=Per36&SeasonType=Playoffs
```

Each endpoint page has a **Parameters** table with the type, whether it's required, the default the client sends, and the NBA name it maps to.

## Seasons

Seasons are strings like `"2024-25"`. The helpers work them out from today's date, with October as the start of a new season:

```ts
import { currentSeason, formatSeason, previousSeason } from "nba-api-ts";

currentSeason();      // "2026-27" (from October 2026)
previousSeason();     // "2025-26"
formatSeason(2015);   // "2015-16"
```

Some endpoints want a season ID instead, a `2` followed by the start year:

```ts
import { currentSeasonId, formatSeasonId } from "nba-api-ts";

formatSeasonId(2024); // "22024"
```

## IDs

| ID | Type | Example |
|---|---|---|
| `playerID` | `number` | `2544` (LeBron James) |
| `teamID` | `number` | `1610612747` (Lakers) |
| `gameID` | `string` | `"0022400061"` |

Game IDs must stay strings. The first three characters encode the league and season type (`002` is the regular season, `004` the playoffs), and the API rejects the ID if the leading zeros are lost.

## Filter values

Filters like `perMode` and `seasonType` are typed as `string` on each endpoint, so any value the NBA accepts goes through. For autocomplete and typo checks, use the exported unions:

```ts
import type { LeagueID, PerModeDetailed, SeasonTypePlayoffs } from "nba-api-ts";

const perMode: PerModeDetailed = "Per36";
const seasonType: SeasonTypePlayoffs = "Playoffs";
const league: LeagueID = "00"; // NBA. "10" is the WNBA, "20" the G League
```

`defaults` holds the values the NBA site itself uses, handy as a base:

```ts
import { defaults } from "nba-api-ts";

defaults.season;     // current season
defaults.perMode;    // "PerGame"
defaults.seasonType; // "Regular Season"
```
