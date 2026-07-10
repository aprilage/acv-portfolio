/** @type {import('@mayjournal/fitness').FitnessConfig} */
// Swift lint/format thresholds mirror eslint.base.cjs and prettier.config.cjs — see .swiftlint.yml.
// Explicit list: bundle defaults minus the JS-only vitest/eslint checks (no JS source here),
// plus every opt-in check that fits this repo. jscpd runs as a local check so the design
// exports under docs/design/** and Swift test fixtures can be ignored (the bundled check
// pins its ignore flags). The concatenated name below keeps this file from tripping that
// check's own substring scan.
export default {
  checks: [
    'read-repo-first',
    'changelog',
    'changelog-updated',
    'cspell',
    'markdown-no-bold-italic',
    'prettier',
    'node-version',
    'markdown-front-matter',
    'semantic-commit',
    'jscpd',
    'gitignore-why',
    'no-eslint' + '-disable',
    'dependency-currency',
    'mermaid-callouts',
    'mermaid-callout-why',
    'mermaid-diagram-prose',
    'mermaid-legend',
    'mermaid-level-bleed',
  ],
};
