# Shared story taxonomy and evidence

The UI uses the exact labels in `src/tags.js`. No parallel labels such as “Top 6 clash,” “Elite QBs,” “Local team,” or “Star power” are added independently to cards. Canonical IDs are stable across filters and cards.

## Matching

No selected tags = no story restriction. ANY is a union; ALL is an intersection. Unknown selected IDs are removed during state normalization. Duplicate evidence produces one chip. Global and exception shelves share the same predicate as main picks.

## Evidence contract

Every tag has `id` and a nonempty `detail`. Demo events must have `isDemo: true` on the evidence. Non-demo evidence must instead have a verified status, HTTPS source URL, checked time and validity end covering the event start. This structural check is necessary, not proof that a source is true. Production ingestion must source and review the facts, refresh dynamic stories and preserve source provenance.

Ranked matchup additionally requires a ranking-system name, a positive integer cutoff, and two positive integer ranks within it. The first live implementation is NCAA FBS: CFP rankings when a snapshot exists for the requested week, otherwise AP Top 25, with a cutoff of 25. One ranked FBS team may display its rank, but the tag requires both teams to be ranked. Weekend Watcher strength ratings never qualify as an official ranking.

Former player/coach additionally requires a named person and two distinct participant team IDs identifying the former/current teams. A person who coached neither participant cannot create the tag. Whether they are actually expected to participate still needs live verification.

Relegation battle additionally requires `competition.relegation: true`, `relegationEnabled: true`, `riskStatus: 'at-risk'`, at least one participating `riskTeamId`, positive remaining fixtures and a standings timestamp not later than the event. The tag should be withheld without a current, material survival story; the prototype does not estimate relegation probabilities. One threatened team is enough. Already safe/relegated teams and unrelated clubs do not qualify.

Playoffs, championship, elimination, title race and playoff race are separate. A source-backed human or validated competition adapter must classify their actual meaning. A final in a tournament is not a claim that every match in the broader season is a title match. Star players and rematch likewise need verified contextual facts, not generic generated hype. Record Watch is not a filter; exceptional milestones may appear in copy only when separately sourced.

Live anti-hallucination workflow: verified structured inputs → deterministic candidate rules → optional editorial/AI wording → factual/evidence checks → display. Never ask an LLM to invent or independently certify a live tag.

## If necessary

`If necessary` is a status tag, not a claim about quality. It requires provider evidence that the game is conditional. Conditional games are hidden by default because they may never be played; enabling the toggle admits them to the same occasion-first ranking. Selecting the `If necessary` tag automatically enables conditional games so the filter cannot produce a misleading empty state.
