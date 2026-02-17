export interface DraftCombineStatsParams {
	leagueID?: string;
	seasonYear?: number;
}

export interface DraftCombineStatsRow {
	season: string;
	playerId: number;
	firstName: string;
	lastName: string;
	playerName: string;
	position: string;
	heightWoShoes: unknown;
	heightWoShoesFtIn: unknown;
	heightWShoes: unknown;
	heightWShoesFtIn: unknown;
	weight: unknown;
	wingspan: unknown;
	wingspanFtIn: unknown;
	standingReach: unknown;
	standingReachFtIn: unknown;
	bodyFatPct: number | null;
	handLength: unknown;
	handWidth: unknown;
	standingVerticalLeap: unknown;
	maxVerticalLeap: unknown;
	laneAgilityTime: unknown;
	modifiedLaneAgilityTime: unknown;
	threeQuarterSprint: unknown;
	benchPress: unknown;
	spotFifteenCornerLeft: unknown;
	spotFifteenBreakLeft: unknown;
	spotFifteenTopKey: unknown;
	spotFifteenBreakRight: unknown;
	spotFifteenCornerRight: unknown;
	spotCollegeCornerLeft: unknown;
	spotCollegeBreakLeft: unknown;
	spotCollegeTopKey: unknown;
	spotCollegeBreakRight: unknown;
	spotCollegeCornerRight: unknown;
	spotNbaCornerLeft: unknown;
	spotNbaBreakLeft: unknown;
	spotNbaTopKey: unknown;
	spotNbaBreakRight: unknown;
	spotNbaCornerRight: unknown;
	offDribFifteenBreakLeft: unknown;
	offDribFifteenTopKey: unknown;
	offDribFifteenBreakRight: unknown;
	offDribCollegeBreakLeft: unknown;
	offDribCollegeTopKey: unknown;
	offDribCollegeBreakRight: unknown;
	onMoveFifteen: unknown;
	onMoveCollege: unknown;
}

export interface DraftCombineStatsResponse {
	draftCombineStats: DraftCombineStatsRow[];
}
