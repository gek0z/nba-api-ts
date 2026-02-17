import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DraftCombineNonStationaryShootingParams,
	DraftCombineNonStationaryShootingResponse,
} from "../types/draft-combine-non-stationary-shooting.js";

const RESULT_SET_MAP: Record<string, string> = {
	Results: "results",
};

export async function draftCombineNonStationaryShooting(
	client: FetchClient,
	params: DraftCombineNonStationaryShootingParams,
): Promise<DraftCombineNonStationaryShootingResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		SeasonYear: params.seasonYear,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/draftcombinenonstationaryshooting",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DraftCombineNonStationaryShootingResponse;
}
