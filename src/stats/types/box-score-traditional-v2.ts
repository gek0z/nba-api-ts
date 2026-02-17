
export interface BoxScoreTraditionalV2Params {
  gameID: number;
  endPeriod?: number;
  endRange?: number;
  rangeType?: number;
  startPeriod?: number;
  startRange?: number;
}

export interface PlayerStatsRow {
  gameId: string;
  teamId: number;
  teamAbbreviation: string;
  teamCity: string;
  playerId: number;
  playerName: string;
  startPosition: string;
  comment: string;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  ftm: number;
  fta: number;
  ftPct: number | null;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  to: unknown;
  pf: number;
  pts: number;
  plusMinus: number;
}

export interface TeamStarterBenchStatsRow {
  gameId: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamCity: string;
  startersBench: unknown;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  ftm: number;
  fta: number;
  ftPct: number | null;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  to: unknown;
  pf: number;
  pts: number;
}

export interface TeamStatsRow {
  gameId: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamCity: string;
  min: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
  ftm: number;
  fta: number;
  ftPct: number | null;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  to: unknown;
  pf: number;
  pts: number;
  plusMinus: number;
}

export interface BoxScoreTraditionalV2Response {
  playerStats: PlayerStatsRow[];
  teamStarterBenchStats: TeamStarterBenchStatsRow[];
  teamStats: TeamStatsRow[];
}
