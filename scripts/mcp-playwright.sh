#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

export DO_NOT_TRACK=1
export npm_config_loglevel=silent

exec npx -y --quiet @playwright/mcp@latest --headless
