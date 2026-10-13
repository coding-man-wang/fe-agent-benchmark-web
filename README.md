# FE Agent Benchmark Web

A controlled enterprise-style Vue 3 + TypeScript application designed for coding-agent development, integration, and evaluation.

## Stack
- Vue 3 + TypeScript + Vite
- Pinia + Vue Router
- Axios request client
- Local mock service (no backend required)
- Vitest + Vue Test Utils
- Playwright
- ESLint + vue-tsc
- GitHub Actions CI

## Quick start
```bash
npm install
npm run dev
```

## Verification
```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Optional E2E after Playwright browser installation:
```bash
npx playwright install chromium
npm run test:e2e
```

## Benchmark usage
This repository is intended to be cloned/copied into its own Git repository and tagged at a stable base commit, for example:
```bash
git init
git add .
git commit -m "benchmark base"
git tag benchmark-v1-base
```

The `benchmark/` directory contains only benchmark metadata/examples. The agent should receive only the requirement for a case, never its evaluator-only expected answer.

## Architecture
- `src/api`: external-data boundary and shared request client
- `src/mocks`: deterministic mock backend
- `src/stores`: Pinia state management
- `src/composables`: reusable UI/business behavior
- `src/components`: reusable presentation/forms
- `src/views`: route-level application screens
- `tests/unit`: fast component/store tests
- `tests/e2e`: Playwright business-flow tests

The project intentionally has enough cross-file relationships to test retrieval, context building, patch generation, task dependencies, parallel integration, and review revision workflows without needing a production backend.
