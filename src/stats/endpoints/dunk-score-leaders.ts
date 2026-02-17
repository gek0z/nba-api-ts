import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	DunkScoreLeadersParams,
	DunkScoreLeadersResponse,
} from "../types/dunk-score-leaders.js";

const RESULT_SET_MAP: Record<string, string> = {};

export async function dunkScoreLeaders(
	client: FetchClient,
	params: DunkScoreLeadersParams,
): Promise<DunkScoreLeadersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
		PlayerID: params.playerID,
		TeamID: params.teamID,
		GameID: params.gameID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/dunkscoreleaders",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as DunkScoreLeadersResponse;
}
