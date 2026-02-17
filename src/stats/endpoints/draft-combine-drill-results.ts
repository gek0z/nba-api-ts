import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DraftCombineDrillResultsParams,
	DraftCombineDrillResultsResponse,
} from "../types/draft-combine-drill-results.js";

const RESULT_SET_MAP: Record<string, string> = {
	Results: "results",
};

export async function draftCombineDrillResults(
	client: FetchClient,
	params: DraftCombineDrillResultsParams,
): Promise<DraftCombineDrillResultsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		SeasonYear: params.seasonYear,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/draftcombinedrillresults",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DraftCombineDrillResultsResponse;
}
