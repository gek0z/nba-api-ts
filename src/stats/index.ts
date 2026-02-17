// Auto-generated StatsClient — do not edit manually
import type { FetchClient } from "../http/fetch-client.js";

import {
	allTimeLeadersGrids,
	assistLeaders,
	assistTracker,
	boxScoreAdvancedV2,
	boxScoreAdvancedV3,
	boxScoreDefensiveV2,
	boxScoreFourFactorsV2,
	boxScoreFourFactorsV3,
	boxScoreHustleV2,
	boxScoreMatchupsV3,
	boxScoreMiscV2,
	boxScoreMiscV3,
	boxScorePlayerTrackV3,
	boxScoreScoringV2,
	boxScoreScoringV3,
	boxScoreSummaryV2,
	boxScoreSummaryV3,
	boxScoreTraditionalV2,
	boxScoreTraditionalV3,
	boxScoreUsageV2,
	boxScoreUsageV3,
	commonAllPlayers,
	commonPlayerInfo,
	commonPlayoffSeries,
	commonTeamRoster,
	commonTeamYears,
	cumeStatsPlayer,
	cumeStatsPlayerGames,
	cumeStatsTeam,
	cumeStatsTeamGames,
	defenseHub,
	draftBoard,
	draftCombineDrillResults,
	draftCombineNonStationaryShooting,
	draftCombinePlayerAnthro,
	draftCombineSpotShooting,
	draftCombineStats,
	draftHistory,
	dunkScoreLeaders,
	fantasyWidget,
	franchiseHistory,
	franchiseLeaders,
	franchisePlayers,
	gameRotation,
	gLAlumBoxScoreSimilarityScore,
	homePageLeaders,
	homePageV2,
	hustleStatsBoxScore,
	infographicFanDuelPlayer,
	iSTStandings,
	leadersTiles,
	leagueDashLineups,
	leagueDashOppPtShot,
	leagueDashPlayerBioStats,
	leagueDashPlayerClutch,
	leagueDashPlayerPtShot,
	leagueDashPlayerShotLocations,
	leagueDashPlayerStats,
	leagueDashPtDefend,
	leagueDashPtStats,
	leagueDashPtTeamDefend,
	leagueDashTeamClutch,
	leagueDashTeamPtShot,
	leagueDashTeamShotLocations,
	leagueDashTeamStats,
	leagueGameFinder,
	leagueGameLog,
	leagueHustleStatsPlayer,
	leagueHustleStatsTeam,
	leagueLeaders,
	leagueLineupViz,
	leaguePlayerOnDetails,
	leagueSeasonMatchups,
	leagueStandings,
	leagueStandingsV3,
	matchupsRollup,
	playByPlay,
	playByPlayV2,
	playByPlayV3,
	playerAwards,
	playerCareerByCollege,
	playerCareerByCollegeRollup,
	playerCareerStats,
	playerCompare,
	playerDashboardByClutch,
	playerDashboardByGameSplits,
	playerDashboardByGeneralSplits,
	playerDashboardByLastNGames,
	playerDashboardByShootingSplits,
	playerDashboardByTeamPerformance,
	playerDashboardByYearOverYear,
	playerDashPtPass,
	playerDashPtReb,
	playerDashPtShotDefend,
	playerDashPtShots,
	playerEstimatedMetrics,
	playerFantasyProfileBarGraph,
	playerGameLog,
	playerGameLogs,
	playerGameStreakFinder,
	playerIndex,
	playerNextNGames,
	playerProfileV2,
	playerVsPlayer,
	playoffPicture,
	scheduleLeagueV2,
	scheduleLeagueV2Int,
	scoreboardV2,
	scoreboardV3,
	shotChartDetail,
	shotChartLeagueWide,
	shotChartLineupDetail,
	synergyPlayTypes,
	teamAndPlayersVsPlayers,
	teamDashboardByGeneralSplits,
	teamDashboardByShootingSplits,
	teamDashLineups,
	teamDashPtPass,
	teamDashPtReb,
	teamDashPtShots,
	teamDetails,
	teamEstimatedMetrics,
	teamGameLog,
	teamGameLogs,
	teamGameStreakFinder,
	teamHistoricalLeaders,
	teamInfoCommon,
	teamPlayerDashboard,
	teamPlayerOnOffDetails,
	teamPlayerOnOffSummary,
	teamVsPlayer,
	teamYearByYearStats,
	videoDetails,
	videoDetailsAsset,
	videoEvents,
	videoEventsAsset,
	videoStatus,
	winProbabilityPBP,
} from "./endpoints/index.js";

