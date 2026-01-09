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


## Deployment

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

### Initial Project Setup
The project was initially set up using

```bash
npm create nuxt@latest -- -t github:nuxt-ui-templates/docs
```
With the following parameters:
- Package Manager: `pnpm`
- Additional Nuxt modules:
  - [@nuxt/hints](https://nuxt.com/modules/hints)


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

### Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.


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
- [ ] optimize icons?
- [ ] Find ways to DRY the text
  - "Find your way in the jungle of FB and Meetup groups. Hiking Partners. Information. Ideas." everywhere?
  - Github Links
  - landing page vs introduction
    - safety warnings across groups
    - access group / group rules across groups
- [ ] Generate sitemap
- [ ] `index.vue`: need to tweak the OG module, or does everything work as-is?
### Content
- [ ] More appealing graphics, generally
- [ ] Add section on Hikers Gathering?
- [ ] Safety Checklist

