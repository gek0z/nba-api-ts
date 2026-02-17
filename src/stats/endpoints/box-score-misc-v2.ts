import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	BoxScoreMiscV2Params,
	BoxScoreMiscV2Response,
} from "../types/box-score-misc-v2.js";

const RESULT_SET_MAP: Record<string, string> = {
	sqlPlayersMisc: "sqlPlayersMisc",
	sqlTeamsMisc: "sqlTeamsMisc",
};

export async function boxScoreMiscV2(
	client: FetchClient,
	params: BoxScoreMiscV2Params,
): Promise<BoxScoreMiscV2Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		EndRange: params.endRange,
		RangeType: params.rangeType,
		StartPeriod: params.startPeriod,
		StartRange: params.startRange,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/boxscoremiscv2",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as BoxScoreMiscV2Response;
}
