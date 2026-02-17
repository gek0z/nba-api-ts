export type BoxScoreSummaryV2Params = {};

export interface AvailableVideoRow {
	gameId: string;
	videoAvailableFlag: unknown;
	ptAvailable: unknown;
	ptXyzAvailable: unknown;
	whStatus: string;
	hustleStatus: string;
	historicalStatus: string;
}

export interface GameInfoRow {
	gameDate: string;
	attendance: unknown;
	gameTime: unknown;
}

export interface GameSummaryRow {
	gameDateEst: string;
	gameSequence: unknown;
	gameId: string;
	gameStatusId: number;
	gameStatusText: string;
	gamecode: string;
	homeTeamId: number;
	visitorTeamId: number;
	season: string;
	livePeriod: unknown;
	livePcTime: unknown;
	natlTvBroadcasterAbbreviation: string;
	livePeriodTimeBcast: unknown;
	whStatus: string;
}

export interface InactivePlayersRow {
	playerId: number;
	firstName: string;
	lastName: string;
	jerseyNum: unknown;
	teamId: number;
	teamCity: string;
	teamName: string;
	teamAbbreviation: string;
}

export interface LastMeetingRow {
	gameId: string;
	lastGameId: number;
	lastGameDateEst: string;
	lastGameHomeTeamId: number;
	lastGameHomeTeamCity: string;
	lastGameHomeTeamName: string;
	lastGameHomeTeamAbbreviation: string;
	lastGameHomeTeamPoints: unknown;
	lastGameVisitorTeamId: number;
	lastGameVisitorTeamCity: string;
	lastGameVisitorTeamName: string;
	lastGameVisitorTeamCity1: string;
	lastGameVisitorTeamPoints: unknown;
}

export interface LineScoreRow {
	gameDateEst: string;
	gameSequence: unknown;
	gameId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCityName: string;
	teamNickname: string;
	teamWinsLosses: unknown;
	ptsQtr1: unknown;
	ptsQtr2: unknown;
	ptsQtr3: unknown;
	ptsQtr4: unknown;
	ptsOt1: unknown;
	ptsOt2: unknown;
	ptsOt3: unknown;
	ptsOt4: unknown;
	ptsOt5: unknown;
	ptsOt6: unknown;
	ptsOt7: unknown;
	ptsOt8: unknown;
	ptsOt9: unknown;
	ptsOt10: unknown;
	pts: number;
}

export interface OfficialsRow {
	officialId: number;
	firstName: string;
	lastName: string;
	jerseyNum: unknown;
}

export interface OtherStatsRow {
	leagueId: string;
	teamId: number;
	teamAbbreviation: string;
	teamCity: string;
	ptsPaint: unknown;
	pts2ndChance: unknown;
	ptsFb: unknown;
	largestLead: unknown;
	leadChanges: unknown;
	timesTied: unknown;
	teamTurnovers: unknown;
	totalTurnovers: unknown;
	teamRebounds: unknown;
	ptsOffTo: unknown;
}

export interface SeasonSeriesRow {
	gameId: string;
	homeTeamId: number;
	visitorTeamId: number;
	gameDateEst: string;
	homeTeamWins: unknown;
	homeTeamLosses: unknown;
	seriesLeader: unknown;
}

export interface BoxScoreSummaryV2Response {
	availableVideo: AvailableVideoRow[];
	gameInfo: GameInfoRow[];
	gameSummary: GameSummaryRow[];
	inactivePlayers: InactivePlayersRow[];
	lastMeeting: LastMeetingRow[];
	lineScore: LineScoreRow[];
	officials: OfficialsRow[];
	otherStats: OtherStatsRow[];
	seasonSeries: SeasonSeriesRow[];
}
