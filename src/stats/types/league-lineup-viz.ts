
export interface LeagueLineupVizParams {
  minutesMin: string;
  groupQuantity?: number;
  lastNGames?: number;
  measureType?: string;
  month?: number;
  opponentTeamID?: number;
  paceAdjust?: string;
  perMode?: string;
  period?: number;
  plusMinus?: string;
  rank?: string;
  season?: string;
  seasonType?: string;
  conference?: string;
  dateFrom?: string;
  dateTo?: string;
  division?: string;
  gameSegment?: string;
  leagueID?: string;
  location?: string;
  outcome?: string;
  pORound?: number;
  seasonSegment?: string;
  shotClockRange?: number;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
}

export interface LeagueLineupVizRow {
  groupId: number;
  groupName: string;
  teamId: number;
  teamAbbreviation: string;
  min: number;
  offRating: unknown;
  defRating: unknown;
  netRating: unknown;
  pace: unknown;
  tsPct: number | null;
  ftaRate: unknown;
  tmAstPct: number | null;
  pctFga2pt: unknown;
  pctFga3pt: unknown;
  pctPts2ptMr: unknown;
  pctPtsFb: unknown;
  pctPtsFt: unknown;
  pctPtsPaint: unknown;
  pctAstFgm: unknown;
  pctUastFgm: unknown;
  oppFg3Pct: number | null;
  oppEfgPct: number | null;
  oppFtaRate: unknown;
  oppTovPct: number | null;
}

export interface LeagueLineupVizResponse {
  leagueLineupViz: LeagueLineupVizRow[];
}
