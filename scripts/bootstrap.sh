#!/usr/bin/env bash
set -euo pipefail
npm install
if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "benchmark base"
  git tag benchmark-v1-base
fi
echo "Benchmark project ready."