import type {
	AllTimeLeadersGridsParams,
	AllTimeLeadersGridsResponse,
	AssistLeadersParams,
	AssistLeadersResponse,
	AssistTrackerParams,
	AssistTrackerResponse,
	BoxScoreAdvancedV2Params,
	BoxScoreAdvancedV2Response,
	BoxScoreAdvancedV3Params,
	BoxScoreAdvancedV3Response,
	BoxScoreDefensiveV2Params,
	BoxScoreDefensiveV2Response,
	BoxScoreFourFactorsV2Params,
	BoxScoreFourFactorsV2Response,
	BoxScoreFourFactorsV3Params,
	BoxScoreFourFactorsV3Response,
	BoxScoreHustleV2Params,
	BoxScoreHustleV2Response,
	BoxScoreMatchupsV3Params,
	BoxScoreMatchupsV3Response,
	BoxScoreMiscV2Params,
	BoxScoreMiscV2Response,
	BoxScoreMiscV3Params,
	BoxScoreMiscV3Response,
	BoxScorePlayerTrackV3Params,
	BoxScorePlayerTrackV3Response,
	BoxScoreScoringV2Params,
	BoxScoreScoringV2Response,
	BoxScoreScoringV3Params,
	BoxScoreScoringV3Response,
	BoxScoreSummaryV2Params,
	BoxScoreSummaryV2Response,
	BoxScoreSummaryV3Params,
	BoxScoreSummaryV3Response,
	BoxScoreTraditionalV2Params,
	BoxScoreTraditionalV2Response,
	BoxScoreTraditionalV3Params,
	BoxScoreTraditionalV3Response,
	BoxScoreUsageV2Params,
	BoxScoreUsageV2Response,
	BoxScoreUsageV3Params,
	BoxScoreUsageV3Response,
	CommonAllPlayersParams,
	CommonAllPlayersResponse,
	CommonPlayerInfoParams,
	CommonPlayerInfoResponse,
	CommonPlayoffSeriesParams,
	CommonPlayoffSeriesResponse,
	CommonTeamRosterParams,
	CommonTeamRosterResponse,
	CommonTeamYearsParams,
	CommonTeamYearsResponse,
	CumeStatsPlayerGamesParams,
	CumeStatsPlayerGamesResponse,
	CumeStatsPlayerParams,
	CumeStatsPlayerResponse,
	CumeStatsTeamGamesParams,
	CumeStatsTeamGamesResponse,
	CumeStatsTeamParams,
	CumeStatsTeamResponse,
	DefenseHubParams,
	DefenseHubResponse,
	DraftBoardParams,
	DraftBoardResponse,
	DraftCombineDrillResultsParams,
	DraftCombineDrillResultsResponse,
	DraftCombineNonStationaryShootingParams,
	DraftCombineNonStationaryShootingResponse,
	DraftCombinePlayerAnthroParams,
	DraftCombinePlayerAnthroResponse,
	DraftCombineSpotShootingParams,
	DraftCombineSpotShootingResponse,
	DraftCombineStatsParams,
	DraftCombineStatsResponse,
	DraftHistoryParams,
	DraftHistoryResponse,
	DunkScoreLeadersParams,
	DunkScoreLeadersResponse,
	FantasyWidgetParams,
	FantasyWidgetResponse,
	FranchiseHistoryParams,
	FranchiseHistoryResponse,
	FranchiseLeadersParams,
	FranchiseLeadersResponse,
	FranchisePlayersParams,
	FranchisePlayersResponse,
	GameRotationParams,
	GameRotationResponse,
	GLAlumBoxScoreSimilarityScoreParams,
	GLAlumBoxScoreSimilarityScoreResponse,
	HomePageLeadersParams,
	HomePageLeadersResponse,
	HomePageV2Params,
	HomePageV2Response,
	HustleStatsBoxScoreParams,
	HustleStatsBoxScoreResponse,
	InfographicFanDuelPlayerParams,
	InfographicFanDuelPlayerResponse,
	ISTStandingsParams,
	ISTStandingsResponse,
	LeadersTilesParams,
	LeadersTilesResponse,
	LeagueDashLineupsParams,
	LeagueDashLineupsResponse,
	LeagueDashOppPtShotParams,
	LeagueDashOppPtShotResponse,
	LeagueDashPlayerBioStatsParams,
	LeagueDashPlayerBioStatsResponse,
	LeagueDashPlayerClutchParams,
	LeagueDashPlayerClutchResponse,
	LeagueDashPlayerPtShotParams,
	LeagueDashPlayerPtShotResponse,
	LeagueDashPlayerShotLocationsParams,
	LeagueDashPlayerShotLocationsResponse,
	LeagueDashPlayerStatsParams,
	LeagueDashPlayerStatsResponse,
	LeagueDashPtDefendParams,
	LeagueDashPtDefendResponse,
	LeagueDashPtStatsParams,
	LeagueDashPtStatsResponse,
	LeagueDashPtTeamDefendParams,
	LeagueDashPtTeamDefendResponse,
	LeagueDashTeamClutchParams,
	LeagueDashTeamClutchResponse,
	LeagueDashTeamPtShotParams,
	LeagueDashTeamPtShotResponse,
	LeagueDashTeamShotLocationsParams,
	LeagueDashTeamShotLocationsResponse,
	LeagueDashTeamStatsParams,
	LeagueDashTeamStatsResponse,
	LeagueGameFinderParams,
	LeagueGameFinderResponse,
	LeagueGameLogParams,
	LeagueGameLogResponse,
	LeagueHustleStatsPlayerParams,
	LeagueHustleStatsPlayerResponse,
	LeagueHustleStatsTeamParams,
	LeagueHustleStatsTeamResponse,
	LeagueLeadersParams,
	LeagueLeadersResponse,
	LeagueLineupVizParams,
	LeagueLineupVizResponse,
	LeaguePlayerOnDetailsParams,
	LeaguePlayerOnDetailsResponse,
	LeagueSeasonMatchupsParams,
	LeagueSeasonMatchupsResponse,
	LeagueStandingsParams,
	LeagueStandingsResponse,
	LeagueStandingsV3Params,
	LeagueStandingsV3Response,
	MatchupsRollupParams,
	MatchupsRollupResponse,
	PlayByPlayParams,
	PlayByPlayResponse,
	PlayByPlayV2Params,
	PlayByPlayV2Response,
	PlayByPlayV3Params,
	PlayByPlayV3Response,
	PlayerAwardsParams,
	PlayerAwardsResponse,
	PlayerCareerByCollegeParams,
	PlayerCareerByCollegeResponse,
	PlayerCareerByCollegeRollupParams,
	PlayerCareerByCollegeRollupResponse,
	PlayerCareerStatsParams,
	PlayerCareerStatsResponse,
	PlayerCompareParams,
	PlayerCompareResponse,
	PlayerDashboardByClutchParams,
	PlayerDashboardByClutchResponse,
	PlayerDashboardByGameSplitsParams,
	PlayerDashboardByGameSplitsResponse,
	PlayerDashboardByGeneralSplitsParams,
	PlayerDashboardByGeneralSplitsResponse,
	PlayerDashboardByLastNGamesParams,
	PlayerDashboardByLastNGamesResponse,
	PlayerDashboardByShootingSplitsParams,
	PlayerDashboardByShootingSplitsResponse,
	PlayerDashboardByTeamPerformanceParams,
	PlayerDashboardByTeamPerformanceResponse,
	PlayerDashboardByYearOverYearParams,
	PlayerDashboardByYearOverYearResponse,
	PlayerDashPtPassParams,
	PlayerDashPtPassResponse,
	PlayerDashPtRebParams,
	PlayerDashPtRebResponse,
	PlayerDashPtShotDefendParams,
	PlayerDashPtShotDefendResponse,
	PlayerDashPtShotsParams,
	PlayerDashPtShotsResponse,
	PlayerEstimatedMetricsParams,
	PlayerEstimatedMetricsResponse,
	PlayerFantasyProfileBarGraphParams,
	PlayerFantasyProfileBarGraphResponse,
	PlayerGameLogParams,
	PlayerGameLogResponse,
	PlayerGameLogsParams,
	PlayerGameLogsResponse,
	PlayerGameStreakFinderParams,
	PlayerGameStreakFinderResponse,
	PlayerIndexParams,
	PlayerIndexResponse,
	PlayerNextNGamesParams,
	PlayerNextNGamesResponse,
	PlayerProfileV2Params,
	PlayerProfileV2Response,
	PlayerVsPlayerParams,
	PlayerVsPlayerResponse,
	PlayoffPictureParams,
	PlayoffPictureResponse,
	ScheduleLeagueV2IntParams,
	ScheduleLeagueV2IntResponse,
	ScheduleLeagueV2Params,
	ScheduleLeagueV2Response,
	ScoreboardV2Params,
	ScoreboardV2Response,
	ScoreboardV3Params,
	ScoreboardV3Response,
	ShotChartDetailParams,
	ShotChartDetailResponse,
	ShotChartLeagueWideParams,
	ShotChartLeagueWideResponse,
	ShotChartLineupDetailParams,
	ShotChartLineupDetailResponse,
	SynergyPlayTypesParams,
	SynergyPlayTypesResponse,
	TeamAndPlayersVsPlayersParams,
	TeamAndPlayersVsPlayersResponse,
	TeamDashboardByGeneralSplitsParams,
	TeamDashboardByGeneralSplitsResponse,
	TeamDashboardByShootingSplitsParams,
	TeamDashboardByShootingSplitsResponse,
	TeamDashLineupsParams,
	TeamDashLineupsResponse,
	TeamDashPtPassParams,
	TeamDashPtPassResponse,
	TeamDashPtRebParams,
	TeamDashPtRebResponse,
	TeamDashPtShotsParams,
	TeamDashPtShotsResponse,
	TeamDetailsParams,
	TeamDetailsResponse,
	TeamEstimatedMetricsParams,
	TeamEstimatedMetricsResponse,
	TeamGameLogParams,
	TeamGameLogResponse,
	TeamGameLogsParams,
	TeamGameLogsResponse,
	TeamGameStreakFinderParams,
	TeamGameStreakFinderResponse,
	TeamHistoricalLeadersParams,
	TeamHistoricalLeadersResponse,
	TeamInfoCommonParams,
	TeamInfoCommonResponse,
	TeamPlayerDashboardParams,
	TeamPlayerDashboardResponse,
	TeamPlayerOnOffDetailsParams,
	TeamPlayerOnOffDetailsResponse,
	TeamPlayerOnOffSummaryParams,
	TeamPlayerOnOffSummaryResponse,
	TeamVsPlayerParams,
	TeamVsPlayerResponse,
	TeamYearByYearStatsParams,
	TeamYearByYearStatsResponse,
	VideoDetailsAssetParams,
	VideoDetailsAssetResponse,
	VideoDetailsParams,
	VideoDetailsResponse,
	VideoEventsAssetParams,
	VideoEventsAssetResponse,
	VideoEventsParams,
	VideoEventsResponse,
	VideoStatusParams,
	VideoStatusResponse,
	WinProbabilityPBPParams,
	WinProbabilityPBPResponse,
} from "./types/index.js";

