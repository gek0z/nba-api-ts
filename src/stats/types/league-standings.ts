
export interface LeagueStandingsParams {
  leagueID?: string;
  season?: string;
  seasonType?: string;
  seasonYear?: number;
}

export interface StandingsRow {
  leagueid: number;
  seasonid: number;
  teamid: number;
  teamcity: string;
  teamname: string;
  conference: unknown;
  conferencerecord: unknown;
  playoffrank: unknown;
  clinchindicator: unknown;
  division: unknown;
  divisionrecord: unknown;
  divisionrank: unknown;
  wins: unknown;
  losses: unknown;
  winpct: unknown;
  leaguerank: unknown;
  record: unknown;
  home: unknown;
  road: unknown;
  l10: unknown;
  last10home: unknown;
  last10road: unknown;
  ot: unknown;
  threeptsorless: unknown;
  tenptsormore: unknown;
  longhomestreak: unknown;
  strlonghomestreak: unknown;
  longroadstreak: unknown;
  strlongroadstreak: unknown;
  longwinstreak: unknown;
  longlossstreak: unknown;
  currenthomestreak: unknown;
  strcurrenthomestreak: unknown;
  currentroadstreak: unknown;
  strcurrentroadstreak: unknown;
  currentstreak: unknown;
  strcurrentstreak: unknown;
  conferencegamesback: unknown;
  divisiongamesback: unknown;
  clinchedconferencetitle: unknown;
  clincheddivisiontitle: unknown;
  clinchedplayoffbirth: unknown;
  eliminatedconference: unknown;
  eliminateddivision: unknown;
  aheadathalf: unknown;
  behindathalf: unknown;
  tiedathalf: unknown;
  aheadatthird: unknown;
  behindatthird: unknown;
  tiedatthird: unknown;
  score100pts: unknown;
  oppscore100pts: unknown;
  oppover500: unknown;
  leadinfgpct: unknown;
  leadinreb: unknown;
  fewerturnovers: unknown;
  pointspg: unknown;
  opppointspg: unknown;
  diffpointspg: unknown;
  vseast: unknown;
  vsatlantic: unknown;
  vscentral: unknown;
  vssoutheast: unknown;
  vswest: unknown;
  vsnorthwest: unknown;
  vspacific: unknown;
  vssouthwest: unknown;
  jan: unknown;
  feb: unknown;
  mar: unknown;
  apr: unknown;
  may: unknown;
  jun: unknown;
  jul: unknown;
  aug: unknown;
  sep: unknown;
  oct: unknown;
  nov: unknown;
  dec: unknown;
  preas: unknown;
  postas: unknown;
}

export interface LeagueStandingsResponse {
  standings: StandingsRow[];
}
