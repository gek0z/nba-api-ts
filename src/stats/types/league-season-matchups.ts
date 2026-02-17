
export interface LeagueSeasonMatchupsParams {
  leagueID?: string;
  perMode?: string;
  season?: string;
  seasonType?: string;
  defPlayerID?: number;
  defTeamID?: number;
  offPlayerID?: number;
  offTeamID?: number;
}

export interface SeasonMatchupsRow {
  seasonId: string;
  offPlayerId: number;
  offPlayerName: string;
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
  helpBlk: unknown;
  helpFgm: unknown;
  helpFga: unknown;
  helpFgPerc: unknown;
  matchupFtm: string;
  matchupFta: string;
  sfl: unknown;
}

export interface LeagueSeasonMatchupsResponse {
  seasonMatchups: SeasonMatchupsRow[];
}
