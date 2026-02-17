import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamGameLogsParams,
	TeamGameLogsResponse,
} from "../types/team-game-logs.js";

const RESULT_SET_MAP: Record<string, string> = {
	TeamGameLogs: "teamGameLogs",
};

export async function teamGameLogs(
	client: FetchClient,
	params: TeamGameLogsParams,
): Promise<TeamGameLogsResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		GameSegment: params.gameSegment,
		LastNGames: params.lastNGames,
		LeagueID: params.leagueID,
		Location: params.location,
		MeasureType: params.measureType,
		Month: params.month,
		OppTeamID: params.oppTeamID,
		Outcome: params.outcome,
		PORound: params.pORound,
		PerMode: params.perMode,
		Period: params.period,
		PlayerID: params.playerID,
		Season: params.season,
		SeasonSegment: params.seasonSegment,
		SeasonType: params.seasonType,
		ShotClockRange: params.shotClockRange,
		TeamID: params.teamID,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamgamelogs",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamGameLogsResponse;
}
