$ErrorActionPreference = "Stop"
npm install
if (-not (Test-Path ".git")) {
  git init
  git add .
  git commit -m "benchmark base"
  git tag benchmark-v1-base
}
Write-Host "Benchmark project ready."
