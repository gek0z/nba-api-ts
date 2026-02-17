import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	AssistLeadersParams,
	AssistLeadersResponse,
} from "../types/assist-leaders.js";

const RESULT_SET_MAP: Record<string, string> = {
	AssistLeaders: "assistLeaders",
};

export async function assistLeaders(
	client: FetchClient,
	params: AssistLeadersParams,
): Promise<AssistLeadersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		PlayerOrTeam: params.playerOrTeam,
		Season: params.season,
		SeasonType: params.seasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/assistleaders",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as AssistLeadersResponse;
}
