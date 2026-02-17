import type { FetchClient } from "../../http/fetch-client.js";
import type { PlayByPlayResponse } from "../types/play-by-play.js";

export async function playByPlay(
	client: FetchClient,
	gameId: string,
): Promise<PlayByPlayResponse> {
	return client.get<PlayByPlayResponse>(
		`/static/json/liveData/playbyplay/playbyplay_${gameId}.json`,
	);
}
