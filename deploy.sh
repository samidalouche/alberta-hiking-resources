#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

export NUXT_APP_BASE_URL=/alberta-hiking-groups/

cd app
npx nuxt build --preset github_pages
npx gh-pages --dotfiles  --nojekyll -d .output/public