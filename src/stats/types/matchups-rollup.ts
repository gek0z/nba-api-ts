
export interface MatchupsRollupParams {
  leagueID?: string;
  perMode?: string;
  season?: string;
  seasonType?: string;
  defPlayerID?: number;
  defTeamID?: number;
  offPlayerID?: number;
  offTeamID?: number;
}

export interface MatchupsRollupRow {
  seasonId: string;
  position: string;
  percentOfTime: unknown;
  defPlayerId: number;
  defPlayerName: string;
  gp: number;
  matchupMin: string;
  partialPoss: unknown;
  playerPts: unknown;
  teamPts: unknown;
  matchupAst: string;
  matchupTov: string;
  matchupBlk: string;
  matchupFgm: string;
  matchupFga: string;
  matchupFgPct: number | null;
  matchupFg3m: string;
  matchupFg3a: string;
  matchupFg3Pct: number | null;
  matchupFtm: string;
  matchupFta: string;
  sfl: unknown;
}

export interface MatchupsRollupResponse {
  matchupsRollup: MatchupsRollupRow[];
}
