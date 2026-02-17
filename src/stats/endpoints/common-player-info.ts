import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CommonPlayerInfoParams,
	CommonPlayerInfoResponse,
} from "../types/common-player-info.js";

const RESULT_SET_MAP: Record<string, string> = {
	AvailableSeasons: "availableSeasons",
	CommonPlayerInfo: "commonPlayerInfo",
	PlayerHeadlineStats: "playerHeadlineStats",
};

export async function commonPlayerInfo(
	client: FetchClient,
	params: CommonPlayerInfoParams,
): Promise<CommonPlayerInfoResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PlayerID: params.playerID,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/commonplayerinfo",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CommonPlayerInfoResponse;
}
