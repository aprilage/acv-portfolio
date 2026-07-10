---
relatedConfigurations: ['package.json']
---

# Changelog

### 2026.07.10.1200

- Add `@mayjournal/fitness` checks and `.fitnessrc.js` configuration.
- Add project `CHANGELOG.md`.
- Install the shipped git hooks via `githooks/` and `core.hooksPath` so the
  fitness checks run on every commit, and add a `fitness` npm script.
- Add a project `cspell.json` that imports the shared dictionary and allows
  the word Vanderslice.
- Add a project `prettier.config.cjs` that re-exports the shared Prettier
  config.
