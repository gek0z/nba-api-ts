export type BoxScoreDefensiveV2Params = {};

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
	matchupminutes: string;
	partialpossessions: unknown;
	switcheson: unknown;
	playerpoints: unknown;
	defensiverebounds: unknown;
	matchupassists: string;
	matchupturnovers: string;
	steals: unknown;
	blocks: unknown;
	matchupfieldgoalsmade: string;
	matchupfieldgoalsattempted: string;
	matchupfieldgoalpercentage: string;
	matchupthreepointersmade: string;
	matchupthreepointersattempted: string;
	matchupthreepointerpercentage: string;
}

export interface TeamStatsRow {
	gameid: number;
	teamid: number;
	teamcity: string;
	teamname: string;
	teamtricode: string;
	teamslug: string;
	minutes: unknown;
}

export interface BoxScoreDefensiveV2Response {
	playerStats: PlayerStatsRow[];
	teamStats: TeamStatsRow[];
}
