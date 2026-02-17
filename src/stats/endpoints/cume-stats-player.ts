import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CumeStatsPlayerParams,
	CumeStatsPlayerResponse,
} from "../types/cume-stats-player.js";

const RESULT_SET_MAP: Record<string, string> = {
	GameByGameStats: "gameByGameStats",
	TotalPlayerStats: "totalPlayerStats",
};

export async function cumeStatsPlayer(
	client: FetchClient,
	params: CumeStatsPlayerParams,
): Promise<CumeStatsPlayerResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PlayerID: params.playerID,
		GameIDs: params.gameIDs,
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/cumestatsplayer",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CumeStatsPlayerResponse;
}
