import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DraftCombinePlayerAnthroParams,
	DraftCombinePlayerAnthroResponse,
} from "../types/draft-combine-player-anthro.js";

const RESULT_SET_MAP: Record<string, string> = {
	Results: "results",
};

export async function draftCombinePlayerAnthro(
	client: FetchClient,
	params: DraftCombinePlayerAnthroParams,
): Promise<DraftCombinePlayerAnthroResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		SeasonYear: params.seasonYear,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/draftcombineplayeranthro",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DraftCombinePlayerAnthroResponse;
}
