export interface TeamHistoricalLeadersParams {
	teamID: number;
	leagueID?: string;
	seasonID?: number;
}

export interface CareerLeadersByTeamRow {
	teamId: number;
	pts: number;
	ptsPersonId: number;
	ptsPlayer: unknown;
	ast: number;
	astPersonId: number;
	astPlayer: unknown;
	reb: number;
	rebPersonId: number;
	rebPlayer: unknown;
	blk: number;
	blkPersonId: number;
	blkPlayer: unknown;
	stl: number;
	stlPersonId: number;
	stlPlayer: unknown;
	seasonYear: string;
}

export interface TeamHistoricalLeadersResponse {
	careerLeadersByTeam: CareerLeadersByTeamRow[];
}
