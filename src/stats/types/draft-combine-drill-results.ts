
export interface DraftCombineDrillResultsParams {
  leagueID?: string;
  seasonYear?: number;
}

export interface ResultsRow {
  tempPlayerId: number;
  playerId: number;
  firstName: string;
  lastName: string;
  playerName: string;
  position: string;
  standingVerticalLeap: unknown;
  maxVerticalLeap: unknown;
  laneAgilityTime: unknown;
  modifiedLaneAgilityTime: unknown;
  threeQuarterSprint: unknown;
  benchPress: unknown;
}

export interface DraftCombineDrillResultsResponse {
  results: ResultsRow[];
}
