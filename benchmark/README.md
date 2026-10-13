# Benchmark Area

This directory is reserved for controlled FE Agent benchmark cases.

Rules:
- Cases are hidden from the agent unless explicitly supplied as the requirement.
- Each case starts from a known Git base commit/tag.
- Expected files and evaluation criteria belong to the evaluator, not the runtime prompt.
- Do not fix benchmark failures while a benchmark batch is running; finish the batch, then create the next agent version.
