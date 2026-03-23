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



