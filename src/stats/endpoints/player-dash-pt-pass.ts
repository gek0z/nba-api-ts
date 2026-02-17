import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	PlayerDashPtPassParams,
	PlayerDashPtPassResponse,
} from "../types/player-dash-pt-pass.js";

const RESULT_SET_MAP: Record<string, string> = {
	PassesMade: "passesMade",
	PassesReceived: "passesReceived",
};

export async function playerDashPtPass(
	client: FetchClient,
	params: PlayerDashPtPassParams,
): Promise<PlayerDashPtPassResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		TeamID: params.teamID,
		PlayerID: params.playerID,
		LastNGames: params.lastNGames,
		LeagueID: params.leagueID,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PerMode: params.perMode,
		Season: params.season,
		SeasonType: params.seasonType,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Location: params.location,
		Outcome: params.outcome,
		SeasonSegment: params.seasonSegment,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/playerdashptpass",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as PlayerDashPtPassResponse;
}
