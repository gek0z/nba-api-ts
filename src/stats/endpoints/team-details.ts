import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamDetailsParams,
	TeamDetailsResponse,
} from "../types/team-details.js";

const RESULT_SET_MAP: Record<string, string> = {
	TeamAwardsChampionships: "teamAwardsChampionships",
	TeamAwardsConf: "teamAwardsConf",
	TeamAwardsDiv: "teamAwardsDiv",
	TeamBackground: "teamBackground",
	TeamHistory: "teamHistory",
	TeamHof: "teamHof",
	TeamRetired: "teamRetired",
	TeamSocialSites: "teamSocialSites",
};

export async function teamDetails(
	client: FetchClient,
	_params: TeamDetailsParams,
): Promise<TeamDetailsResponse> {
	const apiParams: Record<string, string | number | undefined> = {};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamdetails",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamDetailsResponse;
}
