import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerNextNGamesParams,
	PlayerNextNGamesResponse,
} from "../types/player-next-n-games.js";

const RESULT_SET_MAP: Record<string, string> = {
	NextNGames: "nextNGames",
};

export async function playerNextNGames(
	client: FetchClient,
	params: PlayerNextNGamesParams,
): Promise<PlayerNextNGamesResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PlayerID: params.playerID,
		NumberOfGames: params.numberOfGames,
		Season: params.season,
		SeasonType: params.seasonType,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playernextngames",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerNextNGamesResponse;
}
