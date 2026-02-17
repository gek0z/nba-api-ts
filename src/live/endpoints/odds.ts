import type { FetchClient } from "../../http/fetch-client.js";
import type { OddsResponse } from "../types/odds.js";

const ENDPOINT = "/static/json/liveData/odds/odds_todaysGames.json";

export async function odds(client: FetchClient): Promise<OddsResponse> {
	return client.get<OddsResponse>(ENDPOINT);
}
