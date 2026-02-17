import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	BoxScoreSummaryV2Params,
	BoxScoreSummaryV2Response,
} from "../types/box-score-summary-v2.js";

const RESULT_SET_MAP: Record<string, string> = {
	AvailableVideo: "availableVideo",
	GameInfo: "gameInfo",
	GameSummary: "gameSummary",
	InactivePlayers: "inactivePlayers",
	LastMeeting: "lastMeeting",
	LineScore: "lineScore",
	Officials: "officials",
	OtherStats: "otherStats",
	SeasonSeries: "seasonSeries",
};

export async function boxScoreSummaryV2(
	client: FetchClient,
	_params: BoxScoreSummaryV2Params,
): Promise<BoxScoreSummaryV2Response> {
	const apiParams: Record<string, string | number | undefined> = {};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/boxscoresummaryv2",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as BoxScoreSummaryV2Response;
}
