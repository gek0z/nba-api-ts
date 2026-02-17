
export interface PlayByPlayV2Params {
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
  person1type: string;
  player1Id: number;
  player1Name: string;
  player1TeamId: number;
  player1TeamCity: string;
  player1TeamNickname: string;
  player1TeamAbbreviation: string;
  person2type: string;
  player2Id: number;
  player2Name: string;
  player2TeamId: number;
  player2TeamCity: string;
  player2TeamNickname: string;
  player2TeamAbbreviation: string;
  person3type: string;
  player3Id: number;
  player3Name: string;
  player3TeamId: number;
  player3TeamCity: string;
  player3TeamNickname: string;
  player3TeamAbbreviation: string;
  videoAvailableFlag: unknown;
}

export interface PlayByPlayV2Response {
  availableVideo: AvailableVideoRow[];
  playByPlay: PlayByPlayRow[];
}
