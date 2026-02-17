
export interface LeagueLeadersParams {
  leagueID?: string;
  perMode?: string;
  scope?: string;
  season?: string;
  seasonType?: string;
  statCategory?: string;
  activeFlag?: string;
}

export interface LeagueLeadersRow {
  playerId: number;
  rank: unknown;
  player: unknown;
  team: unknown;
  gp: number;
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
  eff: unknown;
  astTov: unknown;
  stlTov: unknown;
}

export interface LeagueLeadersResponse {
  leagueLeaders: LeagueLeadersRow[];
}
