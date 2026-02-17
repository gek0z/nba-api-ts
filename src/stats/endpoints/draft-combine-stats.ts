import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DraftCombineStatsParams,
	DraftCombineStatsResponse,
} from "../types/draft-combine-stats.js";

const RESULT_SET_MAP: Record<string, string> = {
	DraftCombineStats: "draftCombineStats",
};

export async function draftCombineStats(
	client: FetchClient,
	params: DraftCombineStatsParams,
): Promise<DraftCombineStatsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		SeasonYear: params.seasonYear,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/draftcombinestats",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DraftCombineStatsResponse;
}
