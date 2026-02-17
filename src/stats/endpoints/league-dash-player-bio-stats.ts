import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueDashPlayerBioStatsParams,
	LeagueDashPlayerBioStatsResponse,
} from "../types/league-dash-player-bio-stats.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueDashPlayerBioStats: "leagueDashPlayerBioStats",
};

export async function leagueDashPlayerBioStats(
	client: FetchClient,
	params: LeagueDashPlayerBioStatsParams,
): Promise<LeagueDashPlayerBioStatsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		LeagueID: params.leagueID,
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
		GameScope: params.gameScope,
		GameSegment: params.gameSegment,
		Height: params.height,
		LastNGames: params.lastNGames,
		Location: params.location,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Outcome: params.outcome,
		PORound: params.pORound,
		Period: params.period,
		PlayerExperience: params.playerExperience,
		PlayerPosition: params.playerPosition,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		StarterBench: params.starterBench,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
		Weight: params.weight,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguedashplayerbiostats",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueDashPlayerBioStatsResponse;
}
