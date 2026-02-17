import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayByPlayV2Params,
	PlayByPlayV2Response,
} from "../types/play-by-play-v2.js";

const RESULT_SET_MAP: Record<string, string> = {
	AvailableVideo: "availableVideo",
	PlayByPlay: "playByPlay",
};

export async function playByPlayV2(
	client: FetchClient,
	params: PlayByPlayV2Params,
): Promise<PlayByPlayV2Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		StartPeriod: params.startPeriod,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playbyplayv2",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayByPlayV2Response;
}
