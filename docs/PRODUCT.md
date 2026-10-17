# Weekend Watcher — product notes

[Open interactive demo](https://weekend-watcher-demo.onrender.com) · [Code](https://github.com/teddyhurley/weekend-watcher)

**Built by Teddy Hurley.** A sports-discovery prototype for finding the games worth your attention during the time you have available.

## The problem

Following a familiar league is easy. Discovering an important event in a sport you do not already follow takes more work. The idea grew from discovering the AFL Grand Final through an Australian classmate: what other major sporting occasions would be easy to miss?

The question behind the product is simple: **“I have a few hours to watch sport. What would I regret missing?”** A useful answer needs to combine the viewer's local calendar, the importance of the occasion and enough explanation to make an unfamiliar event interesting.

This is a personal product project. Its discovery and iterations came from the originating problem and direct project-owner feedback; independent user research and adoption have not yet been measured.

## Try the product

1. Choose a date range and your local time zone. Add viewing hours if you have a specific window.
2. Compare **Best overall** with **Discover something**, which starts with U.S.-centered sports switched off.
3. Open an event to inspect why it ranks. Use championship, playoff or ranked-matchup tags to narrow the list.
4. Try **Avoid overlaps** to explore a sequence that fits your time.

The public interactive demo uses visibly labeled fictional events. The interface, time-window matching and ranking engine are the same components used by the live app. The examples illustrate the behavior; they do not establish current schedules, live coverage or prediction accuracy.

## Decisions that shaped the product

| Decision | Why it matters |
| --- | --- |
| Begin with available time | A global calendar is only useful if the viewer can find events that fit their own dates and hours. |
| Rank the occasion before small preference adjustments | Championships, elimination games and playoffs should not disappear beneath a convenient ordinary fixture. |
| Explain the recommendation | Story tags and event details let someone evaluate why an unfamiliar game is worth considering. |
| Separate competition admission from event ranking | A major league can qualify for coverage without every one of its games receiving a high score. |
| Make “if necessary” an explicit condition | A conditional playoff game may be important, but it may never happen. Its label and inclusion control are separate from its score. |
| Stop at discovery | Accounts, team-following, watchlists and broadcast listings would expand the product before the core discovery experience is validated. |
| Keep unknown information unknown | Live data gaps, unpublished start times and unsupported story claims remain visible. A provider failure never silently becomes fictional data. |

## Implementation

The browser uses JavaScript for date selection, time-zone conversion, filtering, scoring and event details. A dependency-free Node.js server connects to TheSportsDB, optional CollegeFootballData and official baseball sources. Normalization brings different provider formats into one event model; source evidence determines which story tags can appear.

Both browser and server validate the inclusive range from today through 28 days ahead. Local-date filtering accounts for UTC buffer dates and daylight-saving changes. The server caches overlapping requests and bounds recovery work when a provider limits a response.

The public demo is a separate static build. It includes only approved browser assets, needs no API keys and makes no sports-provider requests. Its fictional dates move with the calendar, so the interaction remains usable when a recruiter opens the link later. Live hosting keeps provider credentials on the server and disables the local credential-setup screens for public visitors.

See [Architecture](ARCHITECTURE.md), [Hosting](HOSTING.md), [Story tags](TAGS.md) and [Coverage admission](COVERAGE-ADMISSION.md) for implementation details.

## Validation and next learning goal

Automated checks exercise ranking and exclusions, local dates and daylight saving, baseball reconciliation, bounded provider recovery and server access restrictions. Demo checks verify that fictional events remain labeled and the static build excludes credentials and server files. These checks establish specific implementation behavior; they do not prove the recommendations are useful to fans.

The next useful test is to watch a small group of sports fans choose a viewing window, find an event outside their usual leagues and explain why they might watch it. That would test whether the ranking and explanations create discovery, and identify which filters help or get in the way. No completion, retention or satisfaction results are claimed yet.

## Development approach

Teddy defined the problem, product scope and ranking priorities and directed the iterations. Development used AI assistance for implementation and debugging, with the code, assumptions and verification work retained for review.
