import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueDashTeamClutchParams,
	LeagueDashTeamClutchResponse,
} from "../types/league-dash-team-clutch.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueDashTeamClutch: "leagueDashTeamClutch",
};

export async function leagueDashTeamClutch(
	client: FetchClient,
	params: LeagueDashTeamClutchParams,
): Promise<LeagueDashTeamClutchResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		AheadBehind: params.aheadBehind,
		ClutchTime: params.clutchTime,
		LastNGames: params.lastNGames,
		MeasureType: params.measureType,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PaceAdjust: params.paceAdjust,
		PerMode: params.perMode,
		Period: params.period,
		PlusMinus: params.plusMinus,
		PointDiff: params.pointDiff,
		Rank: params.rank,
		Season: params.season,
		SeasonType: params.seasonType,
		Conference: params.conference,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Division: params.division,
		GameScope: params.gameScope,
		GameSegment: params.gameSegment,
		LeagueID: params.leagueID,
		Location: params.location,
		Outcome: params.outcome,
		PORound: params.pORound,
		PlayerExperience: params.playerExperience,
		PlayerPosition: params.playerPosition,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		StarterBench: params.starterBench,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguedashteamclutch",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueDashTeamClutchResponse;
}
