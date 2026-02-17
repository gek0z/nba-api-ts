import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueHustleStatsTeamParams,
	LeagueHustleStatsTeamResponse,
} from "../types/league-hustle-stats-team.js";

const RESULT_SET_MAP: Record<string, string> = {
	HustleStatsTeam: "hustleStatsTeam",
};

export async function leagueHustleStatsTeam(
	client: FetchClient,
	params: LeagueHustleStatsTeamParams,
): Promise<LeagueHustleStatsTeamResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PerMode: params.perMode,
		Season: params.season,
		SeasonType: params.seasonType,
		College: params.college,
		Conference: params.conference,
		Country: params.country,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Division: params.division,
		DraftPick: params.draftPick,
		DraftYear: params.draftYear,
		Height: params.height,
		LeagueID: params.leagueID,
		Location: params.location,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Outcome: params.outcome,
		PORound: params.pORound,
		PlayerExperience: params.playerExperience,
		PlayerPosition: params.playerPosition,
		SeasonSegment: params.seasonSegment,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
		Weight: params.weight,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguehustlestatsteam",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueHustleStatsTeamResponse;
}
