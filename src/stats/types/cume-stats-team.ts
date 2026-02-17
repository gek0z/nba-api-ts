
export interface CumeStatsTeamParams {
  teamID: number;
  gameIDs: string;
  leagueID?: string;
  season?: string;
  seasonType?: string;
}

export interface GameByGameStatsRow {
  jerseyNum: unknown;
  player: unknown;
  personId: number;
  teamId: number;
  gp: number;
  gs: number;
  actualMinutes: unknown;
  actualSeconds: unknown;
  fg: unknown;
  fga: number;
  fgPct: number | null;
  fg3: unknown;
  fg3a: number;
  fg3Pct: number | null;
  ft: unknown;
  fta: number;
  ftPct: number | null;
  offReb: unknown;
  defReb: unknown;
  totReb: unknown;
  ast: number;
  pf: number;
  dq: unknown;
  stl: number;
  turnovers: unknown;
  blk: number;
  pts: number;
  maxActualMinutes: unknown;
  maxActualSeconds: unknown;
  maxReb: unknown;
  maxAst: unknown;
  maxStl: unknown;
  maxTurnovers: unknown;
  maxBlkp: unknown;
  maxPts: unknown;
  avgActualMinutes: unknown;
  avgActualSeconds: unknown;
  avgReb: unknown;
  avgAst: unknown;
  avgStl: unknown;
  avgTurnovers: unknown;
  avgBlkp: unknown;
  avgPts: unknown;
  perMinReb: unknown;
  perMinAst: unknown;
  perMinStl: unknown;
  perMinTurnovers: unknown;
  perMinBlk: unknown;
  perMinPts: unknown;
}

export interface TotalTeamStatsRow {
  city: string;
  nickname: string;
  teamId: number;
  w: number;
  l: number;
  wHome: unknown;
  lHome: unknown;
  wRoad: unknown;
  lRoad: unknown;
  teamTurnovers: unknown;
  teamRebounds: unknown;
  gp: number;
  gs: number;
  actualMinutes: unknown;
  actualSeconds: unknown;
  fg: unknown;
  fga: number;
  fgPct: number | null;
  fg3: unknown;
  fg3a: number;
  fg3Pct: number | null;
  ft: unknown;
  fta: number;
  ftPct: number | null;
  offReb: unknown;
  defReb: unknown;
  totReb: unknown;
  ast: number;
  pf: number;
  stl: number;
  totalTurnovers: unknown;
  blk: number;
  pts: number;
  avgReb: unknown;
  avgPts: unknown;
  dq: unknown;
}

export interface CumeStatsTeamResponse {
  gameByGameStats: GameByGameStatsRow[];
  totalTeamStats: TotalTeamStatsRow[];
}
