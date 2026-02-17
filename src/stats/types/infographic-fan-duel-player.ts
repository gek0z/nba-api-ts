
export interface InfographicFanDuelPlayerParams {
}

export interface FanDuelPlayerRow {
  playerId: number;
  playerName: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  jerseyNum: unknown;
  playerPosition: string;
  location: unknown;
  fanDuelPts: unknown;
  nbaFantasyPts: number;
  usgPct: number | null;
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
  tov: number;
  stl: number;
  blk: number;
  blka: number;
  pf: number;
  pfd: number;
  pts: number;
  plusMinus: number;
}

export interface InfographicFanDuelPlayerResponse {
  fanDuelPlayer: FanDuelPlayerRow[];
}
