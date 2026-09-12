# Ensemble UI tooling scripts

This folder contains the repository's internal build, development, verification, generation, and metadata tooling.

## Design rules

- Existing root script filenames are preserved so current `package.json` commands keep working.
- Terminal output is centralized through `_shared/logger.mjs`.
- Child-process execution is centralized through `_shared/process.mjs`.
- Scripts fail with a non-zero exit code and concise error output.
- Set `EUI_DEBUG=1` to include stack traces on failures.
- ANSI color is used only for interactive terminals and can be disabled with `NO_COLOR=1`.
- Metadata remains a small internal project with a single executable entry point: `metadata/index.ts`.

## Script groups

### Development orchestration

- `angular-orchestrator.mjs`
- `angular-web-orchestrator.mjs`
- `react-orchestrator.mjs`
- `vue-orchestrator.mjs`

### Local development package links

- `link-react-dev-package.mjs`
- `link-vue-dev-package.mjs`

### Build cleanup / preparation

- `clean-output.mjs`
- `delete-old.mjs`
- `fix-angular-export.mjs`

### Generation

- `icon-generator.mjs`
- `metadata/index.ts`

### Build verification

- `verify-angular-apf.mjs`
- `verify-react-build.mjs`
- `verify-vue-build.mjs`

## Shared terminal format

Scripts use consistent terminal states:

- `INFO` general context
- `STEP` active operation
- `RUN` child command
- `OK` successful sub-operation
- `WARN` recoverable concern
- `ERROR` fatal failure
- `DONE` successful command completion

No external logging package is required by these scripts.