export { FetchClient } from "../http/fetch-client.js";
export type * from "./types/index.js";

export class StatsClient {
	constructor(private readonly client: FetchClient) {}

	allTimeLeadersGrids(
		params: AllTimeLeadersGridsParams,
	): Promise<AllTimeLeadersGridsResponse> {
		return allTimeLeadersGrids(this.client, params);
	}

	assistLeaders(params: AssistLeadersParams): Promise<AssistLeadersResponse> {
		return assistLeaders(this.client, params);
	}

	assistTracker(params: AssistTrackerParams): Promise<AssistTrackerResponse> {
		return assistTracker(this.client, params);
	}

	boxScoreAdvancedV2(
		params: BoxScoreAdvancedV2Params,
	): Promise<BoxScoreAdvancedV2Response> {
		return boxScoreAdvancedV2(this.client, params);
	}

	boxScoreAdvancedV3(
		params: BoxScoreAdvancedV3Params,
	): Promise<BoxScoreAdvancedV3Response> {
		return boxScoreAdvancedV3(this.client, params);
	}

	boxScoreDefensiveV2(
		params: BoxScoreDefensiveV2Params,
	): Promise<BoxScoreDefensiveV2Response> {
		return boxScoreDefensiveV2(this.client, params);
	}

	boxScoreFourFactorsV2(
		params: BoxScoreFourFactorsV2Params,
	): Promise<BoxScoreFourFactorsV2Response> {
		return boxScoreFourFactorsV2(this.client, params);
	}

