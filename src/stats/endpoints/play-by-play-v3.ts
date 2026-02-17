import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	PlayByPlayV3Params,
	PlayByPlayV3Response,
} from "../types/play-by-play-v3.js";

export async function playByPlayV3(
	client: FetchClient,
	params: PlayByPlayV3Params,
): Promise<PlayByPlayV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		EndPeriod: params.endPeriod,
		StartPeriod: params.startPeriod,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/playbyplayv3",
		apiParams,
	);
	return parseV3Response<PlayByPlayV3Response>(raw);
}
