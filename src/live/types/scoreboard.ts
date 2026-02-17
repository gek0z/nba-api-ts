export interface ScoreboardResponse {
	scoreboard: {
		gameDate: string;
		leagueId: string;
		leagueName: string;
		games: ScoreboardGame[];
	};
}

export interface ScoreboardGame {
	gameId: string;
	gameCode: string;
	gameStatus: number;
	gameStatusText: string;
	period: number;
	gameClock: string;
	gameTimeUTC: string;
	gameEt: string;
	regulationPeriods: number;
	seriesGameNumber: string;
	seriesText: string;
	homeTeam: ScoreboardTeam;
	awayTeam: ScoreboardTeam;
	gameLeaders: {
		homeLeaders: GameLeader;
		awayLeaders: GameLeader;
	};
	pbOdds: {
		team: string | null;
		odds: number;
		suspended: number;
	};
}

export interface ScoreboardTeam {
	teamId: number;
	teamName: string;
	teamCity: string;
	teamTricode: string;
	wins: number;
	losses: number;
	score: number;
	inBonus: string | null;
	timeoutsRemaining: number;
	periods: Array<{ period: number; periodType: string; score: number }>;
}

export interface GameLeader {
	personId: number;
	name: string;
	jerseyNum: string;
	position: string;
	teamTricode: string;
	playerSlug: string | null;
	points: number;
	rebounds: number;
	assists: number;
}
