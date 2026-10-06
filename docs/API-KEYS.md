# Connect your own API keys

You can explore the labelled fictional preview without accounts or keys using `npm run preview`. The live app requires a TheSportsDB Premium connection. CollegeFootballData is optional.

## What you need

| Source | Purpose | Key requirement |
| --- | --- | --- |
| TheSportsDB | Broad global schedule | Your own paid Premium key |
| CollegeFootballData | NCAA FBS schedule and ranking context | Optional free key, subject to provider usage limits |
| Official MLB, KBO and NPB sources | Baseball schedules and context | No additional key |

Provider links and access information checked October 5, 2026. Check the provider's current pricing before subscribing.

## TheSportsDB

1. Visit [TheSportsDB pricing](https://www.thesportsdb.com/pricing), sign in or create your own account, and choose the Premium plan appropriate for your use. The listed single-developer monthly plan is currently $9/month.
2. After Premium access is active, open your user profile and copy its Premium API key. [TheSportsDB's documentation](https://www.thesportsdb.com/documentation) explains where the key appears.
3. Start Weekend Watcher and open **http://127.0.0.1:4317/setup** on the same computer.
4. Paste the key into **Premium API key**, then select **Connect TheSportsDB**.
5. Wait for confirmation, then return to Weekend Watcher and choose your dates.

The shared free key cannot replace Premium in this build: the app uses a Premium-only v2 league catalogue plus broad schedule calls.

## CollegeFootballData — optional

1. Open the official [free-key request page](https://collegefootballdata.com/key).
2. Enter your email address, select your use where requested, and submit the request. The provider sends the key to your inbox; no credit card is required for this free key.
3. Open Weekend Watcher's local **Connection** page.
4. Paste the key into the CollegeFootballData **Free API key** field and select **Connect college football**.
5. Return to the app and reload your dates. NCAA FBS schedules and available ranking context can now be included.

See the provider's [getting-started guide](https://api.collegefootballdata.com/getting-started) for current access and usage information.

## Where keys are stored

Weekend Watcher validates each key and saves it in `.env` on your computer. The server sends it only to its respective provider. You do not need to edit source files or publish a key to GitHub. Never put a real key in `.env.example`, a screenshot, an issue or a shared ZIP.

## If the connection fails

- **Key rejected:** check for a copying error and, for TheSportsDB, confirm Premium activation.
- **Usage limit reached:** wait and try again, or load a shorter date range. Check your provider account's allowance.
- **Local page will not open:** confirm Node.js 22 or newer is installed and the app's terminal is still running.
- **Connected but an event is missing:** inspect the Connection report. Missing provider coverage, unconfirmed times and filters can all affect results; a valid key does not guarantee complete coverage.

Existing installations keep their keys when using the updater. A fresh clone or clean full-project download contains no working credentials.
