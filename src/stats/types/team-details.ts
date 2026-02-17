
export interface TeamDetailsParams {
}

export interface TeamAwardsChampionshipsRow {
  yearawarded: unknown;
  oppositeteam: unknown;
}

export interface TeamAwardsConfRow {
  yearawarded: unknown;
  oppositeteam: unknown;
}

export interface TeamAwardsDivRow {
  yearawarded: unknown;
  oppositeteam: unknown;
}

export interface TeamBackgroundRow {
  teamId: number;
  abbreviation: string;
  nickname: string;
  yearfounded: unknown;
  city: string;
  arena: unknown;
  arenacapacity: string;
  owner: unknown;
  generalmanager: unknown;
  headcoach: unknown;
  dleagueaffiliation: unknown;
}

export interface TeamHistoryRow {
  teamId: number;
  city: string;
  nickname: string;
  yearfounded: unknown;
  yearactivetill: unknown;
}

export interface TeamHofRow {
  playerid: number;
  player: unknown;
  position: string;
  jersey: unknown;
  seasonswithteam: string;
  year: unknown;
}

export interface TeamRetiredRow {
  playerid: number;
  player: unknown;
  position: string;
  jersey: unknown;
  seasonswithteam: string;
  year: unknown;
}

export interface TeamSocialSitesRow {
  accounttype: string;
  websiteLink: unknown;
}

export interface TeamDetailsResponse {
  teamAwardsChampionships: TeamAwardsChampionshipsRow[];
  teamAwardsConf: TeamAwardsConfRow[];
  teamAwardsDiv: TeamAwardsDivRow[];
  teamBackground: TeamBackgroundRow[];
  teamHistory: TeamHistoryRow[];
  teamHof: TeamHofRow[];
  teamRetired: TeamRetiredRow[];
  teamSocialSites: TeamSocialSitesRow[];
}
