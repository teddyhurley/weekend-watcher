# Third-party sources

No third-party runtime packages, remote fonts, league/team logos or player photographs are bundled. The wordmark is styled text; the sport-neutral glyph is inline SVG. League and team names are textual references, without implying affiliation.

Schedule and ranking data are supplied by:

- [TheSportsDB](https://www.thesportsdb.com/documentation)
- [CollegeFootballData](https://api.collegefootballdata.com/getting-started)
- [MLB](https://www.mlb.com/postseason)
- [KBO](https://www.koreabaseball.com/Schedule/Schedule.aspx)
- [NPB](https://npb.jp/games/)
- [Yokohama DeNA BayStars](https://www.baystars.co.jp/game/schedule/) for supplementary Central League first-stage timing when needed

Each provider retains its own data terms. The application's unlicensed status does not grant rights in provider data. Test fixtures contain small schedule excerpts for adapter regression checks; fixture URLs identify the original sources. Synthetic preview data is labelled and isolated from the live app.

The timezone/country source files in `docs/sources/` retain their original IANA public-domain notices. `src/zones.js` derives the timezone-to-country lookup from those files.
