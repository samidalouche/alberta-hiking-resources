#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

cd app

# If not using a custom domain, set NUXT_APP_BASE_URL the repository slug
# https://<user>.github.io/<repository>/
# See https://nuxt.com/deploy/github-pages 
# export NUXT_APP_BASE_URL=/alberta-hiking-resources/

# --prerender is apparently useful to avoid a bunch of 404s
# - https://nuxt.com/docs/api/commands/build
# - https://nuxt.com/deploy/github-pages
npx nuxi build --prerender --preset github_pages

npx gh-pages --dotfiles  --nojekyll -d .output/public