# Endpoints

## Stats Endpoints (138)

All stats endpoints hit `https://stats.nba.com/stats/` and require a residential IP with TLS impersonation.

| Method | NBA API Path |
|--------|-------------|
| `allTimeLeadersGrids` | `/stats/alltimeleadersgrids` |
| `assistLeaders` | `/stats/assistleaders` |
| `assistTracker` | `/stats/assisttracker` |
| `boxScoreAdvancedV2` | `/stats/boxscoreadvancedv2` |
| `boxScoreAdvancedV3` | `/stats/boxscoreadvancedv3` |
| `boxScoreDefensiveV2` | `/stats/boxscoredefensivev2` |
| `boxScoreFourFactorsV2` | `/stats/boxscorefactorsv2` |
| `boxScoreFourFactorsV3` | `/stats/boxscorefactorsv3` |
| `boxScoreHustleV2` | `/stats/boxscorehustlev2` |
| `boxScoreMatchupsV3` | `/stats/boxscorematchupsv3` |
| `boxScoreMiscV2` | `/stats/boxscoremiscv2` |
| `boxScoreMiscV3` | `/stats/boxscoremiscv3` |
| `boxScorePlayerTrackV3` | `/stats/boxscoreplayertrackerv3` |
| `boxScoreScoringV2` | `/stats/boxscorescoringv2` |
| `boxScoreScoringV3` | `/stats/boxscorescoringv3` |
| `boxScoreSummaryV2` | `/stats/boxscoresummaryv2` |
| `boxScoreSummaryV3` | `/stats/boxscoresummaryv3` |
| `boxScoreTraditionalV2` | `/stats/boxscoretraditionalv2` |
| `boxScoreTraditionalV3` | `/stats/boxscoretraditionalv3` |
| `boxScoreUsageV2` | `/stats/boxscoreusagev2` |
| `boxScoreUsageV3` | `/stats/boxscoreusagev3` |
| `commonAllPlayers` | `/stats/commonallplayers` |
| `commonPlayerInfo` | `/stats/commonplayerinfo` |
| `commonPlayoffSeries` | `/stats/commonplayoffseries` |
| `commonTeamRoster` | `/stats/commonteamroster` |
| `commonTeamYears` | `/stats/commonteamyears` |
| `cumeStatsPlayer` | `/stats/cumestatsplayer` |
| `cumeStatsPlayerGames` | `/stats/cumestatplayergames` |
| `cumeStatsTeam` | `/stats/cumestatsteam` |
| `cumeStatsTeamGames` | `/stats/cumestats` |
| `defenseHub` | `/stats/defensehub` |
| `draftBoard` | `/stats/draftboard` |
| `draftCombineDrillResults` | `/stats/draftcombinedrillresults` |
| `draftCombineNonStationaryShooting` | `/stats/draftcombinestationaryshooting` |
| `draftCombinePlayerAnthro` | `/stats/draftcombineplayeranthro` |
| `draftCombineSpotShooting` | `/stats/draftcombinespotshooting` |
| `draftCombineStats` | `/stats/draftcombinestats` |
| `draftHistory` | `/stats/drafthistory` |
| `dunkScoreLeaders` | `/stats/dunkscoreleaders` |
| `fantasyWidget` | `/stats/fantasywidget` |
| `franchiseHistory` | `/stats/franchisehistory` |
| `franchiseLeaders` | `/stats/franchiseleaders` |
| `franchisePlayers` | `/stats/franchiseplayers` |
| `gameRotation` | `/stats/gamerotation` |
| `gLAlumBoxScoreSimilarityScore` | `/stats/glalumboxscoresimilarityscore` |
| `homePageLeaders` | `/stats/homepayleaders` |
| `homePageV2` | `/stats/homepagev2` |
| `hustleStatsBoxScore` | `/stats/hustleboxscore` |
| `infographicFanDuelPlayer` | `/stats/infographicfanduelplayer` |
| `iSTStandings` | `/stats/iststandings` |
| `leadersTiles` | `/stats/leaderstiles` |
| `leagueDashLineups` | `/stats/leaguedashlineups` |
| `leagueDashOppPtShot` | `/stats/leaguedashoppptshot` |
| `leagueDashPlayerBioStats` | `/stats/leaguedashplayerbiostats` |
| `leagueDashPlayerClutch` | `/stats/leaguedashplayerclutch` |
| `leagueDashPlayerPtShot` | `/stats/leaguedashplayerptshot` |
| `leagueDashPlayerShotLocations` | `/stats/leaguedashplayershotlocations` |
| `leagueDashPlayerStats` | `/stats/leaguedashplayerstats` |
| `leagueDashPtDefend` | `/stats/leaguedashptdefend` |
| `leagueDashPtStats` | `/stats/leaguedashptstats` |
| `leagueDashPtTeamDefend` | `/stats/leaguedashptteamdefend` |
| `leagueDashTeamClutch` | `/stats/leaguedashteamclutch` |
| `leagueDashTeamPtShot` | `/stats/leaguedashteamptshot` |
| `leagueDashTeamShotLocations` | `/stats/leaguedashteamshotlocations` |
| `leagueDashTeamStats` | `/stats/leaguedashteamstats` |
| `leagueGameFinder` | `/stats/leaguegamefinder` |
| `leagueGameLog` | `/stats/leaguegamelog` |
| `leagueHustleStatsPlayer` | `/stats/leaguehustlestatplayerteam` |
| `leagueHustleStatsTeam` | `/stats/leaguehustlestatteamteam` |
| `leagueLeaders` | `/stats/leagueleaders` |
| `leagueLineupViz` | `/stats/leaguelineupviz` |
| `leaguePlayerOnDetails` | `/stats/leagueplayerondetails` |
| `leagueSeasonMatchups` | `/stats/leagueseasonmatchups` |
| `leagueStandings` | `/stats/leaguestandings` |
| `leagueStandingsV3` | `/stats/leaguestandingsv3` |
| `matchupsRollup` | `/stats/matchupsrollup` |
| `playByPlay` | `/stats/playbyplay` |
| `playByPlayV2` | `/stats/playbyplayv2` |
| `playByPlayV3` | `/stats/playbyplayv3` |
| `playerAwards` | `/stats/playerawards` |
| `playerCareerByCollege` | `/stats/playercareerbycollege` |
| `playerCareerByCollegeRollup` | `/stats/playercareerbycollegroll` |
| `playerCareerStats` | `/stats/playercareerstats` |
| `playerCompare` | `/stats/playercompare` |
| `playerDashPtPass` | `/stats/playerdashptpass` |
| `playerDashPtReb` | `/stats/playerdashptreb` |
| `playerDashPtShotDefend` | `/stats/playerdashptshotdefend` |
| `playerDashPtShots` | `/stats/playerdashptshots` |
| `playerDashboardByClutch` | `/stats/playerdashboardbygeneral` |
| `playerDashboardByGameSplits` | `/stats/playerdashboardbygamesplits` |
| `playerDashboardByGeneralSplits` | `/stats/playerdashboardbygeneral` |
| `playerDashboardByLastNGames` | `/stats/playerdashboardbylastngames` |
| `playerDashboardByShootingSplits` | `/stats/playerdashboardbyshootingsplits` |
| `playerDashboardByTeamPerformance` | `/stats/playerdashboardbyteamperformance` |
| `playerDashboardByYearOverYear` | `/stats/playerdashboardbyyearoveryear` |
| `playerEstimatedMetrics` | `/stats/playerestimatedmetrics` |
| `playerFantasyProfileBarGraph` | `/stats/playerfantasyprofilebargraph` |
| `playerGameLog` | `/stats/playergamelog` |
| `playerGameLogs` | `/stats/playergamelogs` |
| `playerGameStreakFinder` | `/stats/playergamestreakfinder` |
| `playerIndex` | `/stats/playerindex` |
| `playerNextNGames` | `/stats/playernextngames` |
| `playerProfileV2` | `/stats/playerprofilev2` |
| `playerVsPlayer` | `/stats/playervsplayer` |
| `playoffPicture` | `/stats/playoffpicture` |
| `scheduleLeagueV2` | `/stats/scheduleleaguev2` |
| `scheduleLeagueV2Int` | `/stats/scheduleleaguev2int` |
| `scoreboardV2` | `/stats/scoreboardv2` |
| `scoreboardV3` | `/stats/scoreboardv3` |
| `shotChartDetail` | `/stats/shotchartdetail` |
| `shotChartLeagueWide` | `/stats/shotchartleaguewide` |
| `shotChartLineupDetail` | `/stats/shotchartlineupdetail` |
| `synergyPlayTypes` | `/stats/synergyplaytypes` |
| `teamAndPlayersVsPlayers` | `/stats/teamandplayersvsplayers` |
| `teamDashLineups` | `/stats/teamdashlineups` |
| `teamDashPtPass` | `/stats/teamdashptpass` |
| `teamDashPtReb` | `/stats/teamdashptreb` |
| `teamDashPtShots` | `/stats/teamdashptshots` |
| `teamDashboardByGeneralSplits` | `/stats/teamdashboardbygeneral` |
| `teamDashboardByShootingSplits` | `/stats/teamdashboardbyshootingsplits` |
| `teamDetails` | `/stats/teamdetails` |
| `teamEstimatedMetrics` | `/stats/teamestimatedmetrics` |
| `teamGameLog` | `/stats/teamgamelog` |
| `teamGameLogs` | `/stats/teamgamelogs` |
| `teamGameStreakFinder` | `/stats/teamgamestreakfinder` |
| `teamHistoricalLeaders` | `/stats/teamhistoricalleaders` |
| `teamInfoCommon` | `/stats/teaminfocommon` |
| `teamPlayerDashboard` | `/stats/teamplayerdashboard` |
| `teamPlayerOnOffDetails` | `/stats/teamplayeronoffdetails` |
| `teamPlayerOnOffSummary` | `/stats/teamplayeronoffsummary` |
| `teamVsPlayer` | `/stats/teamvsplayer` |
| `teamYearByYearStats` | `/stats/teamyearbyyearstats` |
| `videoDetails` | `/stats/videodetails` |
| `videoDetailsAsset` | `/stats/videodetailsasset` |
| `videoEvents` | `/stats/videoevents` |
| `videoEventsAsset` | `/stats/videoeventsasset` |
| `videoStatus` | `/stats/videostatus` |
| `winProbabilityPBP` | `/stats/winprobabilitypbp` |

## Live Endpoints (4)

All live endpoints hit `https://cdn.nba.com/static/json/liveData/` and work from any IP without TLS impersonation.

| Method | NBA API Path | Parameters |
|--------|-------------|------------|
| `scoreboard` | `/static/json/liveData/scoreboard/todaysScoreboard_00.json` | None |
| `boxscore` | `/static/json/liveData/boxscore/boxscore_{gameId}.json` | `gameId` |
| `playByPlay` | `/static/json/liveData/playbyplay/playbyplay_{gameId}.json` | `gameId` |
| `odds` | `/static/json/liveData/odds/odds_todaysGames.json` | None |
