# Verification policy

Fast local gate:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

Browser gate when required:

```bash
npx playwright install chromium
npm run test:e2e
```

A task-level verification result proves only the task snapshot. After parallel task integration, the integrated commit must be verified again before it becomes a delivery candidate.
