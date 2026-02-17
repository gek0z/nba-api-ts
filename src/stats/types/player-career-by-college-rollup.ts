
export interface PlayerCareerByCollegeRollupParams {
  leagueID?: string;
  perMode?: string;
  seasonType?: string;
  season?: string;
}

export interface EastRow {
  region: unknown;
  seed: unknown;
  college: unknown;
  players: unknown;
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
}

export interface MidwestRow {
  region: unknown;
  seed: unknown;
  college: unknown;
  players: unknown;
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
}

export interface SouthRow {
  region: unknown;
  seed: unknown;
  college: unknown;
  players: unknown;
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
}

export interface WestRow {
  region: unknown;
  seed: unknown;
  college: unknown;
  players: unknown;
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
}

export interface PlayerCareerByCollegeRollupResponse {
  east: EastRow[];
  midwest: MidwestRow[];
  south: SouthRow[];
  west: WestRow[];
}
