import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueSeasonMatchupsParams,
	LeagueSeasonMatchupsResponse,
} from "../types/league-season-matchups.js";

const RESULT_SET_MAP: Record<string, string> = {
	SeasonMatchups: "seasonMatchups",
};

export async function leagueSeasonMatchups(
	client: FetchClient,
	params: LeagueSeasonMatchupsParams,
): Promise<LeagueSeasonMatchupsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
		PerMode: params.perMode,
		Season: params.season,
		SeasonType: params.seasonType,
		DefPlayerID: params.defPlayerID,
		DefTeamID: params.defTeamID,
		OffPlayerID: params.offPlayerID,
		OffTeamID: params.offTeamID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leagueseasonmatchups",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueSeasonMatchupsResponse;
}
