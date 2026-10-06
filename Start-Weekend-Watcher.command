#!/bin/bash
# Starts a loopback-only local server. Does not install software or transmit your key to ChatGPT.
cd "$(dirname "$0")" || exit 1
if ! command -v node >/dev/null 2>&1; then
  echo "One-time setup: install the LTS release of Node.js from https://nodejs.org/en/download"
  echo "Then close this window and open Start-Weekend-Watcher.command again."
  open "https://nodejs.org/en/download"
  read -r -p "Press Return to close. "
  exit 1
fi
if ! node -e "process.exit(+process.versions.node.split('.')[0]>=22?0:1)"; then
  echo "Please update Node.js to version 22 or newer: https://nodejs.org/en/download"
  read -r -p "Press Return to close. "
  exit 1
fi
# Opening the browser is the only background process; the actual server stays in this Terminal.
(sleep 2; open "http://127.0.0.1:4317") >/dev/null 2>&1 &
node server/server.cjs
