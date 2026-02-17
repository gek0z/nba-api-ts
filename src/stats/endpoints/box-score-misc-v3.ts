import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScoreMiscV3Params,
	BoxScoreMiscV3Response,
} from "../types/box-score-misc-v3.js";

export async function boxScoreMiscV3(
	client: FetchClient,
	params: BoxScoreMiscV3Params,
): Promise<BoxScoreMiscV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscoremiscv3",
		apiParams,
	);
	return parseV3Response<BoxScoreMiscV3Response>(raw);
}