	boxScoreFourFactorsV3(
		params: BoxScoreFourFactorsV3Params,
	): Promise<BoxScoreFourFactorsV3Response> {
		return boxScoreFourFactorsV3(this.client, params);
	}

	boxScoreHustleV2(
		params: BoxScoreHustleV2Params,
	): Promise<BoxScoreHustleV2Response> {
		return boxScoreHustleV2(this.client, params);
	}

	boxScoreMatchupsV3(
		params: BoxScoreMatchupsV3Params,
	): Promise<BoxScoreMatchupsV3Response> {
		return boxScoreMatchupsV3(this.client, params);
	}

	boxScoreMiscV2(
		params: BoxScoreMiscV2Params,
	): Promise<BoxScoreMiscV2Response> {
		return boxScoreMiscV2(this.client, params);
	}

	boxScoreMiscV3(
		params: BoxScoreMiscV3Params,
	): Promise<BoxScoreMiscV3Response> {
		return boxScoreMiscV3(this.client, params);
	}

	boxScorePlayerTrackV3(
		params: BoxScorePlayerTrackV3Params,
	): Promise<BoxScorePlayerTrackV3Response> {
		return boxScorePlayerTrackV3(this.client, params);
	}

	boxScoreScoringV2(
		params: BoxScoreScoringV2Params,
	): Promise<BoxScoreScoringV2Response> {
		return boxScoreScoringV2(this.client, params);
	}

	boxScoreScoringV3(
		params: BoxScoreScoringV3Params,
	): Promise<BoxScoreScoringV3Response> {
		return boxScoreScoringV3(this.client, params);
	}

	boxScoreSummaryV2(
		params: BoxScoreSummaryV2Params,
	): Promise<BoxScoreSummaryV2Response> {
		return boxScoreSummaryV2(this.client, params);
	}

	boxScoreSummaryV3(
		params: BoxScoreSummaryV3Params,
	): Promise<BoxScoreSummaryV3Response> {
		return boxScoreSummaryV3(this.client, params);
	}

	boxScoreTraditionalV2(
		params: BoxScoreTraditionalV2Params,
	): Promise<BoxScoreTraditionalV2Response> {
		return boxScoreTraditionalV2(this.client, params);
	}

	boxScoreTraditionalV3(
		params: BoxScoreTraditionalV3Params,
	): Promise<BoxScoreTraditionalV3Response> {
		return boxScoreTraditionalV3(this.client, params);
	}

	boxScoreUsageV2(
		params: BoxScoreUsageV2Params,
	): Promise<BoxScoreUsageV2Response> {
		return boxScoreUsageV2(this.client, params);
	}

	boxScoreUsageV3(
		params: BoxScoreUsageV3Params,
	): Promise<BoxScoreUsageV3Response> {
		return boxScoreUsageV3(this.client, params);
	}

	commonAllPlayers(
		params: CommonAllPlayersParams,
	): Promise<CommonAllPlayersResponse> {
		return commonAllPlayers(this.client, params);
	}

	commonPlayerInfo(
		params: CommonPlayerInfoParams,
	): Promise<CommonPlayerInfoResponse> {
		return commonPlayerInfo(this.client, params);
	}

	commonPlayoffSeries(
		params: CommonPlayoffSeriesParams,
	): Promise<CommonPlayoffSeriesResponse> {
		return commonPlayoffSeries(this.client, params);
	}

	commonTeamRoster(
		params: CommonTeamRosterParams,
	): Promise<CommonTeamRosterResponse> {
		return commonTeamRoster(this.client, params);
	}

