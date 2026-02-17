import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	LeagueDashPlayerClutchParams,
	LeagueDashPlayerClutchResponse,
} from "../types/league-dash-player-clutch.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueDashPlayerClutch: "leagueDashPlayerClutch",
};

export async function leagueDashPlayerClutch(
	client: FetchClient,
	params: LeagueDashPlayerClutchParams,
): Promise<LeagueDashPlayerClutchResponse> {
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
		Weight: params.weight,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/leaguedashplayerclutch",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as LeagueDashPlayerClutchResponse;
}
