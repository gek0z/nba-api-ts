import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	BoxScorePlayerTrackV3Params,
	BoxScorePlayerTrackV3Response,
} from "../types/box-score-player-track-v3.js";

export async function boxScorePlayerTrackV3(
	client: FetchClient,
	_params: BoxScorePlayerTrackV3Params,
): Promise<BoxScorePlayerTrackV3Response> {
	const apiParams: Record<string, string | number | undefined> = {};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/boxscoreplayertrackv3",
		apiParams,
	);
	return parseV3Response<BoxScorePlayerTrackV3Response>(raw);
}