	commonTeamYears(
		params: CommonTeamYearsParams,
	): Promise<CommonTeamYearsResponse> {
		return commonTeamYears(this.client, params);
	}

	cumeStatsPlayer(
		params: CumeStatsPlayerParams,
	): Promise<CumeStatsPlayerResponse> {
		return cumeStatsPlayer(this.client, params);
	}

	cumeStatsPlayerGames(
		params: CumeStatsPlayerGamesParams,
	): Promise<CumeStatsPlayerGamesResponse> {
		return cumeStatsPlayerGames(this.client, params);
	}

	cumeStatsTeam(params: CumeStatsTeamParams): Promise<CumeStatsTeamResponse> {
		return cumeStatsTeam(this.client, params);
	}

	cumeStatsTeamGames(
		params: CumeStatsTeamGamesParams,
	): Promise<CumeStatsTeamGamesResponse> {
		return cumeStatsTeamGames(this.client, params);
	}

	defenseHub(params: DefenseHubParams): Promise<DefenseHubResponse> {
		return defenseHub(this.client, params);
	}

	draftBoard(params: DraftBoardParams): Promise<DraftBoardResponse> {
		return draftBoard(this.client, params);
	}

	draftCombineDrillResults(
		params: DraftCombineDrillResultsParams,
	): Promise<DraftCombineDrillResultsResponse> {
		return draftCombineDrillResults(this.client, params);
	}

	draftCombineNonStationaryShooting(
		params: DraftCombineNonStationaryShootingParams,
	): Promise<DraftCombineNonStationaryShootingResponse> {
		return draftCombineNonStationaryShooting(this.client, params);
	}

	draftCombinePlayerAnthro(
		params: DraftCombinePlayerAnthroParams,
	): Promise<DraftCombinePlayerAnthroResponse> {
		return draftCombinePlayerAnthro(this.client, params);
	}

	draftCombineSpotShooting(
		params: DraftCombineSpotShootingParams,
	): Promise<DraftCombineSpotShootingResponse> {
		return draftCombineSpotShooting(this.client, params);
	}

	draftCombineStats(
		params: DraftCombineStatsParams,
	): Promise<DraftCombineStatsResponse> {
		return draftCombineStats(this.client, params);
	}

	draftHistory(params: DraftHistoryParams): Promise<DraftHistoryResponse> {
		return draftHistory(this.client, params);
	}

	dunkScoreLeaders(
		params: DunkScoreLeadersParams,
	): Promise<DunkScoreLeadersResponse> {
		return dunkScoreLeaders(this.client, params);
	}

	fantasyWidget(params: FantasyWidgetParams): Promise<FantasyWidgetResponse> {
		return fantasyWidget(this.client, params);
	}

	franchiseHistory(
		params: FranchiseHistoryParams,
	): Promise<FranchiseHistoryResponse> {
		return franchiseHistory(this.client, params);
	}

	franchiseLeaders(
		params: FranchiseLeadersParams,
	): Promise<FranchiseLeadersResponse> {
		return franchiseLeaders(this.client, params);
	}

	franchisePlayers(
		params: FranchisePlayersParams,
	): Promise<FranchisePlayersResponse> {
		return franchisePlayers(this.client, params);
	}

	gameRotation(params: GameRotationParams): Promise<GameRotationResponse> {
		return gameRotation(this.client, params);
	}

	gLAlumBoxScoreSimilarityScore(
		params: GLAlumBoxScoreSimilarityScoreParams,
	): Promise<GLAlumBoxScoreSimilarityScoreResponse> {
		return gLAlumBoxScoreSimilarityScore(this.client, params);
	}

	homePageLeaders(
		params: HomePageLeadersParams,
	): Promise<HomePageLeadersResponse> {
		return homePageLeaders(this.client, params);
	}

	homePageV2(params: HomePageV2Params): Promise<HomePageV2Response> {
		return homePageV2(this.client, params);
	}

	hustleStatsBoxScore(
		params: HustleStatsBoxScoreParams,
	): Promise<HustleStatsBoxScoreResponse> {
		return hustleStatsBoxScore(this.client, params);
	}

	infographicFanDuelPlayer(
		params: InfographicFanDuelPlayerParams,
	): Promise<InfographicFanDuelPlayerResponse> {
		return infographicFanDuelPlayer(this.client, params);
	}

	iSTStandings(params: ISTStandingsParams): Promise<ISTStandingsResponse> {
		return iSTStandings(this.client, params);
	}

	leadersTiles(params: LeadersTilesParams): Promise<LeadersTilesResponse> {
		return leadersTiles(this.client, params);
	}

	leagueDashLineups(
		params: LeagueDashLineupsParams,
	): Promise<LeagueDashLineupsResponse> {
		return leagueDashLineups(this.client, params);
	}

	leagueDashOppPtShot(
		params: LeagueDashOppPtShotParams,
	): Promise<LeagueDashOppPtShotResponse> {
		return leagueDashOppPtShot(this.client, params);
	}

	leagueDashPlayerBioStats(
		params: LeagueDashPlayerBioStatsParams,
	): Promise<LeagueDashPlayerBioStatsResponse> {
		return leagueDashPlayerBioStats(this.client, params);
	}

