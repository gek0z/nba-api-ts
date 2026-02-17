// NOTE: This endpoint has a special multi-level header structure.
// The response is parsed as raw result sets; use parseResultSet for custom handling.

export interface LeagueDashPlayerShotLocationsParams {
  distanceRange?: string;
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
  college?: string;
  conference?: string;
  country?: string;
  dateFrom?: string;
  dateTo?: string;
  division?: string;
  draftPick?: string;
  draftYear?: string;
  gameScope?: string;
  gameSegment?: string;
  height?: string;
  leagueID?: string;
  location?: string;
  outcome?: string;
  pORound?: string;
  playerExperience?: string;
  playerPosition?: string;
  seasonSegment?: string;
  shotClockRange?: string;
  starterBench?: string;
  teamID?: number;
  vsConference?: string;
  vsDivision?: string;
  weight?: string;
}

export interface LeagueDashPlayerShotLocationsResponse {
  shotLocations: Record<string, unknown>[];
}
