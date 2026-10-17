# Sharing Weekend Watcher with a link

Weekend Watcher has two distinct ways to share the product. This document describes the supported setup; it does not imply that a live service or any private provider keys have already been configured.

## Recruiter demo: static hosting

The interactive demo is the simplest link to put at the top of the GitHub README and in the repository's Website field. Visitors can explore working filters, time zones, event details and rankings without downloading anything, creating an account or providing a key.

Build the demo with:

```sh
npm run build:demo
```

Publish the resulting `demo-dist` directory with a static host. Its `index.html` uses relative asset paths, so the same bundle can run at a site's root or under a GitHub Pages project path. The demo uses **clearly labeled fictional fixtures**, with no sports-provider requests. It demonstrates product behavior; it is not a current schedule.

Keep the distinction visible in link text: **Try the interactive demo**. A static demo link should not be described as a live schedule.

## Optional live schedule service

The Node server can also run as a public web service. It serves the live interface at `/`, a separate interactive demo at `/demo/`, and read-only health information at `/healthz`. Run the demo build as part of the deployment if you want the `/demo/` link to work.

Use Node.js 22 or newer, build with `npm run build:demo`, start with `npm start`, and set the health-check path to `/healthz`. Configure these values in the host's private environment settings:

| Environment variable | Value or purpose |
| --- | --- |
| `WEEKEND_WATCHER_PUBLIC` | Set to exactly `true` to enable public hosting. Otherwise the server stays local. |
| `PUBLIC_ORIGIN` | The service's exact HTTPS origin, such as `https://YOUR-SERVICE.onrender.com`. Include no page path, credentials, query or fragment. |
| `RENDER_EXTERNAL_URL` | Accepted as the origin fallback when `PUBLIC_ORIGIN` is unset and Render supplies this variable. |
| `PORT` | The listening port assigned by the host. Public mode binds to `0.0.0.0`; the default port is 4317 if no value is supplied. |
| `THESPORTSDB_API_KEY` | Your Premium TheSportsDB key, required for the live global schedule. Enter it privately in the host's environment settings. |
| `CFBD_API_KEY` | Optional CollegeFootballData key for NCAA FBS schedules and ranking context. Enter it privately in the same environment settings. |

Public mode reads provider credentials from the server environment. It does not fall back to a local `.env` file, and it never offers a form for visitors to write credentials. Keep real keys out of source files, README examples, screenshots and GitHub commits.

The configured origin is also the allowed `Host` and browser `Origin`. Requests with unknown hosts or cross-origin headers are rejected. When adding a custom domain, update `PUBLIC_ORIGIN` to the domain you intend visitors to use and arrange any old-domain redirects at the host. The application does not trust arbitrary forwarded host or client-IP headers.

### Behavior before keys are connected

The service can start without a sports-data key. `/healthz` still succeeds because it checks the running app without contacting providers. `/api/status` reports `configured: false` and `localOnly: false`.

The live interface then explains that live schedules are unavailable and offers an explicit button to the fictional-fixture demo. It does not send public visitors to setup. `/api/feed` returns HTTP 503 with `code: "schedule_unavailable"` and `demoUrl: "/demo/"`; it does not return simulated games as if they were live data.

Once the private keys are supplied and the service is restarted, the original provider pipeline supplies live schedules. Provider errors remain errors. If an actual previously fetched schedule is available, the existing stale-cache behavior may show it with an explicit stale/partial warning.

### Public protections and limits

- `/setup`, `/setup.js`, `/setup.css`, `/api/setup-state` and `/api/setup` are disabled in public mode. Visitors cannot discover setup tokens or write a key.
- Static files are served from an explicit allowlist. The server does not expose `.env`, server source, Git metadata, tests, caches or arbitrary files from the project directory. The demo allowlist includes its HTML and required browser JavaScript/CSS only.
- Identical requests reuse an in-flight fetch. Successful full-range responses and overlapping provider-day responses are cached for 15 minutes.
- Public visitors share at most four new range refreshes per 15-minute window, with at least one minute between refresh starts. Cache hits and requests already in flight do not use another refresh slot. A rejected new refresh returns HTTP 429 and a `Retry-After` header.
- Failed refresh attempts also consume a refresh slot. This prevents repeated unauthenticated retries from continuously spending the owner's provider quota.
- The refresh budget is in memory and applies to one Node process. Use a single instance for this portfolio deployment. A multi-instance service would need a shared cache and quota coordinator before scaling.
- The existing single-fetch, date-horizon, provider pacing and bounded recovery protections remain in place. No ranking weights, competition scope or live normalization rules change for hosting.

The static demo has no provider refresh limit because filtering happens entirely in the visitor's browser.

## Local use remains available

Without `WEEKEND_WATCHER_PUBLIC=true`, `npm start` continues to bind to `127.0.0.1` and allows only local host/origin access. The local setup screen and private `.env` workflow remain available. A deployed service's environment settings are separate from the keys saved on your computer.

## Verification

Run both gates before publishing a build:

```sh
npm run check
npm test
```

The hosted tests use fake provider clients only. They cover origin/host checks, blocked setup and secret paths, the demo allowlist, missing-key behavior, live-error handling, shared cache/quota behavior and the unchanged local default. They do not validate a paid subscription or prove current live-feed coverage; that requires a separately configured live service.
