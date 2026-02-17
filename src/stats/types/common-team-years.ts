
export interface CommonTeamYearsParams {
  leagueID?: string;
}

export interface TeamYearsRow {
  leagueId: string;
  teamId: number;
  minYear: unknown;
  maxYear: unknown;
  abbreviation: string;
}

export interface CommonTeamYearsResponse {
  teamYears: TeamYearsRow[];
}
