import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScoreAdvancedV3Params,
	BoxScoreAdvancedV3Response,
} from "../types/box-score-advanced-v3.js";

export async function boxScoreAdvancedV3(
	client: FetchClient,
	params: BoxScoreAdvancedV3Params,
): Promise<BoxScoreAdvancedV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscoreadvancedv3",
		apiParams,
	);
	return parseV3Response<BoxScoreAdvancedV3Response>(raw);
}
