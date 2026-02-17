
export interface FranchiseHistoryParams {
  leagueID?: string;
}

export interface DefunctTeamsRow {
  leagueId: string;
  teamId: number;
  teamCity: string;
  teamName: string;
  startYear: unknown;
  endYear: unknown;
  years: unknown;
  games: unknown;
  wins: unknown;
  losses: unknown;
  winPct: number | null;
  poAppearances: unknown;
  divTitles: unknown;
  confTitles: unknown;
  leagueTitles: unknown;
}

export interface FranchiseHistoryRow {
  leagueId: string;
  teamId: number;
  teamCity: string;
  teamName: string;
  startYear: unknown;
  endYear: unknown;
  years: unknown;
  games: unknown;
  wins: unknown;
  losses: unknown;
  winPct: number | null;
  poAppearances: unknown;
  divTitles: unknown;
  confTitles: unknown;
  leagueTitles: unknown;
}

export interface FranchiseHistoryResponse {
  defunctTeams: DefunctTeamsRow[];
  franchiseHistory: FranchiseHistoryRow[];
}
