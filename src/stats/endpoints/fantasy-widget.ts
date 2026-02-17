import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	FantasyWidgetParams,
	FantasyWidgetResponse,
} from "../types/fantasy-widget.js";

const RESULT_SET_MAP: Record<string, string> = {
	FantasyWidgetResult: "fantasyWidgetResult",
};

export async function fantasyWidget(
	client: FetchClient,
	params: FantasyWidgetParams,
): Promise<FantasyWidgetResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		ActivePlayers: params.activePlayers,
		LastNGames: params.lastNGames,
		LeagueID: params.leagueID,
		Season: params.season,
		SeasonType: params.seasonType,
		TodaysOpponent: params.todaysOpponent,
		TodaysPlayers: params.todaysPlayers,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Location: params.location,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PORound: params.pORound,
		PlayerID: params.playerID,
		Position: params.position,
		SeasonSegment: params.seasonSegment,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/fantasywidget",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as FantasyWidgetResponse;
}
