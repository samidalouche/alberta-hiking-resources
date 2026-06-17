# Releasing and Publishing

The site is deployed to [GitHub Pages](https://nuxt.com/deploy/github-pages) via
an automated release pipeline.

## Release flow

Releases are automated:

1. A push to `main` triggers [semantic-release](https://github.com/semantic-release/semantic-release)
   (configured in [.releaserc.json](../.releaserc.json) via the
   [`release.yml`](../.github/workflows/release.yml) workflow), which creates a
   version tag.
2. The tag triggers the [`publish.yml`](../.github/workflows/publish.yml)
   workflow, which builds the site (`nuxt build --preset github_pages`) and
   deploys it to GitHub Pages.

## One-time GitHub settings

- **Settings → Pages → Source** must be set to **"GitHub Actions"**.

## Manual re-trigger

```bash
gh workflow run publish.yml --ref <tag>
gh run list --workflow publish.yml
```

## Further reading

- Nuxt [deployment documentation](https://nuxt.com/docs/getting-started/deployment)
- Nuxt [GitHub Pages integration](https://nuxt.com/deploy/github-pages)
