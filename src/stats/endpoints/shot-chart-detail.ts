import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	ShotChartDetailParams,
	ShotChartDetailResponse,
} from "../types/shot-chart-detail.js";

const RESULT_SET_MAP: Record<string, string> = {
	LeagueAverages: "leagueAverages",
	Shot_Chart_Detail: "shot_Chart_Detail",
};

export async function shotChartDetail(
	client: FetchClient,
	params: ShotChartDetailParams,
): Promise<ShotChartDetailResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		PlayerID: params.playerID,
		ContextMeasure: params.contextMeasure,
		LastNGames: params.lastNGames,
		LeagueID: params.leagueID,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Period: params.period,
		SeasonType: params.seasonType,
		AheadBehind: params.aheadBehind,
		ClutchTime: params.clutchTime,
		ContextFilter: params.contextFilter,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		GameID: params.gameID,
		GameSegment: params.gameSegment,
		Location: params.location,
		Outcome: params.outcome,
		PlayerPosition: params.playerPosition,
		PointDiff: params.pointDiff,
		Position: params.position,
		RangeType: params.rangeType,
		RookieYear: params.rookieYear,
		Season: params.season,
		SeasonSegment: params.seasonSegment,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/shotchartdetail",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as ShotChartDetailResponse;
}
