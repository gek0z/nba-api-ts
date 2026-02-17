
export interface LeagueDashPtStatsParams {
  lastNGames?: number;
  month?: number;
  opponentTeamID?: number;
  perMode?: string;
  playerOrTeam?: string;
  ptMeasureType?: string;
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
  gameScope?: string;
  height?: string;
  leagueID?: string;
  location?: string;
  outcome?: string;
  pORound?: number;
  playerExperience?: string;
  playerPosition?: string;
  seasonSegment?: string;
  starterBench?: string;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
  weight?: string;
}

export interface LeagueDashPtStatsRow {
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  gp: number;
  w: number;
  l: number;
  min: number;
  distFeet: unknown;
  distMiles: unknown;
  distMilesOff: unknown;
  distMilesDef: unknown;
  avgSpeed: unknown;
  avgSpeedOff: unknown;
  avgSpeedDef: unknown;
}

export interface LeagueDashPtStatsResponse {
  leagueDashPtStats: LeagueDashPtStatsRow[];
}
