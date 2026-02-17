import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CommonAllPlayersParams,
	CommonAllPlayersResponse,
} from "../types/common-all-players.js";

const RESULT_SET_MAP: Record<string, string> = {
	CommonAllPlayers: "commonAllPlayers",
};

export async function commonAllPlayers(
	client: FetchClient,
	params: CommonAllPlayersParams,
): Promise<CommonAllPlayersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		IsOnlyCurrentSeason: params.isOnlyCurrentSeason,
		LeagueID: params.leagueID,
		Season: params.season,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/commonallplayers",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CommonAllPlayersResponse;
}
