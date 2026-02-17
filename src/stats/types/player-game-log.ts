
export interface PlayerGameLogParams {
  playerID: number;
  season?: string;
  seasonType?: string;
  dateFrom?: string;
  dateTo?: string;
  leagueID?: string;
}

export interface PlayerGameLogRow {
  seasonId: string;
  playerId: number;
  gameId: string;
  gameDate: string;
  matchup: string;
  wl: unknown;
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
  tov: number;
  pf: number;
  pts: number;
  plusMinus: number;
  videoAvailable: unknown;
}

export interface PlayerGameLogResponse {
  playerGameLog: PlayerGameLogRow[];
}
