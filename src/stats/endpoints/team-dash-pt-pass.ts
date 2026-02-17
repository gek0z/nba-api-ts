import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamDashPtPassParams,
	TeamDashPtPassResponse,
} from "../types/team-dash-pt-pass.js";

const RESULT_SET_MAP: Record<string, string> = {
	PassesMade: "passesMade",
	PassesReceived: "passesReceived",
};

export async function teamDashPtPass(
	client: FetchClient,
	params: TeamDashPtPassParams,
): Promise<TeamDashPtPassResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		LastNGames: params.lastNGames,
		LeagueID: params.leagueID,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PerMode: params.perMode,
		Season: params.season,
		SeasonType: params.seasonType,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Location: params.location,
		Outcome: params.outcome,
		SeasonSegment: params.seasonSegment,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamdashptpass",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamDashPtPassResponse;
}
