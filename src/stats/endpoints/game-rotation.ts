import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	GameRotationParams,
	GameRotationResponse,
} from "../types/game-rotation.js";

const RESULT_SET_MAP: Record<string, string> = {
	AwayTeam: "awayTeam",
	HomeTeam: "homeTeam",
};

export async function gameRotation(
	client: FetchClient,
	params: GameRotationParams,
): Promise<GameRotationResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		GameID: params.gameID,
		LeagueID: params.leagueID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/gamerotation",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as GameRotationResponse;
}
