import type { FetchClient } from "../../http/fetch-client.js";
import { parseStatsResponse } from "../../response/parser.js";
import type { RawNBAStatsResponse } from "../../response/types.js";
import type {
	TeamAndPlayersVsPlayersParams,
	TeamAndPlayersVsPlayersResponse,
} from "../types/team-and-players-vs-players.js";

const RESULT_SET_MAP: Record<string, string> = {
	PlayersVsPlayers: "playersVsPlayers",
	TeamPlayersVsPlayersOff: "teamPlayersVsPlayersOff",
	TeamPlayersVsPlayersOn: "teamPlayersVsPlayersOn",
	TeamVsPlayers: "teamVsPlayers",
	TeamVsPlayersOff: "teamVsPlayersOff",
};

export async function teamAndPlayersVsPlayers(
	client: FetchClient,
	params: TeamAndPlayersVsPlayersParams,
): Promise<TeamAndPlayersVsPlayersResponse> {
	const apiParams: Record<string, string | number | undefined> = {
		VsTeamID: params.vsTeamID,
		VsPlayerID5: params.vsPlayerID5,
		VsPlayerID4: params.vsPlayerID4,
		VsPlayerID3: params.vsPlayerID3,
		VsPlayerID2: params.vsPlayerID2,
		VsPlayerID1: params.vsPlayerID1,
		TeamID: params.teamID,
		PlayerID5: params.playerID5,
		PlayerID4: params.playerID4,
		PlayerID3: params.playerID3,
		PlayerID2: params.playerID2,
		PlayerID1: params.playerID1,
		LastNGames: params.lastNGames,
		MeasureType: params.measureType,
		Month: params.month,
		OpponentTeamID: params.opponentTeamID,
		PaceAdjust: params.paceAdjust,
		PerMode: params.perMode,
		Period: params.period,
		PlusMinus: params.plusMinus,
		Rank: params.rank,
		Season: params.season,
		SeasonType: params.seasonType,
		Conference: params.conference,
		DateFrom: params.dateFrom,
		DateTo: params.dateTo,
		Division: params.division,
		GameSegment: params.gameSegment,
		LeagueID: params.leagueID,
		Location: params.location,
		Outcome: params.outcome,
		SeasonSegment: params.seasonSegment,
		ShotClockRange: params.shotClockRange,
		VsConference: params.vsConference,
		VsDivision: params.vsDivision,
	};

	const raw = await client.get<RawNBAStatsResponse>(
		"/stats/teamandplayersvsplayers",
		apiParams,
	);
	return parseStatsResponse(
		raw,
		RESULT_SET_MAP,
	) as unknown as TeamAndPlayersVsPlayersResponse;
}
