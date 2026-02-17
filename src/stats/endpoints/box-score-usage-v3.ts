import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScoreUsageV3Params,
	BoxScoreUsageV3Response,
} from "../types/box-score-usage-v3.js";

export async function boxScoreUsageV3(
	client: FetchClient,
	params: BoxScoreUsageV3Params,
): Promise<BoxScoreUsageV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscoreusagev3",
		apiParams,
	);
	return parseV3Response<BoxScoreUsageV3Response>(raw);
}
