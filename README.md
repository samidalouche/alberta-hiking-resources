# Alberta Hiking Resources

## Setup

1. Follow [asdf setup instructions](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)
2. Install NodeJS using NodeJS

    ```bash
    asdf plugin add nodejs
    asdf plugin add pnpm
    asdf install nodejs
    asdf reshim
    ```
3. Install dependencies

    ```bash
    pnpm install
    ````
4. Start development server

    Start development server with npm run dev or yarn dev or pnpm run dev 

    ```bash
    pnpm dev
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
pnpm build
```

Locally preview production build:

```bash
pnpm preview
```

### Deploy to Github Pages

Check out [deploy.sh](./deploy.sh)

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

#### Validate Open Graph Image rendering

- [X Card Validator](https://www.schedulethreads.com/tools/twitter-x-card-validator)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)


#### Validate the sitemap
- [Nuxt SEO Sitemap Validation Tool](https://nuxtseo.com/tools/xml-sitemap-validator)

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg



## TODO

### App
- [ ] Investigate usage of `MDX` files to DRY things up (homepage vs intro, etc)
- [ ] optimize icons?
- [ ] Find ways to DRY the text
  - "Find your way in the jungle of FB and Meetup groups. Hiking Partners. Information. Ideas." everywhere?
  - Github Links
  - landing page vs introduction
    - safety warnings across groups
    - access group / group rules across groups
- [ ] Set up [Nuxt Robot and Sitemap plugins](https://nuxtseo.com/). Or maybe the [Nuxt SEO](https://nuxt.com/modules/seo) all-in-one module? (Compatible with Nuxt 4?)
- [ ] `index.vue`: need to tweak the OG module, or does everything work as-is?
### Content
- [ ] More appealing graphics, generally
- [ ] Add section on Hikers Gathering?
- [ ] Safety Checklist
- [ ] Trip Reports: https://tripreports.voyageurtripper.com/blog/

### Build
- [ ] Build docker development image that runs the [vscode backend](https://code.visualstudio.com/blogs/2022/07/07/vscode-server)
- [ ] Set up [StackBlitz / CodeSandbox](https://nuxt.com/docs/4.x/getting-started/installation)

