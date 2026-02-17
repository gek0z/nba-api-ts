import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CumeStatsTeamParams,
	CumeStatsTeamResponse,
} from "../types/cume-stats-team.js";

const RESULT_SET_MAP: Record<string, string> = {
	GameByGameStats: "gameByGameStats",
	TotalTeamStats: "totalTeamStats",
};

export async function cumeStatsTeam(
	client: FetchClient,
	params: CumeStatsTeamParams,
): Promise<CumeStatsTeamResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		GameIDs: params.gameIDs,
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/cumestatsteam",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CumeStatsTeamResponse;
}
