import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	HomePageLeadersParams,
	HomePageLeadersResponse,
} from "../types/home-page-leaders.js";

const RESULT_SET_MAP: Record<string, string> = {
	HomePageLeaders: "homePageLeaders",
	LeagueAverage: "leagueAverage",
	LeagueMax: "leagueMax",
};

export async function homePageLeaders(
	client: FetchClient,
	params: HomePageLeadersParams,
): Promise<HomePageLeadersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		GameScope: params.gameScope,
		LeagueID: params.leagueID,
		PlayerOrTeam: params.playerOrTeam,
		PlayerScope: params.playerScope,
		Season: params.season,
		SeasonType: params.seasonType,
		StatCategory: params.statCategory,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/homepageleaders",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as HomePageLeadersResponse;
}
