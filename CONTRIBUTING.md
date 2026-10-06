# Contributing

Start with `README.md`, then run `npm run check` and `npm test`. No provider credentials are required for tests. Use `npm run preview` for the labelled fictional design preview.

Keep changes focused on event discovery. Preserve curated eligibility, working women's competitions, exhibition exclusions, conditional-game score parity, local dates and source attribution. New tags need verifiable evidence, not inference from team popularity.

For date changes, test both edges of the 28-day horizon, single days, weekdays, midnight offsets, month/year boundaries and daylight-saving transitions. For adapters, test missing fields, cancellations, duplicated rows and source failures. Capture small source fixtures, not account responses or complete website dumps.

Interface changes should preserve keyboard access, visible focus, readable contrast, native date controls and a usable narrow layout. Check real loading, empty and failed states as well as fixtures.

Describe the user-visible behavior and validation in pull requests. Keep credentials, configured `.env` files, generated output and local code backups out of commits. The project remains unlicensed; coordinate contribution and reuse expectations with the owner before contributing.
