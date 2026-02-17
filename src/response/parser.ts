import type { RawNBAStatsResponse, RawResultSet } from './types.js';

/**
 * Converts SCREAMING_SNAKE_CASE to camelCase.
 * e.g. "PLAYER_ID" → "playerId", "PTS" → "pts"
 */
export function snakeToCamel(s: string): string {
  return s
    .toLowerCase()
    .replace(/_([a-z0-9])/g, (_, c) => c.toUpperCase());
}

/**
 * Parses a single result set's headers + rowSet into an array of objects.
 * Headers are converted from SCREAMING_SNAKE to camelCase.
 */
export function parseResultSet(resultSet: RawResultSet): Record<string, unknown>[] {
  const keys = resultSet.headers.map(snakeToCamel);
  return resultSet.rowSet.map((row) => {
    const obj: Record<string, unknown> = {};
    for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = row[i];
    }
    return obj;
  });
}

/**
 * Maps a result set name to camelCase.
 * e.g. "CareerTotalsRegularSeason" → "careerTotalsRegularSeason"
 */
function resultSetNameToCamel(name: string): string {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

/**
 * Extracts the resultSets array from a raw response.
 * Handles both `resultSets` (plural, array) and `resultSet` (singular, object).
 */
function getResultSets(raw: unknown): RawResultSet[] {
  const obj = raw as Record<string, unknown>;
  if (Array.isArray(obj.resultSets)) {
    return obj.resultSets as RawResultSet[];
  }
  const singular = obj.resultSet;
  if (Array.isArray(singular)) {
    return singular as RawResultSet[];
  }
  if (singular && typeof singular === 'object') {
    return [singular as RawResultSet];
  }
  return [];
}

/**
 * Parses a stats response into a record of named result sets.
 * Each result set becomes a camelCase-keyed array of objects.
 *
 * Handles both `resultSets` (plural array) and `resultSet` (singular object).
 *
 * If `resultSetMap` is provided, only those result sets are included and
 * the keys are the values from the map. Otherwise, all result sets are
 * included using their original names converted to camelCase.
 */
export function parseStatsResponse(
  raw: RawNBAStatsResponse,
  resultSetMap?: Record<string, string>,
): Record<string, Record<string, unknown>[]> {
  const result: Record<string, Record<string, unknown>[]> = {};
  const resultSets = getResultSets(raw);

  for (const rs of resultSets) {
    let key: string;
    if (resultSetMap) {
      const mapped = resultSetMap[rs.name];
      if (!mapped) continue;
      key = mapped;
    } else {
      key = resultSetNameToCamel(rs.name);
    }
    result[key] = parseResultSet(rs);
  }

  return result;
}

/**
 * Extracts the data from a V3 nested response.
 * V3 responses have format: `{ meta: {...}, someDataKey: {...} }`.
 * Returns the value of the first non-meta key.
 */
export function parseV3Response<T = unknown>(raw: Record<string, unknown>): T {
  for (const [key, value] of Object.entries(raw)) {
    if (key !== 'meta') return value as T;
  }
  return raw as T;
}
