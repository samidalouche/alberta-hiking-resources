# Building and Testing

## Linting and type checking

```bash
mise run lint        # eslint .
mise run typecheck   # nuxt typecheck
```

## Building

Build the application for production:

```bash
mise run build
```

Locally preview the production build:

```bash
mise run preview
```

## CI pipeline

`mise run ci` runs the same sequence as the [`ci.yml`](../.github/workflows/ci.yml)
workflow: `install` → `lint` → `typecheck` → `build`.

## Bundling icon sets

Icons are pulled from [Iconify](https://iconify.design/) (browse them at
[icones.js.org](https://icones.js.org/)). To bundle every icon set the content
references with the app, find which sets are in use and install them as
dev dependencies:

```bash
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

## Dependency management

[Renovate](https://github.com/apps/renovate/installations/select_target) keeps
dependencies up to date. The GitHub app is installed on the repository; its
behavior is configured in [renovate.json](../renovate.json) (grouped "all"
updates, 14-day minimum age). The [`renovate-mise-lock.yml`](../.github/workflows/renovate-mise-lock.yml)
workflow keeps the mise lock in sync with Renovate's updates.

## Testing notes

See [testing-notes.md](testing-notes.md) for manually validating Open Graph
images, the sitemap, and `robots.txt`.
