# Weekend Watcher

**[Open interactive demo](https://weekend-watcher-demo.onrender.com)** · [Product notes](docs/PRODUCT.md) · [How it works](docs/ARCHITECTURE.md)

**Know what’s on. Know why it matters.**

A sports-discovery project by **Teddy Hurley**. Choose your dates and viewing hours, then find major occasions and unfamiliar competitions worth exploring. Event details explain the sporting stakes behind each recommendation.

The public demo opens in your browser with no account, download or API setup. It uses **clearly labeled fictional events** to demonstrate the interface, filters and ranking engine. It is not a current sports schedule.

## Try it in a minute

1. **Choose your dates.** Start with Today, This weekend or Next 7 days.
2. **Find a new sport.** Expand Fine-tune your view and try Discover something.
3. **Inspect the recommendation.** Open an event to see the stakes, story tags and how it fits your viewing window.
4. **Adjust the fit.** Change your time zone or viewing hours, filter for championships, or turn on Avoid overlaps.

## Explore the work

- **[Product notes](docs/PRODUCT.md):** the original problem, scope choices, iteration and next learning goal.
- **[Architecture](docs/ARCHITECTURE.md):** calendar rules, ranking and provider integration.
- **[Hosting](docs/HOSTING.md):** the public demo and optional server-hosted live schedules.
- **[Tests](tests/):** ranking, time zones, date boundaries, data handling and server protections.

Live schedules remain available through the Node.js app with your own provider credentials. The public demo and live data are separate modes; a failed live connection never silently becomes fictional events.

<details>
<summary><strong>Run locally, connect live schedules and inspect the implementation</strong></summary>

## Run locally

Requires **Node.js 22 or newer**. There are no runtime packages to install.

```sh
npm start
```

Open **http://127.0.0.1:4317** and connect TheSportsDB on the local setup page. CollegeFootballData is optional for NCAA FBS schedules and rankings. KBO, NPB and MLB official schedules need no additional key.

On macOS, you can also open `Start-Weekend-Watcher.command`. On Windows, use `Start-Weekend-Watcher.cmd`. Keep the terminal open while using the app.

Your credentials stay in the local `.env` file and go only to their respective providers. The release contains an empty `.env.example`, never a configured `.env`.

Follow [Get and connect your own API keys](docs/API-KEYS.md) for account setup, paid/free requirements and troubleshooting. For a key-free first look, use `npm run preview` (fictional fixtures).

## Explore

- Select any inclusive date range from **today through 28 days ahead**, in your chosen time zone. A single day works too.
- Use Today, Next 7 days, This weekend or Next 4 weeks shortcuts. The four-week horizon includes today and the date exactly 28 days ahead.
- Expand **Fine-tune your view** for sports, all seven weekdays, viewing hours, categories and verified story tags.
- **Top picks** ranks major occasions first. **Browse events** sorts by date and time.
- Championships, playoffs and ranked matchups get priority when supported by source evidence. If-necessary games are optional and receive no ranking penalty.
- Pending NPB dates stay separate until the schedule details needed for ranking and time matching are confirmed.

Saved shortcuts roll forward with the calendar. Valid custom ranges persist; expired ranges reset to the next seven days. Weekday filters from older weekend-only versions reset once to all seven days; other supported preferences are retained.

## What the app can tell you

It identifies sporting stakes backed by connected data. It does not yet measure cultural buzz or reliably surface every rivalry, reunion, breakout player or broader story. Unsupported context is withheld. Some competitions, times and participants remain missing; fixtures can change.

The app stops at event discovery. Use an event’s schedule source or your preferred service to take it further. There is no broadcast or streaming guide.

## Develop and verify

```sh
npm run check
npm test
npm run preview
```

`check` verifies JavaScript syntax, JSON, browser assets, HTML IDs and the credential template. Tests cover ranking, exclusions, baseball reconciliation, date limits, daylight saving, cache reuse, bounded recovery and local-server protections. They use fixtures and local HTTP servers, with no real keys or live provider calls.

`preview` starts a separately labelled design preview on **http://127.0.0.1:4319**, using fictional fixtures. It never opens or changes your `.env` and is never a fallback for the live app. Stop it with Control+C. GitHub Actions runs the checks and tests on Node 22 and 24.

## Project layout

| Path | Purpose |
| --- | --- |
| `src/` | Browser interface, calendar rules, ranking and curated catalogue |
| `server/` | Local HTTP server and provider adapters |
| `public/` | Local connection setup |
| `config/` | Provider league aliases |
| `tests/` | Active automated suites, small fixtures and design preview |
| `docs/` | Architecture, coverage, evidence and release notes |

See [Architecture](docs/ARCHITECTURE.md), [Contributing](CONTRIBUTING.md), [Security](SECURITY.md), [Changelog](CHANGELOG.md), and [GitHub setup](docs/GITHUB.md).


</details>

## License and data

This code is **unlicensed** for now. The package is private and marked `UNLICENSED`; no open-source reuse license is granted. Provider data, league names and external sources retain their respective terms. See [Third-party sources](THIRD-PARTY-NOTICES.md).
