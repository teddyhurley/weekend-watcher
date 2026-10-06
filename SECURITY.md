# Security

Weekend Watcher is a local app. It binds to `127.0.0.1` and validates the request host and origin. Only explicitly listed browser assets are served. Setup writes validated keys locally and uses an origin check plus a per-process token. Credentials are never returned in reports or placed in browser code.

The `.env` file contains plaintext credentials and is ignored by Git. Local code backups are ignored too. Never upload a configured installation, `.env`, or logs containing account data. The clean release includes only blank key placeholders.

Do not expose this server publicly or use it as a shared hosted service without implementing authentication, per-user secret storage and appropriate provider access controls.

If you find a vulnerability, use the repository's private vulnerability-reporting channel when enabled, or contact the owner privately. Do not publish credentials or exploitable account details in a public issue. Rotate any credential that has already been exposed.
