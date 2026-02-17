import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueLeadersParams,
	LeagueLeadersResponse,
} from "../types/league-leaders.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueLeaders: "leagueLeaders",
};

export async function leagueLeaders(
	client: FetchClient,
	params: LeagueLeadersParams,
): Promise<LeagueLeadersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		Scope: params.scope,
		Season: params.season,
		SeasonType: params.seasonType,
		StatCategory: params.statCategory,
		ActiveFlag: params.activeFlag,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leagueleaders",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueLeadersResponse;
}