	leagueDashPlayerClutch(
		params: LeagueDashPlayerClutchParams,
	): Promise<LeagueDashPlayerClutchResponse> {
		return leagueDashPlayerClutch(this.client, params);
	}

	leagueDashPlayerPtShot(
		params: LeagueDashPlayerPtShotParams,
	): Promise<LeagueDashPlayerPtShotResponse> {
		return leagueDashPlayerPtShot(this.client, params);
	}

	leagueDashPlayerShotLocations(
		params: LeagueDashPlayerShotLocationsParams,
	): Promise<LeagueDashPlayerShotLocationsResponse> {
		return leagueDashPlayerShotLocations(this.client, params);
	}

	leagueDashPlayerStats(
		params: LeagueDashPlayerStatsParams,
	): Promise<LeagueDashPlayerStatsResponse> {
		return leagueDashPlayerStats(this.client, params);
	}

	leagueDashPtDefend(
		params: LeagueDashPtDefendParams,
	): Promise<LeagueDashPtDefendResponse> {
		return leagueDashPtDefend(this.client, params);
	}

	leagueDashPtStats(
		params: LeagueDashPtStatsParams,
	): Promise<LeagueDashPtStatsResponse> {
		return leagueDashPtStats(this.client, params);
	}

	leagueDashPtTeamDefend(
		params: LeagueDashPtTeamDefendParams,
	): Promise<LeagueDashPtTeamDefendResponse> {
		return leagueDashPtTeamDefend(this.client, params);
	}

	leagueDashTeamClutch(
		params: LeagueDashTeamClutchParams,
	): Promise<LeagueDashTeamClutchResponse> {
		return leagueDashTeamClutch(this.client, params);
	}

	leagueDashTeamPtShot(
		params: LeagueDashTeamPtShotParams,
	): Promise<LeagueDashTeamPtShotResponse> {
		return leagueDashTeamPtShot(this.client, params);
	}

	leagueDashTeamShotLocations(
		params: LeagueDashTeamShotLocationsParams,
	): Promise<LeagueDashTeamShotLocationsResponse> {
		return leagueDashTeamShotLocations(this.client, params);
	}

	leagueDashTeamStats(
		params: LeagueDashTeamStatsParams,
	): Promise<LeagueDashTeamStatsResponse> {
		return leagueDashTeamStats(this.client, params);
	}

	leagueGameFinder(
		params: LeagueGameFinderParams,
	): Promise<LeagueGameFinderResponse> {
		return leagueGameFinder(this.client, params);
	}

	leagueGameLog(params: LeagueGameLogParams): Promise<LeagueGameLogResponse> {
		return leagueGameLog(this.client, params);
	}

	leagueHustleStatsPlayer(
		params: LeagueHustleStatsPlayerParams,
	): Promise<LeagueHustleStatsPlayerResponse> {
		return leagueHustleStatsPlayer(this.client, params);
	}

	leagueHustleStatsTeam(
		params: LeagueHustleStatsTeamParams,
	): Promise<LeagueHustleStatsTeamResponse> {
		return leagueHustleStatsTeam(this.client, params);
	}

	leagueLeaders(params: LeagueLeadersParams): Promise<LeagueLeadersResponse> {
		return leagueLeaders(this.client, params);
	}

	leagueLineupViz(
		params: LeagueLineupVizParams,
	): Promise<LeagueLineupVizResponse> {
		return leagueLineupViz(this.client, params);
	}

	leaguePlayerOnDetails(
		params: LeaguePlayerOnDetailsParams,
	): Promise<LeaguePlayerOnDetailsResponse> {
		return leaguePlayerOnDetails(this.client, params);
	}

	leagueSeasonMatchups(
		params: LeagueSeasonMatchupsParams,
	): Promise<LeagueSeasonMatchupsResponse> {
		return leagueSeasonMatchups(this.client, params);
	}

	leagueStandings(
		params: LeagueStandingsParams,
	): Promise<LeagueStandingsResponse> {
		return leagueStandings(this.client, params);
	}

	leagueStandingsV3(
		params: LeagueStandingsV3Params,
	): Promise<LeagueStandingsV3Response> {
		return leagueStandingsV3(this.client, params);
	}

	matchupsRollup(
		params: MatchupsRollupParams,
	): Promise<MatchupsRollupResponse> {
		return matchupsRollup(this.client, params);
	}

	playByPlay(params: PlayByPlayParams): Promise<PlayByPlayResponse> {
		return playByPlay(this.client, params);
	}

	playByPlayV2(params: PlayByPlayV2Params): Promise<PlayByPlayV2Response> {
		return playByPlayV2(this.client, params);
	}

	playByPlayV3(params: PlayByPlayV3Params): Promise<PlayByPlayV3Response> {
		return playByPlayV3(this.client, params);
	}

	playerAwards(params: PlayerAwardsParams): Promise<PlayerAwardsResponse> {
		return playerAwards(this.client, params);
	}

	playerCareerByCollege(
		params: PlayerCareerByCollegeParams,
	): Promise<PlayerCareerByCollegeResponse> {
		return playerCareerByCollege(this.client, params);
	}

	playerCareerByCollegeRollup(
		params: PlayerCareerByCollegeRollupParams,
	): Promise<PlayerCareerByCollegeRollupResponse> {
		return playerCareerByCollegeRollup(this.client, params);
	}

