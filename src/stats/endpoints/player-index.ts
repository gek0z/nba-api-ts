import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerIndexParams,
	PlayerIndexResponse,
} from "../types/player-index.js";

const RESULT_SET_MAP: Record<string, string> = {
	PlayerIndex: "playerIndex",
};

export async function playerIndex(
	client: FetchClient,
	params: PlayerIndexParams,
): Promise<PlayerIndexResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		Active: params.active,
		AllStar: params.allStar,
		College: params.college,
		Country: params.country,
		DraftPick: params.draftPick,
		DraftYear: params.draftYear,
		Height: params.height,
		PlayerPosition: params.playerPosition,
		Historical: params.historical,
		LeagueID: params.leagueID,
		Season: params.season,
		TeamID: params.teamID,
		Weight: params.weight,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playerindex",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerIndexResponse;
}
