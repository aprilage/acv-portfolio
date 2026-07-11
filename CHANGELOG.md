---
relatedConfigurations: ['package.json']
---

# Changelog

### 2026.07.10.1300

- Refresh the portfolio to the "1a" editorial design: type-led hero, an
  experience timeline as the focal section, an education and skills band, a
  compact projects list, and a dark contact footer.
- Rebuild `index.html`, `css/main.css`, and `css/mediaqueries.css` around
  Archivo and Space Mono with a warm light palette, and add responsive
  breakpoints for the layout the prototype left fixed at 1080px.
- Author em dashes as `&mdash;` entities and use small accent circles for the
  experience bullet markers so shipped files stay free of literal em dashes.

### 2026.07.10.1200

- Add `@mayjournal/fitness` checks and `.fitnessrc.js` configuration.
- Add project `CHANGELOG.md`.
- Install the shipped git hooks via `githooks/` and `core.hooksPath` so the
  fitness checks run on every commit, and add a `fitness` npm script.
- Add a project `cspell.json` that imports the shared dictionary and allows
  the word Vanderslice.
- Add a project `prettier.config.cjs` that re-exports the shared Prettier
  config.
- Add a local `no-em-dash` fitness check that fails on em dashes in shipped
  HTML and CSS files.
