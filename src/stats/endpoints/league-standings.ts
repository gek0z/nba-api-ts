import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueStandingsParams,
	LeagueStandingsResponse,
} from "../types/league-standings.js";

const RESULT_SET_MAP: Record<string, string> = {
	Standings: "standings",
};

export async function leagueStandings(
	client: FetchClient,
	params: LeagueStandingsParams,
): Promise<LeagueStandingsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
		SeasonYear: params.seasonYear,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguestandings",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueStandingsResponse;
}
