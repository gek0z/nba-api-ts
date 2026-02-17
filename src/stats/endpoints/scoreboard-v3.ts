import type { FetchClient } from "../../http/fetch-client.js";
import { parseV3Response } from "../../response/parser.js";
import type {
	ScoreboardV3Params,
	ScoreboardV3Response,
} from "../types/scoreboard-v3.js";

export async function scoreboardV3(
	client: FetchClient,
	params: ScoreboardV3Params,
): Promise<ScoreboardV3Response> {
	const apiParams: Record<string, string | number | undefined> = {
		GameDate: params.gameDate,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<Record<string, unknown>>(
		"/stats/scoreboardv3",
		apiParams,
	);
	return parseV3Response<ScoreboardV3Response>(raw);
}
