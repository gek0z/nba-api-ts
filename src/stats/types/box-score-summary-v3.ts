export interface BoxScoreSummaryV3Params {
	gameID: string;
}

/** Parsed from the `boxScoreSummary` object of the V3 response. */
export interface BoxScoreSummaryV3Response {
	gameId: string;
	gameCode: string;
	gameStatus: number;
	gameStatusText: string;
	period: number;
	gameClock: string;
	gameTimeUTC: string;
	gameEt: string;
	awayTeamId: number;
	homeTeamId: number;
	duration: string;
	attendance: number;
	sellout: number;
	seriesGameNumber: string;
	gameLabel: string;
	gameSubLabel: string;
	seriesText: string;
	ifNecessary: boolean;
	isNeutral: boolean;
	arena: BoxScoreSummaryV3Arena;
	officials: BoxScoreSummaryV3Official[];
	broadcasters: BoxScoreSummaryV3Broadcasters;
	homeTeam: BoxScoreSummaryV3Team;
	awayTeam: BoxScoreSummaryV3Team;
	lastFiveMeetings: BoxScoreSummaryV3LastFiveMeetings;
	pregameCharts: BoxScoreSummaryV3PregameCharts;
	postgameCharts: BoxScoreSummaryV3PostgameCharts;
	videoAvailableFlag: number;
	ptAvailable: number;
	ptXYZAvailable: number;
	whStatus: number;
	hustleStatus: number;
	historicalStatus: number;
	gameSubtype: string;
}

export interface BoxScoreSummaryV3PostgameCharts {
	homeTeam: BoxScoreSummaryV3PostgameChartTeam;
	awayTeam: BoxScoreSummaryV3PostgameChartTeam;
}

export interface BoxScoreSummaryV3PostgameChartTeam {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	statistics: BoxScoreSummaryV3PostgameChartStatistics;
}

export interface BoxScoreSummaryV3PostgameChartStatistics {
	points: number;
	reboundsTotal: number;
	assists: number;
	steals: number;
	blocks: number;
	turnovers: number;
	fieldGoalsPercentage: number;
	threePointersPercentage: number;
	freeThrowsPercentage: number;
	pointsInThePaint: number;
	pointsSecondChance: number;
	pointsFastBreak: number;
	biggestLead: number;
	leadChanges: number;
	timesTied: number;
	biggestScoringRun: number;
	turnoversTeam: number;
	turnoversTotal: number;
	reboundsTeam: number;
	pointsFromTurnovers: number;
	benchPoints: number;
	playerPtsLeaderFirstName: string;
	playerPtsLeaderFamilyName: string;
	playerPtsLeaderId: number;
	playerPtsLeaderPts: number;
	playerRebLeaderFirstName: string;
	playerRebLeaderFamilyName: string;
	playerRebLeaderId: number;
	playerRebLeaderReb: number;
	playerAstLeaderFirstName: string;
	playerAstLeaderFamilyName: string;
	playerAstLeaderId: number;
	playerAstLeaderAst: number;
	playerBlkLeaderFirstName: string;
	playerBlkLeaderFamilyName: string;
	playerBlkLeaderId: number;
	playerBlkLeaderBlk: number;
}

export interface BoxScoreSummaryV3PregameCharts {
	homeTeam: BoxScoreSummaryV3PregameChartTeam;
	awayTeam: BoxScoreSummaryV3PregameChartTeam;
}

export interface BoxScoreSummaryV3PregameChartTeam {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	statistics: BoxScoreSummaryV3PregameChartStatistics;
}

