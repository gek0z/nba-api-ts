# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run build              # Bundle ESM + emit .d.ts declarations
bun run lint               # Biome check (formatting + linting)
bun run lint:fix           # Auto-fix lint/format issues
bun run typecheck          # tsc --noEmit
bun test                   # All tests (integration skipped without env var)
bun run test:unit          # Unit tests only (offline, fast)
bun test tests/unit/stats/endpoints.test.ts                  # Single test file
bun test tests/unit/stats/endpoints.test.ts -t "playerCar"   # Single test by name

# Integration tests — hits real NBA API, requires residential IP
NBA_INTEGRATION_TESTS=1 bun run test:integration
NBA_INTEGRATION_TESTS=1 NBA_USE_TLS=1 bun run test:integration:tls
```

## Architecture

Zero-dependency TypeScript client wrapping **138 stats endpoints** (`stats.nba.com`) and **4 live endpoints** (`cdn.nba.com`).

### HTTP layer (`src/http/`)
`FetchClient` handles all requests with retry (exponential backoff on 408/429/5xx), rate limiting (token-bucket, default 600ms), timeout via AbortController, and custom `fetch` injection for TLS fingerprint bypass.

### Endpoint pattern (`src/stats/endpoints/`)
Every stats endpoint is a pure function: `(FetchClient, Params) → Promise<Response>`. Params are camelCase in TypeScript, converted to PascalCase for the NBA API. The `StatsClient` class (`src/stats/index.ts`) binds all 138 endpoint functions to its `FetchClient` instance.

### Response parsing (`src/response/`)
NBA returns `{ headers: string[], rowSet: any[][] }` arrays. The parser converts these to typed objects with camelCase keys (`PLAYER_ID` → `playerId`). Two variants: `parseStatsResponse` for V2 and `parseStatsV3Response` for V3 format.

### Live data (`src/live/`)
4 simple JSON endpoints on `cdn.nba.com` — no Akamai protection, no parsing needed, no rate limiting.

### Type system (`src/stats/types/`)
Each endpoint has a type file with `{Endpoint}Params`, `{Endpoint}Response`, and `{ResultSet}Row` interfaces.

## Adding a new stats endpoint

1. `src/stats/types/{name}.ts` — Params + Response + Row interfaces
2. `src/stats/endpoints/{name}.ts` — endpoint function
3. `src/stats/endpoints/index.ts` — re-export
4. `src/stats/index.ts` — add method to `StatsClient`, add imports

## Conventions

- **Formatting**: tabs, double quotes (Biome)
- **Always use `bun`** — not npm/yarn/pnpm
- Stats endpoints use PascalCase query params (`PlayerID`, `PerMode`), TypeScript interfaces use camelCase (`playerID`, `perMode`)
- Integration tests are gated behind `NBA_INTEGRATION_TESTS=1` env var

## Akamai constraints

`stats.nba.com` blocks non-browser TLS fingerprints and datacenter IPs. Stats endpoints only work from residential IPs with TLS impersonation (e.g., `tlsclientwrapper`). Live endpoints (`cdn.nba.com`) work from anywhere. CI runs unit tests only.
