export interface DefenseHubParams {
	gameScope?: string;
	leagueID?: string;
	playerOrTeam?: string;
	playerScope?: string;
	season?: string;
	seasonType?: string;
}

export interface DefenseHubStat1Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	dreb: number;
}

export interface DefenseHubStat2Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	stl: number;
}

export interface DefenseHubStat3Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	blk: number;
}

export interface DefenseHubStat4Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	tmDefRating: unknown;
}

export interface DefenseHubStat5Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	overallPm: unknown;
}

export interface DefenseHubStat6Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	threepDfgpct: unknown;
}

export interface DefenseHubStat7Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	twopDfgpct: unknown;
}

export interface DefenseHubStat8Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	fifeteenfDfgpct: unknown;
}

export interface DefenseHubStat9Row {
	rank: unknown;
	teamId: number;
	teamAbbreviation: string;
	teamName: string;
	defRimPct: number | null;
}

export interface DefenseHubResponse {
	defenseHubStat1: DefenseHubStat1Row[];
	defenseHubStat2: DefenseHubStat2Row[];
	defenseHubStat3: DefenseHubStat3Row[];
	defenseHubStat4: DefenseHubStat4Row[];
	defenseHubStat5: DefenseHubStat5Row[];
	defenseHubStat6: DefenseHubStat6Row[];
	defenseHubStat7: DefenseHubStat7Row[];
	defenseHubStat8: DefenseHubStat8Row[];
	defenseHubStat9: DefenseHubStat9Row[];
}
