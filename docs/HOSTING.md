# Sharing Weekend Watcher with a link

**[Open the live app](https://weekend-watcher.onrender.com)** · [Fictional sample demo](https://weekend-watcher-demo.onrender.com) · [PRD](PRD.md)

The live app is hosted on Render and is the primary portfolio link. Visitors open it in a browser without downloading JSON, creating an account or entering a key. The separate static demo provides a quick, clearly labeled example when someone wants to explore the interface without a provider request.

## Deployment status and known limits

On October 17, 2026 (Pacific time), the public service reported both TheSportsDB and CollegeFootballData connected, and a seven-day live request returned real provider records. The keys were entered privately in Render's environment settings. The live response reported partial coverage, including deferred recovery on capped dates and an unavailable KBO official source. Mapping a competition is not proof that all of its events are present.

That uncached seven-day request took approximately **191 seconds**. This is an observed first-refresh limitation, not a performance target. Cache reuse reduces repeated provider work, but an uncached date range can still take several minutes. The [PRD](PRD.md) records the dated operational check and proposed performance improvements separately from unmeasured user outcomes.

## Live schedule service

The Node server serves the live interface at `/`, a separate fictional demo at `/demo/`, and read-only health information at `/healthz`. The demo build is included in the deployment so the explicit `/demo/` link works.

Use Node.js 22 or newer. The Render service uses this build command:

```sh
npm run check && env -u THESPORTSDB_API_KEY -u CFBD_API_KEY WEEKEND_WATCHER_PUBLIC=false npm test && npm run build:demo
```

Tests use fake providers and exercise local and public modes themselves. The command removes production provider credentials and resets the public-mode default for the test process only; the running service keeps its configured environment. Start with `npm start`. `/healthz` can be used for an HTTP health check; this deployment currently uses Render's default TCP check, with the HTTP endpoint verified separately.

Configure these values in the host's private environment settings:

| Environment variable | Value or purpose |
| --- | --- |
| `WEEKEND_WATCHER_PUBLIC` | Set to exactly `true` to enable public hosting. Otherwise the server stays local. |
| `PUBLIC_ORIGIN` | The service's exact HTTPS origin, such as `https://YOUR-SERVICE.onrender.com`. Include no page path, credentials, query or fragment. |
| `RENDER_EXTERNAL_URL` | Accepted as the origin fallback when `PUBLIC_ORIGIN` is unset and Render supplies this variable. |
| `PORT` | The listening port assigned by the host. Public mode binds to `0.0.0.0`; the default port is 4317 if no value is supplied. |
| `SKIP_INSTALL_DEPS` | Set to `true` on this dependency-free Render service; the build command runs its checks directly. |
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

## Separate fictional demo: static hosting

Build the demo with:

```sh
npm run build:demo
```

Publish the resulting `demo-dist` directory with a static host. Its `index.html` uses relative asset paths, so the same bundle can run at a site's root or under a GitHub Pages project path. The demo uses **clearly labeled fictional fixtures**, with no sports-provider requests. It demonstrates product behavior; it is not a current schedule.

Keep the distinction visible in link text: **Fictional sample demo**. The static demo has no provider refresh limit because filtering happens entirely in the visitor's browser. It does not replace failed live responses automatically.

## Local use remains available

Without `WEEKEND_WATCHER_PUBLIC=true`, `npm start` continues to bind to `127.0.0.1` and allows only local host/origin access. The local setup screen and private `.env` workflow remain available. A deployed service's environment settings are separate from the keys saved on your computer.

## Verification

Run both gates before publishing a build:

```sh
npm run check
npm test
```

The hosted tests use fake provider clients only. They cover origin/host checks, blocked setup and secret paths, the demo allowlist, missing-key behavior, live-error handling, shared cache/quota behavior and the unchanged local default. They do not validate a paid subscription or prove current live-feed coverage. The dated live request above is a separate operational check and does not establish complete coverage.
