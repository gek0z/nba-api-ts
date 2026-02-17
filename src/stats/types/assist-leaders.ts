
export interface AssistLeadersParams {
  leagueID?: string;
  perMode?: string;
  playerOrTeam?: string;
  season?: string;
  seasonType?: string;
}

export interface AssistLeadersRow {
  rank: unknown;
  teamId: number;
  teamAbbreviation: string;
  teamName: string;
  ast: number;
}

export interface AssistLeadersResponse {
  assistLeaders: AssistLeadersRow[];
}
