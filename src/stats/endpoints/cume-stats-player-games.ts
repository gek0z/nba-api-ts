import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	CumeStatsPlayerGamesParams,
	CumeStatsPlayerGamesResponse,
} from "../types/cume-stats-player-games.js";

const RESULT_SET_MAP: Record<string, string> = {};

export async function cumeStatsPlayerGames(
	client: FetchClient,
	params: CumeStatsPlayerGamesParams,
): Promise<CumeStatsPlayerGamesResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		PlayerID: params.playerID,
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
		Location: params.location,
		Outcome: params.outcome,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
		VsTeamID: params.vsTeamID,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/cumestatsplayergames",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as CumeStatsPlayerGamesResponse;
}
