import { describe, expect, test } from 'bun:test';
import { snakeToCamel, parseResultSet, parseStatsResponse, parseV3Response } from '../../../src/response/parser.js';
import type { RawNBAStatsResponse, RawResultSet } from '../../../src/response/types.js';

describe('snakeToCamel', () => {
  test('converts SCREAMING_SNAKE to camelCase', () => {
    expect(snakeToCamel('PLAYER_ID')).toBe('playerId');
    expect(snakeToCamel('TEAM_ABBREVIATION')).toBe('teamAbbreviation');
    expect(snakeToCamel('FG3_PCT')).toBe('fg3Pct');
    expect(snakeToCamel('PLUS_MINUS')).toBe('plusMinus');
  });

  test('handles single word', () => {
    expect(snakeToCamel('PTS')).toBe('pts');
    expect(snakeToCamel('MIN')).toBe('min');
  });

  test('handles empty string', () => {
    expect(snakeToCamel('')).toBe('');
  });
});

describe('parseResultSet', () => {
  test('transforms headers + rowSet into objects', () => {
    const rs: RawResultSet = {
      name: 'Test',
      headers: ['PLAYER_ID', 'PLAYER_NAME', 'PTS'],
      rowSet: [
        [203999, 'Nikola Jokic', 26.4],
        [201566, 'Russell Westbrook', 22.1],
      ],
    };

    const result = parseResultSet(rs);
    expect(result).toEqual([
      { playerId: 203999, playerName: 'Nikola Jokic', pts: 26.4 },
      { playerId: 201566, playerName: 'Russell Westbrook', pts: 22.1 },
    ]);
  });

  test('handles empty rowSet', () => {
    const rs: RawResultSet = { name: 'Empty', headers: ['A', 'B'], rowSet: [] };
    expect(parseResultSet(rs)).toEqual([]);
  });
});

describe('parseStatsResponse', () => {
  const raw: RawNBAStatsResponse = {
    resource: 'playercareerstats',
    parameters: { PlayerID: 203999 },
    resultSets: [
      {
        name: 'CareerTotalsRegularSeason',
        headers: ['PLAYER_ID', 'GP', 'PTS'],
        rowSet: [[203999, 100, 25.0]],
      },
      {
        name: 'SeasonTotalsRegularSeason',
        headers: ['PLAYER_ID', 'SEASON_ID', 'PTS'],
        rowSet: [
          [203999, '22023', 26.4],
          [203999, '22022', 24.5],
        ],
      },
    ],
  };

  test('parses all result sets with camelCase keys', () => {
    const result = parseStatsResponse(raw);
    expect(result.careerTotalsRegularSeason).toEqual([
      { playerId: 203999, gp: 100, pts: 25.0 },
    ]);
    expect(result.seasonTotalsRegularSeason).toHaveLength(2);
  });

  test('filters result sets by map', () => {
    const map = { CareerTotalsRegularSeason: 'career' };
    const result = parseStatsResponse(raw, map);
    expect(result.career).toBeDefined();
    expect(result.seasonTotalsRegularSeason).toBeUndefined();
  });

  test('handles resultSet singular (object)', () => {
    const singular = {
      resource: 'leagueleaders',
      parameters: {},
      resultSet: {
        name: 'LeagueLeaders',
        headers: ['PLAYER_ID', 'PTS'],
        rowSet: [[203999, 30.5]],
      },
    } as unknown as RawNBAStatsResponse;

    const result = parseStatsResponse(singular);
    expect(result.leagueLeaders).toEqual([{ playerId: 203999, pts: 30.5 }]);
  });

  test('handles resultSet singular (array)', () => {
    const singularArray = {
      resource: 'leaderstiles',
      parameters: {},
      resultSet: [
        {
          name: 'AllTimeSeasonHigh',
          headers: ['PLAYER_ID', 'PTS'],
          rowSet: [[2544, 50]],
        },
        {
          name: 'LastSeasonHigh',
          headers: ['PLAYER_ID', 'PTS'],
          rowSet: [[203999, 40]],
        },
      ],
    } as unknown as RawNBAStatsResponse;

    const result = parseStatsResponse(singularArray);
    expect(result.allTimeSeasonHigh).toEqual([{ playerId: 2544, pts: 50 }]);
    expect(result.lastSeasonHigh).toEqual([{ playerId: 203999, pts: 40 }]);
  });

  test('returns empty object when no resultSets', () => {
    const empty = { meta: {}, data: {} } as unknown as RawNBAStatsResponse;
    const result = parseStatsResponse(empty);
    expect(Object.keys(result)).toHaveLength(0);
  });
});

describe('parseV3Response', () => {
  test('extracts first non-meta key from V3 response', () => {
    const raw = {
      meta: { version: 3 },
      boxScoreTraditional: {
        gameId: '0022400561',
        homeTeam: { teamId: 1610612743, players: [] },
        awayTeam: { teamId: 1610612747, players: [] },
      },
    };
    const result = parseV3Response<{ gameId: string; homeTeam: any }>(raw);
    expect(result.gameId).toBe('0022400561');
    expect(result.homeTeam.teamId).toBe(1610612743);
  });

  test('returns raw if no non-meta keys', () => {
    const raw = { meta: { version: 3 } };
    const result = parseV3Response(raw);
    expect(result).toEqual({ meta: { version: 3 } });
  });
});
