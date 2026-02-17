import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayByPlayParams,
	PlayByPlayResponse,
} from "../types/play-by-play.js";

const RESULT_SET_MAP: Record<string, string> = {
	AvailableVideo: "availableVideo",
	PlayByPlay: "playByPlay",
};

export async function playByPlay(
	client: FetchClient,
	params: PlayByPlayParams,
): Promise<PlayByPlayResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		StartPeriod: params.startPeriod,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playbyplay",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayByPlayResponse;
}
