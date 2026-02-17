
export interface LeagueDashPtDefendParams {
  defenseCategory?: string;
  leagueID?: string;
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
  gameSegment?: string;
  height?: string;
  lastNGames?: number;
  location?: string;
  month?: number;
  opponentTeamID?: number;
  outcome?: string;
  pORound?: number;
  period?: number;
  playerExperience?: string;
  playerID?: number;
  playerPosition?: string;
  seasonSegment?: string;
  starterBench?: string;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
  weight?: string;
}

export interface LeagueDashPTDefendRow {
  closeDefPersonId: number;
  playerName: string;
  playerLastTeamId: number;
  playerLastTeamAbbreviation: string;
  playerPosition: string;
  age: number;
  gp: number;
  g: unknown;
  freq: unknown;
  dFgm: unknown;
  dFga: unknown;
  dFgPct: number | null;
  normalFgPct: number | null;
  pctPlusminus: unknown;
}

export interface LeagueDashPtDefendResponse {
  leagueDashPTDefend: LeagueDashPTDefendRow[];
}
