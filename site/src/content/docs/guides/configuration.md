---
title: Configuration
description: Timeouts, retries, rate limiting, headers and custom fetch for the stats and live clients.
---

`NBAClient` holds two independent HTTP clients, one per host, each with its own options.

```ts
import { NBAClient } from "nba-api-ts";

const nba = new NBAClient({
	stats: { timeout: 30_000, maxRetries: 3, rateLimit: 600, fetch: browserFetch },
	live: { timeout: 10_000, rateLimit: 0, fetch: browserFetch },
});
```

## Options

| Option | Type | Stats default | Live default | What it does |
|---|---|---|---|---|
| `fetch` | `FetchFn` | `globalThis.fetch` | `globalThis.fetch` | The function that makes requests. See [Getting past Akamai](/guides/akamai/). |
| `timeout` | `number` (ms) | `30000` | `30000` | Abort a request that takes longer than this. Throws `NBATimeoutError`. |
| `maxRetries` | `number` | `3` | `3` | Extra attempts after a retryable failure. `0` disables retries. |
| `rateLimit` | `number` (ms) | `600` | `0` | Minimum gap between requests. `0` disables the limiter. |
| `headers` | `Record<string, string>` | browser-like nba.com headers | browser-like nba.com headers | Replaces the default headers entirely. |

## Retries

A request is retried with exponential backoff (1s, 2s, 4s, …) when:

- the response is `408`, `429`, `500`, `502`, `503` or `504`,
- it times out,
- the network fails (DNS, connection reset).

Any other status, including Akamai's `403`, fails immediately. Retrying a fingerprint block won't help.

## Rate limiting

The stats client waits at least 600 ms between requests by default. NBA.com throttles bursts, and a few hundred milliseconds of spacing is the difference between a backfill that finishes and one that starts timing out halfway through. The limiter is per client, so concurrent calls on the same `nba.stats` are queued, not fired at once.

Live data comes from a CDN, so its limiter is off by default.

## Headers

By default, both clients send a Chrome `User-Agent`, `Accept`, and an nba.com `Referer`. Stats requests also send `Origin` and `Accept-Language`. Passing `headers` replaces this set rather than merging with it, so include everything you need:

```ts
const nba = new NBAClient({
	stats: {
		fetch: browserFetch,
		headers: {
			Accept: "application/json, text/plain, */*",
			"Accept-Language": "en-US,en;q=0.9",
			Origin: "https://www.nba.com",
			Referer: "https://www.nba.com/",
		},
	},
});
```

Leaving out `User-Agent` like this is useful with impit, which then sends the one that matches its Chrome fingerprint.

## Using one client

`StatsClient` and `LiveClient` are exported on their own if you only need one host:

```ts
import { FetchClient, LiveClient, StatsClient } from "nba-api-ts";

const live = new LiveClient({ fetch: browserFetch });
const stats = new StatsClient(new FetchClient("https://stats.nba.com", { fetch: browserFetch }));
```
