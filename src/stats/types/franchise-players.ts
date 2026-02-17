
export interface FranchisePlayersParams {
  teamID: number;
  leagueID?: string;
  perMode?: string;
  seasonType?: string;
}

export interface FranchisePlayersRow {
  leagueId: string;
  teamId: number;
  team: unknown;
  personId: number;
  player: unknown;
  seasonType: string;
  activeWithTeam: unknown;
  gp: number;
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
  pf: number;
  stl: number;
  tov: number;
  blk: number;
  pts: number;
}

export interface FranchisePlayersResponse {
  franchisePlayers: FranchisePlayersRow[];
}
