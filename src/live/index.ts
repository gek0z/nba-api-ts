import { FetchClient, type FetchClientOptions } from "../http/fetch-client.js";
import { boxscore } from "./endpoints/boxscore.js";
import { odds } from "./endpoints/odds.js";
import { playByPlay } from "./endpoints/play-by-play.js";
import { scoreboard } from "./endpoints/scoreboard.js";
import type { BoxScoreResponse } from "./types/boxscore.js";
import type { OddsResponse } from "./types/odds.js";
import type { PlayByPlayResponse } from "./types/play-by-play.js";
import type { ScoreboardResponse } from "./types/scoreboard.js";

const CDN_BASE_URL = "https://cdn.nba.com";

export class LiveClient {
	private readonly client: FetchClient;

	constructor(options?: FetchClientOptions) {
		this.client = new FetchClient(CDN_BASE_URL, {
			rateLimit: 0,
			...options,
		});
	}

	/** Get today's scoreboard with all live game data. */
	scoreboard(): Promise<ScoreboardResponse> {
		return scoreboard(this.client);
	}

	/** Get live box score for a specific game. */
	boxscore(gameId: string): Promise<BoxScoreResponse> {
		return boxscore(this.client, gameId);
	}

	/** Get live play-by-play data for a specific game. */
	playByPlay(gameId: string): Promise<PlayByPlayResponse> {
		return playByPlay(this.client, gameId);
	}

	/** Get betting odds for today's games. */
	odds(): Promise<OddsResponse> {
		return odds(this.client);
	}
}

export type {
	BoxScoreArena,
	BoxScoreGame,
	BoxScoreOfficial,
	BoxScorePlayer,
	BoxScorePlayerStats,
	BoxScoreResponse,
	BoxScoreTeam,
	BoxScoreTeamStats,
} from "./types/boxscore.js";
export type {
	OddsBook,
	OddsGame,
	OddsMarket,
	OddsOutcome,
	OddsResponse,
} from "./types/odds.js";
export type {
	PlayByPlayAction,
	PlayByPlayResponse,
} from "./types/play-by-play.js";
export type {
	GameLeader,
	ScoreboardGame,
	ScoreboardResponse,
	ScoreboardTeam,
} from "./types/scoreboard.js";
