import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerDashboardByClutchParams,
	PlayerDashboardByClutchResponse,
} from "../types/player-dashboard-by-clutch.js";

const RESULT_SET_MAP: Record<string, string> = {
	Last10Sec3Point2PlayerDashboard: "last10Sec3Point2PlayerDashboard",
	Last10Sec3PointPlayerDashboard: "last10Sec3PointPlayerDashboard",
	Last1Min5PointPlayerDashboard: "last1Min5PointPlayerDashboard",
	Last1MinPlusMinus5PointPlayerDashboard:
		"last1MinPlusMinus5PointPlayerDashboard",
	Last30Sec3Point2PlayerDashboard: "last30Sec3Point2PlayerDashboard",
	Last30Sec3PointPlayerDashboard: "last30Sec3PointPlayerDashboard",
	Last3Min5PointPlayerDashboard: "last3Min5PointPlayerDashboard",
	Last3MinPlusMinus5PointPlayerDashboard:
		"last3MinPlusMinus5PointPlayerDashboard",
	Last5Min5PointPlayerDashboard: "last5Min5PointPlayerDashboard",
	Last5MinPlusMinus5PointPlayerDashboard:
		"last5MinPlusMinus5PointPlayerDashboard",
	OverallPlayerDashboard: "overallPlayerDashboard",
};

export async function playerDashboardByClutch(
	client: FetchClient,
	params: PlayerDashboardByClutchParams,
): Promise<PlayerDashboardByClutchResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PlayerID: params.playerID,
		LastNGames: params.lastNGames,
		MeasureType: params.measureType,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PaceAdjust: params.paceAdjust,
		PerMode: params.perMode,
		Period: params.period,
		PlusMinus: params.plusMinus,
		Rank: params.rank,
		Season: params.season,
		SeasonType: params.seasonType,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		GameSegment: params.gameSegment,
		LeagueID: params.leagueID,
		Location: params.location,
		Outcome: params.outcome,
		PORound: params.pORound,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playerdashboardbyclutch",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerDashboardByClutchResponse;
}
