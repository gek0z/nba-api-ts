export interface CommonTeamRosterParams {
	teamID: number;
	season?: string;
	leagueID?: string;
}

export interface CoachesRow {
	teamId: number;
	season: string;
	coachId: number;
	firstName: string;
	lastName: string;
	coachName: string;
	isAssistant: unknown;
	coachType: string;
	sortSequence: unknown;
}

export interface CommonTeamRosterRow {
	teamid: number;
	season: string;
	leagueid: number;
	player: unknown;
	playerSlug: string;
	num: unknown;
	position: string;
	height: unknown;
	weight: unknown;
	birthDate: string;
	age: number;
	exp: unknown;
	school: unknown;
	playerId: number;
}

export interface CommonTeamRosterResponse {
	coaches: CoachesRow[];
	commonTeamRoster: CommonTeamRosterRow[];
}
