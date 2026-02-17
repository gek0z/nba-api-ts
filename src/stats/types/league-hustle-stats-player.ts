export interface LeagueHustleStatsPlayerParams {
	perMode?: string;
	season?: string;
	seasonType?: string;
	college?: string;
	conference?: string;
	country?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	draftPick?: string;
	draftYear?: number;
	height?: string;
	leagueID?: string;
	location?: string;
	month?: number;
	opponentTeamID?: number;
	outcome?: string;
	pORound?: number;
	playerExperience?: string;
	playerPosition?: string;
	seasonSegment?: string;
	teamID?: number;
	vsConference?: string;
	vsDivision?: string;
	weight?: string;
}

export interface HustleStatsPlayerRow {
	playerId: number;
	playerName: string;
	teamId: number;
	teamAbbreviation: string;
	age: number;
	g: unknown;
	min: number;
	contestedShots: unknown;
	contestedShots2pt: unknown;
	contestedShots3pt: unknown;
	deflections: unknown;
	chargesDrawn: unknown;
	screenAssists: unknown;
	screenAstPts: unknown;
	offLooseBallsRecovered: unknown;
	defLooseBallsRecovered: unknown;
	looseBallsRecovered: unknown;
	pctLooseBallsRecoveredOff: unknown;
	pctLooseBallsRecoveredDef: unknown;
	offBoxouts: unknown;
	defBoxouts: unknown;
	boxOutPlayerTeamRebs: unknown;
	boxOutPlayerRebs: unknown;
	boxOuts: unknown;
	pctBoxOutsOff: unknown;
	pctBoxOutsDef: unknown;
	pctBoxOutsTeamReb: unknown;
	pctBoxOutsReb: unknown;
}

export interface LeagueHustleStatsPlayerResponse {
	hustleStatsPlayer: HustleStatsPlayerRow[];
}
