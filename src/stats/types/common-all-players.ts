
export interface CommonAllPlayersParams {
  isOnlyCurrentSeason?: number;
  leagueID?: string;
  season?: string;
}

export interface CommonAllPlayersRow {
  personId: number;
  displayLastCommaFirst: unknown;
  displayFirstLast: unknown;
  rosterstatus: string;
  fromYear: unknown;
  toYear: unknown;
  playercode: string;
  playerSlug: string;
  teamId: number;
  teamCity: string;
  teamName: string;
  teamAbbreviation: string;
  teamCode: string;
  teamSlug: string;
  gamesPlayedFlag: unknown;
  otherleagueExperienceCh: unknown;
}

export interface CommonAllPlayersResponse {
  commonAllPlayers: CommonAllPlayersRow[];
}
