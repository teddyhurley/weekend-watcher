@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install the LTS release of Node.js from https://nodejs.org/en/download, then start again.
 pause
 exit /b 1
)
start "" "http://127.0.0.1:4317"
node server/server.cjs
pause
