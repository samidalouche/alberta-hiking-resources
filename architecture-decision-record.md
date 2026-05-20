# Architecture Decision Record

This file logs the explicit architectural decisions taken on this project. Decisions are appended over time, newest at the bottom, and are not edited retroactively — if a decision is revisited, a new entry is added that supersedes the previous one.

---

## ADR-001 — Use ESLint (not Biome) for linting and formatting

**Date:** 2026-05-19
**Status:** Accepted

### Context

The project needs a linter (and, in time, a formatter) for the TypeScript + Vue + Nuxt codebase. Two realistic options were considered:

- **ESLint** via the first-party [`@nuxt/eslint`](https://eslint.nuxt.com/) module. Nuxt auto-generates a flat config that is aware of pages, layouts, server routes, and the auto-import system, so rules can be tuned against the project's real shape rather than a generic JS/TS baseline.
- **Biome** — a faster, single-binary alternative that bundles linting and formatting. It has no Nuxt-specific integration and no awareness of Nuxt's conventions (auto-imports, virtual modules, etc.).

### Decision

We use **ESLint**, configured through the `@nuxt/eslint` module declared in [nuxt.config.ts](nuxt.config.ts).

### Rationale

- `@nuxt/eslint` is the officially supported, first-party Nuxt tooling. It tracks the framework's conventions automatically as Nuxt evolves.
- It understands auto-imports, route file conventions, and component discovery, so rules like `no-undef` or `no-unused-vars` behave correctly without manual ignore-lists.
- Choosing Biome would mean either disabling rules that don't understand Nuxt's magic, or layering custom configuration to compensate — losing most of Biome's "zero-config" appeal anyway.
- The performance gap is not a pain point at this codebase's size.

### Consequences

- Linting is run via `pnpm lint` (`eslint .`), wired up in CI through `mise run ci`.
- Any rule customization happens in [eslint.config.mjs](eslint.config.mjs); stylistic preferences are set under the `eslint.config.stylistic` block in [nuxt.config.ts](nuxt.config.ts).
- If a future need arises for a dedicated formatter, Prettier is the natural addition; Biome would only be reconsidered if the Nuxt ecosystem ships a first-party Biome integration.
