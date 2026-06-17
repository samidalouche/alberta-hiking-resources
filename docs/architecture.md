# Architecture

This site is a [Nuxt](https://nuxt.com/) application built on
[Nuxt UI](https://ui.nuxt.com/) and the
[Nuxt UI Docs template](https://docs-template.nuxt.dev/), with content authored
in Markdown via [Nuxt Content](https://content.nuxt.com/) and
[Nuxt MDC](https://github.com/nuxt-content/mdc).

For the log of significant decisions, see
[architecture-decision-record.md](architecture-decision-record.md).

## Built with

- [Nuxt UI](https://ui.nuxt.com/)
- [Nuxt UI Docs Template](https://docs-template.nuxt.dev/)
- [Nuxt MDC](https://github.com/nuxt-content/mdc)
- Icons via [Iconify](https://iconify.design/) (browse at
  [icones.js.org](https://icones.js.org/))

## Initial project setup

The project was bootstrapped with:

```bash
npm create nuxt@latest -- -t github:nuxt-ui-templates/docs
```

With the following parameters:

- Package Manager: `pnpm`
- Additional Nuxt modules:
  - Nuxt Devtools (enabled in dev only)
  - [@nuxt/hints](https://nuxt.com/modules/hints)
  - [@nuxtjs/sitemap](https://nuxtseo.com/docs/sitemap/guides/content)

## Divergence from the template

The upstream [nuxt-ui-templates/docs](https://github.com/nuxt-ui-templates/docs)
template is a minimal docs scaffold (a few demo content sections, a single CI
workflow, no deployment or release tooling). This project layers a full
production + GitHub Pages pipeline on top. The major additions and changes:

### Deployment & release pipeline (none of this exists in the template)

- GitHub Pages deploy: `build:pages` script (`nuxt build --preset github_pages`)
  plus the `publish.yml` and `release.yml` workflows (template ships only `ci.yml`).
- [semantic-release](https://github.com/semantic-release/semantic-release)
  (`.releaserc.json` + `@semantic-release/*` devDeps) cuts version tags off `main`,
  which trigger the publish workflow.
- `dist` symlink → `.output/public` for the static bundle.

### SEO / discoverability stack (added modules)

- Added `@nuxtjs/sitemap`, `@nuxtjs/robots`, and `@nuxt/fonts` to `nuxt.config.ts`.
- `server/api/__sitemap__/urls.ts` — custom endpoint, since the sitemap module
  doesn't auto-discover Content v3 pages (wired via `sitemap.sources`).
- `site` block + `runtimeConfig.public.siteUrl`; custom static landing OG image
  (`public/images/og.png`) alongside the ejected `Docs` community OG template.

### Toolchain & dependency management (net-new)

- [mise](https://mise.jdx.dev) (`mise.toml` + `mise.lock`) pins Node/pnpm and acts
  as the task runner (`mise run ci/dev/build`), wrapping the npm scripts.
- Renovate (`renovate.json`, grouped "all" updates, 14-day min age) +
  `renovate-mise-lock.yml` to keep the mise lock in sync.
- `pnpm-workspace.yaml` with `shamefullyHoist` and explicit `allowBuilds`
  (notably `better-sqlite3`, `sharp`); `better-sqlite3` added as a direct dependency.
- Trimmed the template's explicit deps (`@nuxtjs/mdc`, `@vueuse/core`, `minimark`,
  `tailwindcss`, `ufo`, `unist-util-visit`, `simple-icons`/`vscode-icons`),
  relying on transitive resolution + `@iconify-json/lucide`.

### Other `nuxt.config.ts` tweaks

- `vite.build.chunkSizeWarningLimit: 700` + `optimizeDeps.include` for the
  devtools/vueuse chunks.
- `llms.sections` rewritten from the 2 demo sections to the 8 real sections;
  `mcp.name` set to the site title; dropped the template's experimental SQLite flag.
- `content.config.ts` is left unchanged from upstream.

### Content, components & docs

- Content fully replaced: the template's demo docs → the 8 hiking sections.
- Custom content components: `WeatherLocation`, `FacebookGroupLinks`,
  `SafetyWarnings`, `HeroBackground`, `StarsBg`; added `pages/changelog.vue`.
  The template's `AppHeader/Footer/Logo`, `TemplateMenu`, `PageHeaderLinks`, and
  dynamic `[...slug].vue` routing are kept.
- Added [architecture-decision-record.md](architecture-decision-record.md);
  license changed from the template's MIT to CC BY-SA 4.0 (this is content, not code).
