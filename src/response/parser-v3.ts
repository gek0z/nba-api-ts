import type { RawNBAStatsV3Response } from './types.js';
import { snakeToCamel } from './parser.js';

/**
 * Parses a v3 stats response. V3 responses have a different structure
 * where result sets contain header groups with columnNames.
 */
export function parseStatsV3Response(
  raw: RawNBAStatsV3Response,
): Record<string, Record<string, unknown>[]> {
  const result: Record<string, Record<string, unknown>[]> = {};

  for (const [name, data] of Object.entries(raw.resultSets)) {
    if (!data || typeof data !== 'object') continue;
    if (!Array.isArray(data.headers) || !Array.isArray(data.rowSet)) continue;

    // V3 headers have { columnNames, name } — flatten all column names
    const keys = data.headers.flatMap((h) => h.columnNames.map(snakeToCamel));

    const camelName = name.charAt(0).toLowerCase() + name.slice(1);
    result[camelName] = data.rowSet.map((row) => {
      const obj: Record<string, unknown> = {};
      for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = row[i];
      }
      return obj;
    });
  }

  return result;
}
