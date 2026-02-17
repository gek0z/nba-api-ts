import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	FranchiseLeadersParams,
	FranchiseLeadersResponse,
} from "../types/franchise-leaders.js";

const RESULT_SET_MAP: Record<string, string> = {
	FranchiseLeaders: "franchiseLeaders",
};

export async function franchiseLeaders(
	client: FetchClient,
	params: FranchiseLeadersParams,
): Promise<FranchiseLeadersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/franchiseleaders",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as FranchiseLeadersResponse;
}
