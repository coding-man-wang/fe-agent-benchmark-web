# Engineering Rules for Coding Agents

This repository is a benchmark target. Treat these rules as project policy.

## Architecture boundaries
- Views orchestrate route-level UI; avoid embedding HTTP details in views.
- API calls belong in `src/api` and should use the shared request client for remote mode.
- Shared state belongs in Pinia stores; local component-only state stays local.
- Reusable async/UI behavior belongs in composables.
- Domain types live in `src/types`.

## Change discipline
- Prefer the smallest change that satisfies the requirement.
- Do not refactor unrelated modules while solving a benchmark case.
- Preserve existing public component/store APIs unless the requirement needs a change.
- Add or update tests when behavior changes.

## Verification
- `npm run lint`
- `npm run typecheck`
- `npm run test`
- `npm run build`
- Use Playwright only when a case requires browser-level behavior.

## Safety
- Never commit credentials or `.env` files.
- Do not bypass the shared request layer in remote API code.
- Do not weaken tests to make a change pass.
