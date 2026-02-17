export type BoxScoreHustleV2Params = {};

export interface PlayerStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	personid: number;
	firstname: string;
	familyname: string;
	namei: string;
	playerslug: string;
	position: string;
	comment: string;
	jerseynum: unknown;
	minutes: unknown;
	points: unknown;
	contestedshots: unknown;
	contestedshots2pt: unknown;
	contestedshots3pt: unknown;
	deflections: unknown;
	chargesdrawn: unknown;
	screenassists: unknown;
	screenassistpoints: unknown;
	looseballsrecoveredoffensive: unknown;
	looseballsrecovereddefensive: unknown;
	looseballsrecoveredtotal: unknown;
	offensiveboxouts: unknown;
	defensiveboxouts: unknown;
	boxoutplayerteamrebounds: unknown;
	boxoutplayerrebounds: unknown;
	boxouts: unknown;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
	points: unknown;
	contestedshots: unknown;
	contestedshots2pt: unknown;
	contestedshots3pt: unknown;
	deflections: unknown;
	chargesdrawn: unknown;
	screenassists: unknown;
	screenassistpoints: unknown;
	looseballsrecoveredoffensive: unknown;
	looseballsrecovereddefensive: unknown;
	looseballsrecoveredtotal: unknown;
	offensiveboxouts: unknown;
	defensiveboxouts: unknown;
	boxoutplayerteamrebounds: unknown;
	boxoutplayerrebounds: unknown;
	boxouts: unknown;
}

export interface BoxScoreHustleV2Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
