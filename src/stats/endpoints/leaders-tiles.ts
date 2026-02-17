import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeadersTilesParams,
	LeadersTilesResponse,
} from "../types/leaders-tiles.js";

const RESULT_SET_MAP: Record<string, string> = {
	AllTimeSeasonHigh: "allTimeSeasonHigh",
	LastSeasonHigh: "lastSeasonHigh",
	LeadersTiles: "leadersTiles",
	LowSeasonHigh: "lowSeasonHigh",
};

export async function leadersTiles(
	client: FetchClient,
	params: LeadersTilesParams,
): Promise<LeadersTilesResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		GameScope: params.gameScope,
		LeagueID: params.leagueID,
		PlayerOrTeam: params.playerOrTeam,
		PlayerScope: params.playerScope,
		Season: params.season,
		SeasonType: params.seasonType,
		Stat: params.stat,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaderstiles",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeadersTilesResponse;
}
