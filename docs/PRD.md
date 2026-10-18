# Weekend Watcher — Product requirements

**Author:** Teddy Hurley · **Version:** v0.13.0 · **Snapshot:** October 17, 2026 (America/Los_Angeles)

[Live schedules](https://weekend-watcher.onrender.com) · [Interactive demo](https://weekend-watcher-demo.onrender.com) · [Product notes](PRODUCT.md) · [Architecture](ARCHITECTURE.md)

## 1. Problem, users and job

Sports fans can follow familiar teams through existing score and news services. Discovering a consequential event in an unfamiliar sport requires knowing what to search for, understanding the stakes and translating its start time into an available viewing window. The idea originated when an Australian classmate introduced Teddy to the AFL Grand Final: how many other major occasions were easy to miss? This is the [originating product hypothesis](PRODUCT.md), not a finding from independent user research.

The primary user is a curious sports fan with limited viewing time and interests beyond one team. A secondary audience is a recruiter or collaborator evaluating the product through a working link. Neither should need an account, a download or their own data subscription to try the hosted experience.

**Job:** “When I have time to watch sport, help me find an event worth making room for, understand why it matters and know how much fits my schedule.”

The product should help someone choose a credible candidate, including one outside their usual leagues, without implying that its catalogue is complete. It supplements existing sports services; its success is a useful discovery, not ownership of the entire viewing journey.

## 2. Objectives and scope

The objectives are to make worldwide events understandable in the viewer’s local calendar, prioritize consequential occasions, explain recommendations with supported facts, and distinguish missing information from an absence of events.

V1 stops at discovery. It excludes accounts, team-following, watchlists, streaming/channel guides, betting recommendations, live scores and outcome predictions. Exhibitions, preseason, scripted entertainment, esports and horse racing are outside the live catalogue. A major domestic league, cup or global competition can qualify without satisfying a universal audience threshold; sourced average audiences of at least 500,000 remain one admission path. Admission does not add ranking points. See [coverage rules](COVERAGE-ADMISSION.md).

### Current operating state

The live service is connected to TheSportsDB, CollegeFootballData and MLB’s official schedule. A connection-report check for October 17–23 returned **605 normalized records**, including adjacent UTC buffer dates. This is not a count of visible recommendations. **99 of 100 eligible competitions were mapped**; mapping indicates a configured source relationship, not complete schedules. The response remained partial: 18 targeted recovery requests were deferred at the cap, and the KBO official source was unavailable.

That first refresh took approximately **191 seconds** between the reported fetch and completion timestamps. This is an observed latency limitation, not a performance target. The server reuses cached ranges, but the first uncached request remains a material friction point.

The separate static demo opens without sports-provider requests and uses conspicuously fictional fixtures. Its 37 weekly scenarios represent 29 men’s competitions, repeat with the calendar and exercise the same interface and ranking rules. Demo use does not establish live-data quality. Implementation: [demo](../src/demo.js), [live service](../server/server.cjs), [hosting](HOSTING.md).

## 3. Main journeys

**Find something for an available window.** Open the live app, begin with the next seven days, select a time zone and viewing hours, then inspect the strongest eligible events. Open a card to understand the stakes and estimated watchable time. Follow its source when ready to investigate further.

**Explore beyond familiar leagues.** Select Discover something, inspect the resulting U.S.-sports setting, and narrow by sport or story. A fan can restore U.S. sports without leaving discovery mode. Compare the ranked picks with the chronological calendar, or enable Avoid overlaps to assemble a feasible sequence.

**Understand an imperfect result.** A partial feed, unknown start time or failed refresh must be distinguishable from filters matching no events. Review the connection report, widen filters or request fewer dates. If live schedules are unavailable, an explicit link offers the labeled demo; fictional events never replace live results silently.

**Evaluate the project quickly.** A recruiter can use either public link, try filters and event details, and reach the code and product documentation. The demo provides a stable demonstration when live latency or source availability prevents a quick exploration.

## 4. Functional requirements and acceptance criteria

These requirements reflect the current [interface](../src/app.js), [calendar rules](../src/dates.js), [ranking engine](../src/engine.js) and [tag contract](TAGS.md). “Implemented” describes behavior; source completeness and user understanding remain separate questions.

| ID | Requirement and acceptance criteria | Current status |
| --- | --- | --- |
| FR-01 | **Direct access.** Public visitors open the interface without authentication or API setup. Missing live credentials produce an unavailable message and explicit demo option. Public setup endpoints cannot accept keys. | Implemented; live and demo URLs available. |
| FR-02 | **Local calendar.** Accept inclusive dates from today through 28 calendar days ahead in the selected zone. Support Today, Next 7 days, This weekend and Next 4 weeks. Reject reversed, invalid, past or excessive ranges in browser and server. The widest range contains 29 dates. | Implemented; boundary and daylight-saving tests. |
| FR-03 | **Viewing availability.** Support weekdays, preset hours and custom overnight windows. An overnight window belongs to its starting day. Allow overlap, starts-within and full-session fit; overlap minimums are 15/30/60/120 minutes, default 30. Display local times and estimated watchable duration. | Implemented; durations remain estimates. |
| FR-04 | **Coverage filters.** Let users search/select eligible sports and competitions and control U.S. inclusion. Live category controls distinguish All, Men’s and Women’s where catalogue data supports them. Filters must not imply equal coverage; the public demo contains men’s examples only. | Implemented; live coverage uneven. |
| FR-05 | **Occasion priority.** Rank eligible events by occasion, matchup and supported story. Championships have a score floor of 95, elimination games 93 and top-ten ranked matchups 87. Time-fit and country-relevance adjustments are capped at 15% and 5%. Watch Score is not an outcome probability. | Implemented; usefulness of weights unvalidated. |
| FR-06 | **Discovery and browsing.** Best overall includes U.S. sports by default. Discover something initially excludes them, preserves the strongest recommendation and adds modest variety bonuses afterward. Browse events sorts by date/time. Every mode retains availability and story constraints. | Implemented. |
| FR-07 | **Explain supported stories.** Cards and details share 13 canonical tags. Multiple tags match Any or All as selected. Live evidence requires a source and validity window; missing evidence suppresses the tag. Ranked matchup requires two qualifying ranks, not one ranked team or a strength estimate. | Implemented contract; broader story enrichment incomplete. |
| FR-08 | **Conditional events.** Hide if-necessary games by default. Enabling them admits the same scoring treatment as equivalent confirmed games. Selecting their story tag also enables inclusion. Keep the condition visible on cards and details. | Implemented. |
| FR-09 | **Fit without overlaps.** Choose up to six non-overlapping event slots using each event’s longest fitting session. Explain that full games may not fit and end times are estimates. Optional major events outside viewing hours appear in a clearly separate shelf. | Implemented; estimate sensitivity remains. |
| FR-10 | **Source and failure states.** Show event source links and a feed report distinguishing imported records, local matches, mapping, errors and deferred work. Label older cached schedules stale. Dates awaiting confirmed times remain separate from ranked picks; never invent a kickoff to make an event fit. | Implemented; recovery/KBO gaps observed. |
| FR-11 | **Remember and recover.** Store supported preferences locally, with separate live/demo state. Roll preset dates forward on return; reset expired custom dates to the next seven days. Provide Reset filters and actionable empty states. | Implemented; no cross-device sync. |

## 5. Data, uncertainty and operating requirements

TheSportsDB provides broad schedules. CollegeFootballData supplies NCAA FBS fixtures and the latest valid CFP/AP poll available for the relevant week, with a bounded fallback to prior polls and a visible notice. Official MLB context replaces broad-feed MLB records when usable. KBO/NPB reconciliation requires matching official fixtures; unpublished NPB times remain pending. Missing player statistics and broader cultural stories must not be generated merely to make recommendations sound compelling. The [normalization architecture](ARCHITECTURE.md) and [evidence contract](TAGS.md) define these boundaries.

Source timestamps and provider status are necessary context, not guarantees of accuracy. Games may move, end or be cancelled. A successful provider response can still omit events, and a mapped competition can have no imported fixtures. Coverage audits must distinguish ingestion correctness, schedule recall and explanation quality.

Nonfunctional requirements are:

- **Bounded provider usage:** reuse ranges and overlapping provider days for 15 minutes; deduplicate identical in-flight requests. Public visitors share four new refresh starts per 15 minutes, at least one minute apart. Return an explicit retry state when the budget is exhausted. This single-process protection constrains concurrent visitors; it is not a scaling architecture.
- **Clear loading and recovery:** show progress/status immediately, prevent duplicate date submissions during loading and preserve explicit timeout/error states. When a refresh fails, an actual cached schedule less than six hours old may be shown, with stale labeling. Proposed performance targets below are not met by the observed cold refresh.
- **Privacy and isolation:** keep provider credentials server-side, disable public credential editing and serve only allowlisted assets. Store preferences in the browser; infer country from the chosen time zone without requesting precise location. Do not introduce visitor accounts or identity analytics for this pilot.
- **Accessible interaction:** maintain labeled controls, keyboard-operable dialogs, visible focus, status announcements and a responsive layout. Existing semantic controls are a foundation; phone and assistive-technology task completion still need validation.

The [hosting requirements](HOSTING.md) and [tests](../tests/) cover implementation safeguards. Passing them does not establish recommendation quality or comprehensive accessibility.

## 6. Proposed success measures and validation

**No adoption, retention, satisfaction or independent research results have been measured.** The following are proposed pilot criteria, not reported performance.

| Measure | Definition and proposed criterion |
| --- | --- |
| Useful discovery | At least 4 of 5 participants identify a plausible event outside their usual leagues and explain its stakes without assistance. Record whether they would actually consider watching. |
| Time to candidate | At least 4 of 5 reach a credible candidate within two minutes after usable results appear. Measure loading separately so UI success cannot hide provider delay. |
| Understanding | All 5 distinguish live from fictional data, interpret local time correctly and recognize that partial coverage can omit events. Misunderstanding triggers a copy/flow revision. |
| Data reliability | Manually audit 30 upcoming fixtures across six supported competitions against official schedules. Report missing fixtures, incorrect times and unsupported tags separately; fix observed errors before expanding promotion. |
| Responsiveness | Proposed target: useful initial results within 10 seconds and cached results within 2 seconds. Record median and slowest pilot observations; the measured 191-second uncached refresh requires further work. |

Recruit five fans with differing usual sports across at least two time zones for 20-minute sessions. Ask each to choose a weekday evening, discover an unfamiliar major occasion and explain a partial-data state. Test both live and fictional surfaces, including one overnight window. Obtain consent before recording sessions; aggregate task observations without adding production tracking. These results should guide the next iteration, not be generalized as market demand.

## 7. Launch, roadmap and open questions

Both public surfaces are available as a portfolio pilot. Broader promotion depends on useful first-load performance, clear uncertainty communication and the fixture audit, rather than mapped-competition counts alone.

**Next:** reduce uncached latency through an evaluated common-range cache or incremental results; investigate KBO availability and bounded-recovery gaps; run the five-person study. Then revise ranking and filter defaults using observed choices. Expand story/player enrichment and uneven competition coverage only when source quality supports it. Accounts and broadcast guides remain outside this roadmap.

Open decisions are whether switching off U.S. sports is the right default for discovery, whether sporting stakes alone persuade unfamiliar fans, and how much coverage and freshness can be delivered within a sustainable shared request budget. Each requires evidence from the pilot rather than additional features by default.
