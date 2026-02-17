import type { FetchClient } from "../../http/fetch-client.js";
import type { BoxScoreResponse } from "../types/boxscore.js";

export async function boxscore(
	client: FetchClient,
	gameId: string,
): Promise<BoxScoreResponse> {
	return client.get<BoxScoreResponse>(
		`/static/json/liveData/boxscore/boxscore_${gameId}.json`,
	);
}
