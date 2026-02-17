import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	BoxScoreUsageV2Params,
	BoxScoreUsageV2Response,
} from "../types/box-score-usage-v2.js";

const RESULT_SET_MAP: Record<string, string> = {
	sqlPlayersUsage: "sqlPlayersUsage",
	sqlTeamsUsage: "sqlTeamsUsage",
};

export async function boxScoreUsageV2(
	client: FetchClient,
	params: BoxScoreUsageV2Params,
): Promise<BoxScoreUsageV2Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/boxscoreusagev2",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as BoxScoreUsageV2Response;
}
