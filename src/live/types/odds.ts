export interface OddsResponse {
  games: OddsGame[];
}

export interface OddsGame {
  gameId: string;
  sr_id: string;
  srMatchId: string;
  homeTeamId: string;
  awayTeamId: string;
  markets: OddsMarket[];
}

export interface OddsMarket {
  name: string;
  odds_type_id: number;
  group_name: string;
  books: OddsBook[];
}

export interface OddsBook {
  id: string;
  name: string;
  outcomes: OddsOutcome[];
  url: string;
  countryCode: string;
}

export interface OddsOutcome {
  odds_field_id: number;
  type: string;
  odds: string;
  opening_odds: string;
  odds_trend: string;
  spread: string | null;
  opening_spread: string | null;
}
