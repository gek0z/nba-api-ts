
export interface CommonPlayerInfoParams {
  playerID: number;
  leagueID?: string;
}

export interface AvailableSeasonsRow {
  seasonId: string;
}

export interface CommonPlayerInfoRow {
  personId: number;
  firstName: string;
  lastName: string;
  displayFirstLast: unknown;
  displayLastCommaFirst: unknown;
  displayFiLast: unknown;
  playerSlug: string;
  birthdate: string;
  school: unknown;
  country: unknown;
  lastAffiliation: unknown;
  height: unknown;
  weight: unknown;
  seasonExp: string;
  jersey: unknown;
  position: string;
  rosterstatus: string;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  teamCode: string;
  teamCity: string;
  playercode: string;
  fromYear: unknown;
  toYear: unknown;
  dleagueFlag: unknown;
  nbaFlag: unknown;
  gamesPlayedFlag: unknown;
  draftYear: unknown;
  draftRound: unknown;
  draftNumber: unknown;
}

export interface PlayerHeadlineStatsRow {
  playerId: number;
  playerName: string;
  timeframe: unknown;
  pts: number;
  ast: number;
  reb: number;
  pie: unknown;
}

export interface CommonPlayerInfoResponse {
  availableSeasons: AvailableSeasonsRow[];
  commonPlayerInfo: CommonPlayerInfoRow[];
  playerHeadlineStats: PlayerHeadlineStatsRow[];
}
