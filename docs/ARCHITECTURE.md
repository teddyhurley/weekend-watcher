# Architecture

The app uses vanilla browser JavaScript and a dependency-free Node.js HTTP server. `src/dates.js` shares calendar validation between server and browser. `src/engine.js` matches viewing windows in the selected time zone, including daylight-saving changes, then ranks eligible events. The catalogue and admission rules are independent of individual event scores.

The browser submits inclusive start/end dates and its time zone. Valid dates run from the viewer's current date through that date plus 28 calendar days. The feed fetches one UTC buffer date on each side, then browser filters apply local date/hour limits. A four-week horizon can therefore include 29 calendar dates and 31 broad provider day requests.

TheSportsDB supplies broad schedules. NCAA FBS comes from CollegeFootballData when connected. Official MLB, KBO and NPB adapters provide additional fixtures and verified baseball context. Source failures are surfaced. No fabricated events fill a live-data failure.

## Long-range requests

Global day requests are loaded before targeted recovery of capped days. The server reuses raw date/league responses for 15 minutes in a bounded in-memory cache. Each feed gets at most 200 uncached targeted recovery requests and a four-minute budget for broad/recovery work. Individual providers have their own request timeouts. Deferred recovery marks the result partial and recommends a shorter range. Aggregate feeds are cached for 15 minutes; an older cached result may be used for up to six hours after a failed refresh, explicitly labelled stale.

A single in-flight range prevents accidental concurrent quota spending. The browser disables date controls while loading and times out after seven minutes. A time-zone change is applied after an active load finishes. The report distinguishes requested/successful days, new provider requests, cache reuse and deferred recovery.

## Evidence and limits

Sporting stakes require source evidence. Unknown broader cultural context is not inferred. If-necessary games use the same scoring rules as equivalent confirmed games. Pending NPB schedule slots never receive invented times or participants. Public calendar entries in the past do not establish that a game is currently live.

## Data isolation

Private keys are read by the server and sent only to their respective providers. Browser assets use a static allowlist. The preview server creates a temporary copy of public assets and injects a conspicuous fictional-data label; it supplies synthetic provider responses and never reads the user's environment file. Production has no preview fallback.
