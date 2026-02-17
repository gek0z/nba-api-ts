import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	FranchisePlayersParams,
	FranchisePlayersResponse,
} from "../types/franchise-players.js";

const RESULT_SET_MAP: Record<string, string> = {
	FranchisePlayers: "franchisePlayers",
};

export async function franchisePlayers(
	client: FetchClient,
	params: FranchisePlayersParams,
): Promise<FranchisePlayersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		SeasonType: params.seasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/franchiseplayers",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as FranchisePlayersResponse;
}