	playerCareerStats(
		params: PlayerCareerStatsParams,
	): Promise<PlayerCareerStatsResponse> {
		return playerCareerStats(this.client, params);
	}

	playerCompare(params: PlayerCompareParams): Promise<PlayerCompareResponse> {
		return playerCompare(this.client, params);
	}

	playerDashPtPass(
		params: PlayerDashPtPassParams,
	): Promise<PlayerDashPtPassResponse> {
		return playerDashPtPass(this.client, params);
	}

	playerDashPtReb(
		params: PlayerDashPtRebParams,
	): Promise<PlayerDashPtRebResponse> {
		return playerDashPtReb(this.client, params);
	}

	playerDashPtShotDefend(
		params: PlayerDashPtShotDefendParams,
	): Promise<PlayerDashPtShotDefendResponse> {
		return playerDashPtShotDefend(this.client, params);
	}

	playerDashPtShots(
		params: PlayerDashPtShotsParams,
	): Promise<PlayerDashPtShotsResponse> {
		return playerDashPtShots(this.client, params);
	}

	playerDashboardByClutch(
		params: PlayerDashboardByClutchParams,
	): Promise<PlayerDashboardByClutchResponse> {
		return playerDashboardByClutch(this.client, params);
	}

	playerDashboardByGameSplits(
		params: PlayerDashboardByGameSplitsParams,
	): Promise<PlayerDashboardByGameSplitsResponse> {
		return playerDashboardByGameSplits(this.client, params);
	}

	playerDashboardByGeneralSplits(
		params: PlayerDashboardByGeneralSplitsParams,
	): Promise<PlayerDashboardByGeneralSplitsResponse> {
		return playerDashboardByGeneralSplits(this.client, params);
	}

	playerDashboardByLastNGames(
		params: PlayerDashboardByLastNGamesParams,
	): Promise<PlayerDashboardByLastNGamesResponse> {
		return playerDashboardByLastNGames(this.client, params);
	}

	playerDashboardByShootingSplits(
		params: PlayerDashboardByShootingSplitsParams,
	): Promise<PlayerDashboardByShootingSplitsResponse> {
		return playerDashboardByShootingSplits(this.client, params);
	}

	playerDashboardByTeamPerformance(
		params: PlayerDashboardByTeamPerformanceParams,
	): Promise<PlayerDashboardByTeamPerformanceResponse> {
		return playerDashboardByTeamPerformance(this.client, params);
	}

	playerDashboardByYearOverYear(
		params: PlayerDashboardByYearOverYearParams,
	): Promise<PlayerDashboardByYearOverYearResponse> {
		return playerDashboardByYearOverYear(this.client, params);
	}

	playerEstimatedMetrics(
		params: PlayerEstimatedMetricsParams,
	): Promise<PlayerEstimatedMetricsResponse> {
		return playerEstimatedMetrics(this.client, params);
	}

	playerFantasyProfileBarGraph(
		params: PlayerFantasyProfileBarGraphParams,
	): Promise<PlayerFantasyProfileBarGraphResponse> {
		return playerFantasyProfileBarGraph(this.client, params);
	}

	playerGameLog(params: PlayerGameLogParams): Promise<PlayerGameLogResponse> {
		return playerGameLog(this.client, params);
	}

	playerGameLogs(
		params: PlayerGameLogsParams,
	): Promise<PlayerGameLogsResponse> {
		return playerGameLogs(this.client, params);
	}

	playerGameStreakFinder(
		params: PlayerGameStreakFinderParams,
	): Promise<PlayerGameStreakFinderResponse> {
		return playerGameStreakFinder(this.client, params);
	}

	playerIndex(params: PlayerIndexParams): Promise<PlayerIndexResponse> {
		return playerIndex(this.client, params);
	}

	playerNextNGames(
		params: PlayerNextNGamesParams,
	): Promise<PlayerNextNGamesResponse> {
		return playerNextNGames(this.client, params);
	}

	playerProfileV2(
		params: PlayerProfileV2Params,
	): Promise<PlayerProfileV2Response> {
		return playerProfileV2(this.client, params);
	}

	playerVsPlayer(
		params: PlayerVsPlayerParams,
	): Promise<PlayerVsPlayerResponse> {
		return playerVsPlayer(this.client, params);
	}

	playoffPicture(
		params: PlayoffPictureParams,
	): Promise<PlayoffPictureResponse> {
		return playoffPicture(this.client, params);
	}

	scheduleLeagueV2(
		params: ScheduleLeagueV2Params,
	): Promise<ScheduleLeagueV2Response> {
		return scheduleLeagueV2(this.client, params);
	}

	scheduleLeagueV2Int(
		params: ScheduleLeagueV2IntParams,
	): Promise<ScheduleLeagueV2IntResponse> {
		return scheduleLeagueV2Int(this.client, params);
	}

	scoreboardV2(params: ScoreboardV2Params): Promise<ScoreboardV2Response> {
		return scoreboardV2(this.client, params);
	}

	scoreboardV3(params: ScoreboardV3Params): Promise<ScoreboardV3Response> {
		return scoreboardV3(this.client, params);
	}

