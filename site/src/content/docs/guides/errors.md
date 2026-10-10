---
title: Error handling
description: The three error classes nba-api-ts throws, when each happens, and what to do about it.
---

Every failure is one of three classes, all exported from the package root.

```ts
import { NBAApiError, NBANetworkError, NBATimeoutError } from "nba-api-ts";

try {
	await nba.stats.playerCareerStats({ playerID: 2544 });
} catch (error) {
	if (error instanceof NBAApiError) {
		console.error(error.statusCode, error.url, error.responseBody);
	} else if (error instanceof NBATimeoutError) {
		console.error(`gave up after ${error.timeoutMs}ms`);
	} else if (error instanceof NBANetworkError) {
		console.error("network failure", error.cause);
	}
}
```

| Class | Thrown when | Fields |
|---|---|---|
| `NBAApiError` | The server answered with a non-2xx status | `statusCode`, `url`, `responseBody` |
| `NBATimeoutError` | No response within `timeout`, after all retries | `url`, `timeoutMs` |
| `NBANetworkError` | DNS, TLS or connection failure, after all retries | `url`, `cause` |

## Common causes

| Error | Usually means |
|---|---|
| `NBAApiError` 403, message says "blocked by Akamai" | The request didn't look like a browser. See [Getting past Akamai](/guides/akamai/). |
| `NBAApiError` 403 from cdn.nba.com, S3 XML body | The live file for that game doesn't exist yet. |
| `NBAApiError` 400 | A parameter is invalid: wrong season format, a numeric `gameID`, or a filter value the endpoint doesn't support. |
| `NBATimeoutError` on every stats call | Plain `fetch`, or a datacenter IP. |

Which errors are retried, and how, is covered in [Configuration](/guides/configuration/#retries).
