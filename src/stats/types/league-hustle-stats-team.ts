
export interface LeagueHustleStatsTeamParams {
  perMode?: string;
  season?: string;
  seasonType?: string;
  college?: string;
  conference?: string;
  country?: string;
  dateFrom?: string;
  dateTo?: string;
  division?: string;
  draftPick?: string;
  draftYear?: number;
  height?: string;
  leagueID?: string;
  location?: string;
  month?: number;
  opponentTeamID?: number;
  outcome?: string;
  pORound?: number;
  playerExperience?: string;
  playerPosition?: string;
  seasonSegment?: string;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
  weight?: string;
}

export interface HustleStatsTeamRow {
  teamId: number;
  teamName: string;
  min: number;
  contestedShots: unknown;
  contestedShots2pt: unknown;
  contestedShots3pt: unknown;
  deflections: unknown;
  chargesDrawn: unknown;
  screenAssists: unknown;
  screenAstPts: unknown;
  offLooseBallsRecovered: unknown;
  defLooseBallsRecovered: unknown;
  looseBallsRecovered: unknown;
  pctLooseBallsRecoveredOff: unknown;
  pctLooseBallsRecoveredDef: unknown;
  offBoxouts: unknown;
  defBoxouts: unknown;
  boxOuts: unknown;
  pctBoxOutsOff: unknown;
  pctBoxOutsDef: unknown;
}

export interface LeagueHustleStatsTeamResponse {
  hustleStatsTeam: HustleStatsTeamRow[];
}
