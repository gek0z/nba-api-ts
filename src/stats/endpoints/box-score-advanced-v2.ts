import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	BoxScoreAdvancedV2Params,
	BoxScoreAdvancedV2Response,
} from "../types/box-score-advanced-v2.js";

const RESULT_SET_MAP: Record<string, string> = {
	PlayerStats: "playerStats",
	TeamStats: "teamStats",
};

export async function boxScoreAdvancedV2(
	client: FetchClient,
	params: BoxScoreAdvancedV2Params,
): Promise<BoxScoreAdvancedV2Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/boxscoreadvancedv2",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as BoxScoreAdvancedV2Response;
}
