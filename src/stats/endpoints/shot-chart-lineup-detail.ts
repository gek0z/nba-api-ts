import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	ShotChartLineupDetailParams,
	ShotChartLineupDetailResponse,
} from "../types/shot-chart-lineup-detail.js";

const RESULT_SET_MAP: Record<string, string> = {
	ShotChartLineupDetail: "shotChartLineupDetail",
	ShotChartLineupLeagueAverage: "shotChartLineupLeagueAverage",
};

export async function shotChartLineupDetail(
	client: FetchClient,
	params: ShotChartLineupDetailParams,
): Promise<ShotChartLineupDetailResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		ContextMeasure: params.contextMeasure,
		GROUP_ID: params.gROUP_ID,
		LeagueID: params.leagueID,
		Period: params.period,
		Season: params.season,
		SeasonType: params.seasonType,
		ContextFilter: params.contextFilter,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		GameID: params.gameID,
		GameSegment: params.gameSegment,
		LastNGames: params.lastNGames,
		Location: params.location,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Outcome: params.outcome,
		SeasonSegment: params.seasonSegment,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/shotchartlineupdetail",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as ShotChartLineupDetailResponse;
}
