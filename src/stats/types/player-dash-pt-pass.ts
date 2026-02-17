
export interface PlayerDashPtPassParams {
  teamID: number;
  playerID: number;
  lastNGames?: number;
  leagueID?: string;
  month?: number;
  opponentTeamID?: number;
  perMode?: string;
  season?: string;
  seasonType?: string;
  dateFrom?: string;
  dateTo?: string;
  location?: string;
  outcome?: string;
  seasonSegment?: string;
  vsConference?: string;
  vsDivision?: string;
}

export interface PassesMadeRow {
  playerId: number;
  playerNameLastFirst: string;
  teamName: string;
  teamId: number;
  teamAbbreviation: string;
  passType: string;
  g: unknown;
  passTo: unknown;
  passTeammatePlayerId: number;
  frequency: unknown;
  pass: unknown;
  ast: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface PassesReceivedRow {
  playerId: number;
  playerNameLastFirst: string;
  teamName: string;
  teamId: number;
  teamAbbreviation: string;
  passType: string;
  g: unknown;
  passFrom: unknown;
  passTeammatePlayerId: number;
  frequency: unknown;
  pass: unknown;
  ast: number;
  fgm: number;
  fga: number;
  fgPct: number | null;
  fg2m: unknown;
  fg2a: unknown;
  fg2Pct: number | null;
  fg3m: number;
  fg3a: number;
  fg3Pct: number | null;
}

export interface PlayerDashPtPassResponse {
  passesMade: PassesMadeRow[];
  passesReceived: PassesReceivedRow[];
}
