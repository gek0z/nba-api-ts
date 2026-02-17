
export interface PlayByPlayParams {
  gameID: number;
  endPeriod?: number;
  startPeriod?: number;
}

export interface AvailableVideoRow {
  videoAvailableFlag: unknown;
}

export interface PlayByPlayRow {
  gameId: string;
  eventnum: unknown;
  eventmsgtype: string;
  eventmsgactiontype: string;
  period: unknown;
  wctimestring: unknown;
  pctimestring: unknown;
  homedescription: string;
  neutraldescription: string;
  visitordescription: string;
  score: unknown;
  scoremargin: unknown;
}

export interface PlayByPlayResponse {
  availableVideo: AvailableVideoRow[];
  playByPlay: PlayByPlayRow[];
}
