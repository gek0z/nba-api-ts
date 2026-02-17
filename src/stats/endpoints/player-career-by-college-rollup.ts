import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerCareerByCollegeRollupParams,
	PlayerCareerByCollegeRollupResponse,
} from "../types/player-career-by-college-rollup.js";

const RESULT_SET_MAP: Record<string, string> = {
	East: "east",
	Midwest: "midwest",
	South: "south",
	West: "west",
};

export async function playerCareerByCollegeRollup(
	client: FetchClient,
	params: PlayerCareerByCollegeRollupParams,
): Promise<PlayerCareerByCollegeRollupResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		SeasonType: params.seasonType,
		Season: params.season,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playercareerbycollegerollup",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerCareerByCollegeRollupResponse;
}
