# v0.13.0 release checks

Validation performed October 5, 2026.

- 56 automated tests pass, including the retained v0.12.2/v0.12.3 regressions, calendar/date-range cases, daylight saving, cache reuse, bounded recovery and local HTTP security behavior.
- Project checks pass: JavaScript syntax, JSON, local browser asset references, unique HTML IDs, credential placeholders and absence of personal filesystem paths.
- In-app browser: seven-day and four-week shortcuts, a custom Tuesday–Thursday range, saved custom dates after reload, reversed-range feedback, all seven weekday filters, Japan/Los Angeles horizon differences, chronological browsing, report version/range/counts and conditional-tag contrast verified.
- Desktop and 390px mobile layouts inspected. Expanded mobile filters have no horizontal overflow. No browser console errors recorded.
- UI checks use the explicitly labelled fictional preview. Automated provider tests use compact captured fixtures. No private provider credentials were read or used, and no complete live TheSportsDB account audit was performed for this release.
- Updater tested against a disposable v0.12.2 installation. Dummy .env contents and permissions remain identical, old code is backed up, current payload matches, and obsolete prototype files are removed from the active code tree.
- Full-project and updater ZIP archives pass integrity checks. Launchers retain executable permissions. Real .env files, credentials, local backups and caches are excluded.
- GitHub CI is included with pinned official actions and Node 22/24 checks. It has not yet run on a remote repository. No repository has been created or published.

The remaining product limitation is source coverage: broader cultural stories and all fixtures are not yet comprehensively captured. Public hosting is outside this local-app release.
