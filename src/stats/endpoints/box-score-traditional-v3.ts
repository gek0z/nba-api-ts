import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScoreTraditionalV3Params,
	BoxScoreTraditionalV3Response,
} from "../types/box-score-traditional-v3.js";

export async function boxScoreTraditionalV3(
	client: FetchClient,
	params: BoxScoreTraditionalV3Params,
): Promise<BoxScoreTraditionalV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscoretraditionalv3",
		apiParams,
	);
	return parseV3Response<BoxScoreTraditionalV3Response>(raw);
}
