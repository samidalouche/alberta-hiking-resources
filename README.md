# Alberta Hiking Resources

## Setup

1. Install [mise](https://mise.jdx.dev/getting-started.html)
2. Install tools and dependencies

    ```bash
    mise install
    mise run install
    ```
3. Start development server

    ```bash
    mise run dev
    ```

## Continuous Integration

### Renovate integration

- Installed the [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) in the repository


## Deployment

### Install missing icon sets to bundle them with the app

```
brew install rg
rg "i-[a-z0-9-]+:" .

pnpm i -D \
  @iconify-json/logos \
  @iconify-json/lucide \
  @iconify-json/material-symbols \
  @iconify-json/noto \
  @iconify-json/simple-icons \
  @iconify-json/streamline-emojis \
  @iconify-json/streamline-stickies-color

```

### Preview the production build

Build the application for production:

```bash
mise run build
```

Locally preview production build:

```bash
mise run preview
```

### GitHub Settings

- **Settings > Pages > Source** must be set to **"GitHub Actions"**

### Release

Releases are automated:

1. Push to `main` triggers [semantic-release](https://github.com/semantic-release/semantic-release), which creates a version tag
2. The tag triggers the `publish` workflow, which builds and deploys the site to GitHub Pages

Manual re-trigger:

```bash
gh workflow run publish.yml --ref <tag>
gh run list --workflow publish.yml
```

## Dev Resources

### VsCode Setup
- [Vue Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Initial Project Setup
The project was initially set up using

```bash
npm create nuxt@latest -- -t github:nuxt-ui-templates/docs
```
With the following parameters:
- Package Manager: `pnpm`
- Additional Nuxt modules:
  - Nuxt Devtools (enabled in dev only)
  - [@nuxt/hints](https://nuxt.com/modules/hints)
  - [@nuxtjs/sitemap](https://nuxtseo.com/docs/sitemap/guides/content): not currently activated, couldn't get it to work

#### Divergence from the template

The upstream [nuxt-ui-templates/docs](https://github.com/nuxt-ui-templates/docs)
template is a minimal docs scaffold (a few demo content sections, a single CI
workflow, no deployment or release tooling). This project layers a full
production + GitHub Pages pipeline on top. The major additions and changes:

**Deployment & release pipeline** (none of this exists in the template)
- GitHub Pages deploy: `build:pages` script (`nuxt build --preset github_pages`)
  plus the `publish.yml` and `release.yml` workflows (template ships only `ci.yml`).
- [semantic-release](https://github.com/semantic-release/semantic-release)
  (`.releaserc.json` + `@semantic-release/*` devDeps) cuts version tags off `main`,
  which trigger the publish workflow.
- `dist` symlink → `.output/public` for the static bundle.

**SEO / discoverability stack** (added modules)
- Added `@nuxtjs/sitemap`, `@nuxtjs/robots`, and `@nuxt/fonts` to `nuxt.config.ts`.
- `server/api/__sitemap__/urls.ts` — custom endpoint, since the sitemap module
  doesn't auto-discover Content v3 pages (wired via `sitemap.sources`).
- `site` block + `runtimeConfig.public.siteUrl`; custom static landing OG image
  (`public/images/og.png`) alongside the Takumi-rendered `OgImageDocs.takumi.vue`.

**Toolchain & dependency management** (net-new)
- [mise](https://mise.jdx.dev) (`mise.toml` + `mise.lock`) pins Node/pnpm and acts
  as the task runner (`mise run ci/dev/build`), wrapping the npm scripts.
- Renovate (`renovate.json`, grouped "all" updates, 14-day min age) +
  `renovate-mise-lock.yml` to keep the mise lock in sync.
- `pnpm-workspace.yaml` with `shamefullyHoist` and explicit `allowBuilds`
  (notably `better-sqlite3`, `sharp`); `better-sqlite3` added as a direct dependency.
- Trimmed the template's explicit deps (`@nuxtjs/mdc`, `@vueuse/core`, `minimark`,
  `tailwindcss`, `ufo`, `unist-util-visit`, `simple-icons`/`vscode-icons`),
  relying on transitive resolution + `@iconify-json/lucide`.

**Other `nuxt.config.ts` tweaks**
- `vite.build.chunkSizeWarningLimit: 700` + `optimizeDeps.include` for the
  devtools/vueuse chunks.
- `llms.sections` rewritten from the 2 demo sections to the 8 real sections;
  `mcp.name` set to the site title; dropped the template's experimental SQLite flag.
- `content.config.ts` is left unchanged from upstream.

**Content, components & docs**
- Content fully replaced: the template's demo docs → the 8 hiking sections.
- Custom content components: `WeatherLocation`, `FacebookGroupLinks`,
  `SafetyWarnings`, `HeroBackground`, `StarsBg`; added `pages/changelog.vue`.
  The template's `AppHeader/Footer/Logo`, `TemplateMenu`, `PageHeaderLinks`, and
  dynamic `[...slug].vue` routing are kept.
- Added [architecture-decision-record.md](architecture-decision-record.md);
  license changed from the template's MIT to CC BY-SA 4.0 (this is content, not code).


### Built using Nuxt, Nuxt UI, and the Nuxt UI Docs template

- [Nuxt UI](https://ui.nuxt.com/)
- [Nuxt UI Docs Template](https://docs-template.nuxt.dev/)
- [NUXT MDC](https://github.com/nuxt-content/mdc)


Icon integration:
- [Iconify](https://iconify.design/)
- [Icones.js.org](https://icones.js.org/)

### Nuxt Deployment

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
And specifically, the [Github integration](https://nuxt.com/deploy/github-pages).


### Testing Notes

#### Open Graph Images

Content pages use auto-generated OG images via `nuxt-og-image` and the Takumi renderer. The landing page uses a custom static image (`public/images/og.png`) for a more branded social preview.

To regenerate the landing page OG image:

1. Start the dev server: `mise run dev`
2. Open browser DevTools and set the viewport to 1200x630
3. Navigate to `http://localhost:3000`
4. Take a screenshot of the viewport (DevTools > Run command > "Capture screenshot")
5. Save as `public/images/og.png`

> **Keep a safe margin.** X (Twitter) crops the `summary_large_image` card
> slightly inward, so content flush against the edges (the "Alberta … Resources"
> title) gets clipped. Keep important content within the central ~80% — i.e.
> roughly a 10% margin on every side. A raw viewport screenshot puts the title
> hard against the left edge, so scale the screenshot down to ~80% and center it
> on a 1200×630 white canvas before saving, e.g. with `sips`:
>
> ```bash
> sips -z 1011 1920 og-raw.png --out og-scaled.png
> sips -p 1264 2400 --padColor FFFFFF og-scaled.png --out public/images/og.png
> ```

#### Validate Open Graph Image rendering

- [X Card Validator](https://www.schedulethreads.com/tools/twitter-x-card-validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- Nuxt DevTools > Open Graph
- Open any page in the browser and inspect the `<meta property="og:image">` tag to see the actual generated URL


#### Validate the sitemap and robots.txt
- [Nuxt SEO Sitemap Validation Tool](https://nuxtseo.com/tools/xml-sitemap-validator)

Sitemap:
- http://localhost:3000/sitemap.xml (dev)
- https://www.alberta-hiking-resources.org/sitemap.xml (prod)

robot pages:
- http://localhost:3000/robots.txt (disallows indexing in development)
- http://localhost:3000/robots.txt?mockProductionEnv (allows indexing, for testing the production version of robots.txt in development)
- https://www.alberta-hiking-resources.org/robots.txt (prod)

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg



