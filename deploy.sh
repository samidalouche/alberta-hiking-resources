#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

export NUXT_APP_BASE_URL=/alberta-hiking-resources/

cd app
npx nuxt build --preset github_pages
# npx nuxt generate
npx gh-pages --dotfiles  --nojekyll -d .output/public
