export interface TeamAndPlayersVsPlayersParams {
	vsTeamID: number;
	vsPlayerID5: string;
	vsPlayerID4: string;
	vsPlayerID3: string;
	vsPlayerID2: string;
	vsPlayerID1: string;
	teamID: number;
	playerID5: string;
	playerID4: string;
	playerID3: string;
	playerID2: string;
	playerID1: string;
	lastNGames?: number;
	measureType?: string;
	month?: number;
	opponentTeamID?: number;
	paceAdjust?: string;
	perMode?: string;
	period?: number;
	plusMinus?: string;
	rank?: string;
	season?: string;
	seasonType?: string;
	conference?: string;
	dateFrom?: string;
	dateTo?: string;
	division?: string;
	gameSegment?: string;
	leagueID?: string;
	location?: string;
	outcome?: string;
	seasonSegment?: string;
	shotClockRange?: number;
	vsConference?: string;
	vsDivision?: string;
}

export interface PlayersVsPlayersRow {
	groupSet: unknown;
	titleDescription: string;
	description: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface TeamPlayersVsPlayersOffRow {
	groupSet: unknown;
	titleDescription: string;
	playerId: number;
	playerName: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface TeamPlayersVsPlayersOnRow {
	groupSet: unknown;
	titleDescription: string;
	playerId: number;
	playerName: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface TeamVsPlayersRow {
	groupSet: unknown;
	titleDescription: string;
	description: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface TeamVsPlayersOffRow {
	groupSet: unknown;
	titleDescription: string;
	description: string;
	min: number;
	fgm: number;
	fga: number;
	fgPct: number | null;
	fg3m: number;
	fg3a: number;
	fg3Pct: number | null;
	ftm: number;
	fta: number;
	ftPct: number | null;
	oreb: number;
	dreb: number;
	reb: number;
	ast: number;
	tov: number;
	stl: number;
	blk: number;
	blka: number;
	pf: number;
	pfd: number;
	pts: number;
	plusMinus: number;
}

export interface TeamAndPlayersVsPlayersResponse {
	playersVsPlayers: PlayersVsPlayersRow[];
	teamPlayersVsPlayersOff: TeamPlayersVsPlayersOffRow[];
	teamPlayersVsPlayersOn: TeamPlayersVsPlayersOnRow[];
	teamVsPlayers: TeamVsPlayersRow[];
	teamVsPlayersOff: TeamVsPlayersOffRow[];
}
