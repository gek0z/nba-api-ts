
export interface HomePageLeadersParams {
  gameScope?: string;
  leagueID?: string;
  playerOrTeam?: string;
  playerScope?: string;
  season?: string;
  seasonType?: string;
  statCategory?: string;
}

export interface HomePageLeadersRow {
  rank: unknown;
  teamId: number;
  teamName: string;
  teamAbbreviation: string;
  pts: number;
  fgPct: number | null;
  fg3Pct: number | null;
  ftPct: number | null;
  efgPct: number | null;
  tsPct: number | null;
  ptsPer48: unknown;
}

export interface LeagueAverageRow {
  pts: number;
  fgPct: number | null;
  fg3Pct: number | null;
  ftPct: number | null;
  efgPct: number | null;
  tsPct: number | null;
  ptsPer48: unknown;
}

export interface LeagueMaxRow {
  pts: number;
  fgPct: number | null;
  fg3Pct: number | null;
  ftPct: number | null;
  efgPct: number | null;
  tsPct: number | null;
  ptsPer48: unknown;
}

export interface HomePageLeadersResponse {
  homePageLeaders: HomePageLeadersRow[];
  leagueAverage: LeagueAverageRow[];
  leagueMax: LeagueMaxRow[];
}
