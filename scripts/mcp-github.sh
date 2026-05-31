#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

if [ ! -f ".env.mcp" ]; then
  echo ".env.mcp is missing" >&2
  exit 1
fi

source scripts/load-env-mcp.sh

GITHUB_MCP_TOKEN="${GITHUB_PERSONAL_ACCESS_TOKEN:-${GITHUB_TOKEN:-}}"

if [ -z "$GITHUB_MCP_TOKEN" ]; then
  echo "GITHUB_PERSONAL_ACCESS_TOKEN or GITHUB_TOKEN is missing in .env.mcp" >&2
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is required for the official GitHub MCP server wrapper" >&2
  exit 1
fi

export GITHUB_PERSONAL_ACCESS_TOKEN="$GITHUB_MCP_TOKEN"
export GITHUB_TOOLSETS="${GITHUB_TOOLSETS:-repos,issues,pull_requests,actions}"

exec docker run -i --rm \
  -e GITHUB_PERSONAL_ACCESS_TOKEN \
  -e GITHUB_TOOLSETS \
  ghcr.io/github/github-mcp-server
