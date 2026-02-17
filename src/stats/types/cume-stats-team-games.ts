export interface CumeStatsTeamGamesParams {
	teamID: number;
	leagueID?: string;
	season?: string;
	seasonType?: string;
	location?: string;
	outcome?: string;
	seasonID?: number;
	vsConference?: string;
	vsDivision?: string;
	vsTeamID?: number;
}

export type CumeStatsTeamGamesResponse = {};
