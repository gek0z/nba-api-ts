import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamGameLogParams,
	TeamGameLogResponse,
} from "../types/team-game-log.js";

const RESULT_SET_MAP: Record<string, string> = {
	TeamGameLog: "teamGameLog",
};

export async function teamGameLog(
	client: FetchClient,
	params: TeamGameLogParams,
): Promise<TeamGameLogResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		Season: params.season,
		SeasonType: params.seasonType,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamgamelog",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamGameLogResponse;
}
