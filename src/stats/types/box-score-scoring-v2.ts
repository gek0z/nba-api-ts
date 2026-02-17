export interface BoxScoreScoringV2Params {
	gameID: number;
	endPeriod?: number;
	endRange?: number;
	rangeType?: number;
	startPeriod?: number;
	startRange?: number;
}

export interface sqlPlayersScoringRow {
	gameId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCity: string;
	playerId: number;
	playerName: string;
	startPosition: string;
	comment: string;
	min: number;
	pctFga2pt: unknown;
	pctFga3pt: unknown;
	pctPts2pt: unknown;
	pctPts2ptMr: unknown;
	pctPts3pt: unknown;
	pctPtsFb: unknown;
	pctPtsFt: unknown;
	pctPtsOffTov: unknown;
	pctPtsPaint: unknown;
	pctAst2pm: unknown;
	pctUast2pm: unknown;
	pctAst3pm: unknown;
	pctUast3pm: unknown;
	pctAstFgm: unknown;
	pctUastFgm: unknown;
}

export interface sqlTeamsScoringRow {
	gameId: string;
	teamId: number;
	teamName: string;
	teamAbbreviation: string;
	teamCity: string;
	min: number;
	pctFga2pt: unknown;
	pctFga3pt: unknown;
	pctPts2pt: unknown;
	pctPts2ptMr: unknown;
	pctPts3pt: unknown;
	pctPtsFb: unknown;
	pctPtsFt: unknown;
	pctPtsOffTov: unknown;
	pctPtsPaint: unknown;
	pctAst2pm: unknown;
	pctUast2pm: unknown;
	pctAst3pm: unknown;
	pctUast3pm: unknown;
	pctAstFgm: unknown;
	pctUastFgm: unknown;
}

export interface BoxScoreScoringV2Response {
	sqlPlayersScoring: sqlPlayersScoringRow[];
	sqlTeamsScoring: sqlTeamsScoringRow[];
}