export interface BoxScoreSummaryV3PregameChartStatistics {
	points: number;
	reboundsTotal: number;
	assists: number;
	steals: number;
	blocks: number;
	turnovers: number;
	fieldGoalsPercentage: number;
	threePointersPercentage: number;
	freeThrowsPercentage: number;
	pointsInThePaint: number;
	pointsSecondChance: number;
	pointsFastBreak: number;
	playerPtsLeaderFirstName: string;
	playerPtsLeaderFamilyName: string;
	playerPtsLeaderId: number;
	playerPtsLeaderPts: number;
	playerRebLeaderFirstName: string;
	playerRebLeaderFamilyName: string;
	playerRebLeaderId: number;
	playerRebLeaderReb: number;
	playerAstLeaderFirstName: string;
	playerAstLeaderFamilyName: string;
	playerAstLeaderId: number;
	playerAstLeaderAst: number;
	playerBlkLeaderFirstName: string;
	playerBlkLeaderFamilyName: string;
	playerBlkLeaderId: number;
	playerBlkLeaderBlk: number;
}

export interface BoxScoreSummaryV3LastFiveMeetings {
	meetings: BoxScoreSummaryV3Meeting[];
}

export interface BoxScoreSummaryV3Meeting {
	recencyOrder: number;
	gameId: string;
	gameTimeUTC: string;
	gameEt: string;
	gameStatus: number;
	gameStatusText: string;
	gameClock: string;
	broadcasterVideoLink: string;
	awayTeam: BoxScoreSummaryV3MeetingTeam;
	homeTeam: BoxScoreSummaryV3MeetingTeam;
}

export interface BoxScoreSummaryV3MeetingTeam {
	teamId: number;
	teamCity: string;
	teamName: string;
	teamTricode: string;
	teamSlug: string;
	score: number;
	wins: number;
	losses: number;
}

export interface BoxScoreSummaryV3Team {
	teamId: number;
	teamName: string;
	teamCity: string;
	teamTricode: string;
	teamSlug: string;
	teamWins: number;
	teamLosses: number;
	score: number;
	inBonus: string;
	timeoutsRemaining: number;
	seed: number;
	statistics: BoxScoreSummaryV3TeamStatistics;
	periods: BoxScoreSummaryV3TeamPeriod[];
	players: BoxScoreSummaryV3Player[];
	inactives: BoxScoreSummaryV3Inactive[];
}

export interface BoxScoreSummaryV3Inactive {
	personId: number;
	firstName: string;
	familyName: string;
	jerseyNum: string;
}

export interface BoxScoreSummaryV3Player {
	personId: number;
	name: string;
	nameI: string;
	firstName: string;
	familyName: string;
	jerseyNum: string;
}

export interface BoxScoreSummaryV3TeamPeriod {
	period: number;
	periodType: string;
	score: number;
}

export interface BoxScoreSummaryV3TeamStatistics {
	dummyKey: string;
}

export interface BoxScoreSummaryV3Broadcasters {
	internationalBroadcasters: BoxScoreSummaryV3Broadcaster[];
	internationalRadioBroadcasters: unknown[];
	internationalOttBroadcasters: BoxScoreSummaryV3Broadcaster[];
	nationalBroadcasters: BoxScoreSummaryV3Broadcaster[];
	nationalRadioBroadcasters: BoxScoreSummaryV3Broadcaster[];
	nationalOttBroadcasters: unknown[];
	homeTvBroadcasters: BoxScoreSummaryV3Broadcaster[];
	homeRadioBroadcasters: BoxScoreSummaryV3Broadcaster[];
	homeOttBroadcasters: unknown[];
	awayTvBroadcasters: BoxScoreSummaryV3Broadcaster[];
	awayRadioBroadcasters: BoxScoreSummaryV3Broadcaster[];
	awayOttBroadcasters: unknown[];
}

export interface BoxScoreSummaryV3Broadcaster {
	broadcasterId: number;
	broadcastDisplay: string;
	broadcasterDisplay: string;
	broadcasterVideoLink: string;
	broadcasterDescription: string;
	broadcasterTeamId: number;
	regionId: number;
}

export interface BoxScoreSummaryV3Official {
	personId: number;
	name: string;
	nameI: string;
	firstName: string;
	familyName: string;
	jerseyNum: string;
	assignment: string;
}

export interface BoxScoreSummaryV3Arena {
	arenaId: number;
	arenaName: string;
	arenaCity: string;
	arenaState: string;
	arenaCountry: string;
	arenaTimezone: string;
	arenaStreetAddress: string;
	arenaPostalCode: string;
}
