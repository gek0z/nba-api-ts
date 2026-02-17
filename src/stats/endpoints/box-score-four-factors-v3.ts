import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScoreFourFactorsV3Params,
	BoxScoreFourFactorsV3Response,
} from "../types/box-score-four-factors-v3.js";

export async function boxScoreFourFactorsV3(
	client: FetchClient,
	params: BoxScoreFourFactorsV3Params,
): Promise<BoxScoreFourFactorsV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscorefourfactorsv3",
		apiParams,
	);
	return parseV3Response<BoxScoreFourFactorsV3Response>(raw);
}
