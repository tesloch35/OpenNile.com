#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

routes=(
  "/"
  "/privacy"
  "/terms"
  "/sitemap.xml"
  "/robots.txt"
  "/opengraph-image"
)

echo "QA link check against $BASE_URL"
echo ""

failed=0
for route in "${routes[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL$route")
  if [ "$code" = "200" ]; then
    echo "OK  $route ($code)"
  else
    echo "FAIL $route ($code)"
    failed=1
  fi
done

echo ""
if [ "$failed" -eq 0 ]; then
  echo "All routes returned 200."
else
  echo "Some routes failed."
  exit 1
fi
