
export interface PlayerFantasyProfileBarGraphParams {
  playerID: number;
  season?: string;
  leagueID?: string;
  seasonType?: string;
}

export interface LastFiveGamesAvgRow {
  playerId: number;
  playerName: string;
  teamId: number;
  teamAbbreviation: string;
  fanDuelPts: unknown;
  nbaFantasyPts: number;
  pts: number;
  reb: number;
  ast: number;
  fg3m: number;
  ftPct: number | null;
  stl: number;
  blk: number;
  tov: number;
  fgPct: number | null;
}

export interface SeasonAvgRow {
  playerId: number;
  playerName: string;
  teamId: number;
  teamAbbreviation: string;
  fanDuelPts: unknown;
  nbaFantasyPts: number;
  pts: number;
  reb: number;
  ast: number;
  fg3m: number;
  ftPct: number | null;
  stl: number;
  blk: number;
  tov: number;
  fgPct: number | null;
}

export interface PlayerFantasyProfileBarGraphResponse {
  lastFiveGamesAvg: LastFiveGamesAvgRow[];
  seasonAvg: SeasonAvgRow[];
}