	shotChartDetail(
		params: ShotChartDetailParams,
	): Promise<ShotChartDetailResponse> {
		return shotChartDetail(this.client, params);
	}

	shotChartLeagueWide(
		params: ShotChartLeagueWideParams,
	): Promise<ShotChartLeagueWideResponse> {
		return shotChartLeagueWide(this.client, params);
	}

	shotChartLineupDetail(
		params: ShotChartLineupDetailParams,
	): Promise<ShotChartLineupDetailResponse> {
		return shotChartLineupDetail(this.client, params);
	}

	synergyPlayTypes(
		params: SynergyPlayTypesParams,
	): Promise<SynergyPlayTypesResponse> {
		return synergyPlayTypes(this.client, params);
	}

	teamAndPlayersVsPlayers(
		params: TeamAndPlayersVsPlayersParams,
	): Promise<TeamAndPlayersVsPlayersResponse> {
		return teamAndPlayersVsPlayers(this.client, params);
	}

	teamDashLineups(
		params: TeamDashLineupsParams,
	): Promise<TeamDashLineupsResponse> {
		return teamDashLineups(this.client, params);
	}

	teamDashPtPass(
		params: TeamDashPtPassParams,
	): Promise<TeamDashPtPassResponse> {
		return teamDashPtPass(this.client, params);
	}

	teamDashPtReb(params: TeamDashPtRebParams): Promise<TeamDashPtRebResponse> {
		return teamDashPtReb(this.client, params);
	}

	teamDashPtShots(
		params: TeamDashPtShotsParams,
	): Promise<TeamDashPtShotsResponse> {
		return teamDashPtShots(this.client, params);
	}

	teamDashboardByGeneralSplits(
		params: TeamDashboardByGeneralSplitsParams,
	): Promise<TeamDashboardByGeneralSplitsResponse> {
		return teamDashboardByGeneralSplits(this.client, params);
	}

	teamDashboardByShootingSplits(
		params: TeamDashboardByShootingSplitsParams,
	): Promise<TeamDashboardByShootingSplitsResponse> {
		return teamDashboardByShootingSplits(this.client, params);
	}

	teamDetails(params: TeamDetailsParams): Promise<TeamDetailsResponse> {
		return teamDetails(this.client, params);
	}

	teamEstimatedMetrics(
		params: TeamEstimatedMetricsParams,
	): Promise<TeamEstimatedMetricsResponse> {
		return teamEstimatedMetrics(this.client, params);
	}

	teamGameLog(params: TeamGameLogParams): Promise<TeamGameLogResponse> {
		return teamGameLog(this.client, params);
	}

	teamGameLogs(params: TeamGameLogsParams): Promise<TeamGameLogsResponse> {
		return teamGameLogs(this.client, params);
	}

	teamGameStreakFinder(
		params: TeamGameStreakFinderParams,
	): Promise<TeamGameStreakFinderResponse> {
		return teamGameStreakFinder(this.client, params);
	}

	teamHistoricalLeaders(
		params: TeamHistoricalLeadersParams,
	): Promise<TeamHistoricalLeadersResponse> {
		return teamHistoricalLeaders(this.client, params);
	}

	teamInfoCommon(
		params: TeamInfoCommonParams,
	): Promise<TeamInfoCommonResponse> {
		return teamInfoCommon(this.client, params);
	}

	teamPlayerDashboard(
		params: TeamPlayerDashboardParams,
	): Promise<TeamPlayerDashboardResponse> {
		return teamPlayerDashboard(this.client, params);
	}

	teamPlayerOnOffDetails(
		params: TeamPlayerOnOffDetailsParams,
	): Promise<TeamPlayerOnOffDetailsResponse> {
		return teamPlayerOnOffDetails(this.client, params);
	}

	teamPlayerOnOffSummary(
		params: TeamPlayerOnOffSummaryParams,
	): Promise<TeamPlayerOnOffSummaryResponse> {
		return teamPlayerOnOffSummary(this.client, params);
	}

	teamVsPlayer(params: TeamVsPlayerParams): Promise<TeamVsPlayerResponse> {
		return teamVsPlayer(this.client, params);
	}

	teamYearByYearStats(
		params: TeamYearByYearStatsParams,
	): Promise<TeamYearByYearStatsResponse> {
		return teamYearByYearStats(this.client, params);
	}

	videoDetails(params: VideoDetailsParams): Promise<VideoDetailsResponse> {
		return videoDetails(this.client, params);
	}

	videoDetailsAsset(
		params: VideoDetailsAssetParams,
	): Promise<VideoDetailsAssetResponse> {
		return videoDetailsAsset(this.client, params);
	}

	videoEvents(params: VideoEventsParams): Promise<VideoEventsResponse> {
		return videoEvents(this.client, params);
	}

	videoEventsAsset(
		params: VideoEventsAssetParams,
	): Promise<VideoEventsAssetResponse> {
		return videoEventsAsset(this.client, params);
	}

	videoStatus(params: VideoStatusParams): Promise<VideoStatusResponse> {
		return videoStatus(this.client, params);
	}

	winProbabilityPBP(
		params: WinProbabilityPBPParams,
	): Promise<WinProbabilityPBPResponse> {
		return winProbabilityPBP(this.client, params);
	}
}
