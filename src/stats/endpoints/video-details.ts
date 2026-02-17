import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	VideoDetailsParams,
	VideoDetailsResponse,
} from "../types/video-details.js";

const RESULT_SET_MAP: Record<string, string> = {};

export async function videoDetails(
	client: FetchClient,
	params: VideoDetailsParams,
): Promise<VideoDetailsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		PlayerID: params.playerID,
		ContextMeasure: params.contextMeasure,
		LastNGames: params.lastNGames,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		Period: params.period,
		Season: params.season,
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
		LeagueID: params.leagueID,
		Location: params.location,
		Outcome: params.outcome,
		PointDiff: params.pointDiff,
		Position: params.position,
		RangeType: params.rangeType,
		RookieYear: params.rookieYear,
		SeasonSegment: params.seasonSegment,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/videodetails",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as VideoDetailsResponse;
}
