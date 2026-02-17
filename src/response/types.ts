/** Raw response from stats.nba.com v2 endpoints. */
export interface RawNBAStatsResponse {
  resource: string;
  parameters: Record<string, unknown>;
  resultSets: RawResultSet[];
}

/** A single result set from the v2 response. */
export interface RawResultSet {
  name: string;
  headers: string[];
  rowSet: unknown[][];
}

/** Raw response from stats.nba.com v3 endpoints. */
export interface RawNBAStatsV3Response {
  resource: string;
  parameters: Record<string, unknown>;
  resultSets: RawResultSetV3;
}

/** V3 result sets contain named objects with headers + rowSet. */
export interface RawResultSetV3 {
  [name: string]: {
    headers: Array<{
      columnNames: string[];
      name: string;
    }>;
    rowSet: unknown[][];
  };
}
