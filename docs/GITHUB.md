# GitHub handoff

The full-project archive is the clean repository starting point. It includes CI, current documentation, active tests and small fixtures. Your configured installation is for running the app; its code backups and `.env` do not belong in a repository.

1. Unzip the full project into a separate clean folder.
2. Run `npm run check` and `npm test` with Node.js 22 or newer.
3. Initialize the folder as a Git repository, review the files, then create the first commit.
4. Create your GitHub repository and push that clean commit. Choose repository visibility deliberately. No remote repository is created by the release package.
5. The included GitHub Actions workflow runs project checks and tests on pushes and pull requests, without provider secrets.

No open-source license has been selected; the package declares `UNLICENSED`. All bundled workflows have read-only repository permissions and pinned official [checkout](https://github.com/actions/checkout) and [setup-node](https://github.com/actions/setup-node) actions.

GitHub Pages cannot run this local Node server or safely hold the user's provider keys. This release is ready for source hosting and local use. A public hosted product would need a separate deployment and account design.

Before calling the product complete, prioritize better sourced story coverage (rivalries, reunions and emerging players), provider coverage checks, and real-user discovery feedback. The current app supports verified sporting occasions; it is not a comprehensive measure of cultural relevance.
