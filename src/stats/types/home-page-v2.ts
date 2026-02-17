
export interface HomePageV2Params {
  gameScope?: string;
  leagueID?: string;
  playerOrTeam?: string;
  playerScope?: string;
  season?: string;
  seasonType?: string;
  statType?: string;
}

export interface HomePageStat1Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  pts: number;
}

export interface HomePageStat2Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  reb: number;
}

export interface HomePageStat3Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  ast: number;
}

export interface HomePageStat4Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  stl: number;
}

export interface HomePageStat5Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  fgPct: number | null;
}

export interface HomePageStat6Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  ftPct: number | null;
}

export interface HomePageStat7Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  fg3Pct: number | null;
}

export interface HomePageStat8Row {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  blk: number;
}

export interface HomePageV2Response {
  homePageStat1: HomePageStat1Row[];
  homePageStat2: HomePageStat2Row[];
  homePageStat3: HomePageStat3Row[];
  homePageStat4: HomePageStat4Row[];
  homePageStat5: HomePageStat5Row[];
  homePageStat6: HomePageStat6Row[];
  homePageStat7: HomePageStat7Row[];
  homePageStat8: HomePageStat8Row[];
}
