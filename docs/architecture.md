# Architecture

## Runtime flow

View -> Store/Composable -> API -> mock service or remote request client

The default `VITE_API_MODE=mock` path keeps the benchmark deterministic and backend-free. Setting it to `remote` routes API modules through the shared Axios request client.

## Modules

- `src/views`: route-level orchestration.
- `src/components`: reusable UI and forms.
- `src/stores`: application state and async state transitions.
- `src/composables`: reusable behavior.
- `src/api`: backend boundary.
- `src/mocks`: deterministic local backend.
- `src/types`: domain contracts.
- `tests/unit`: component/store behavior.
- `tests/e2e`: browser workflows.

## Benchmark design

The repository intentionally contains realistic cross-file dependencies. Benchmark requirements are stored outside the target repository during formal evaluation so expected answers cannot leak into agent context.
