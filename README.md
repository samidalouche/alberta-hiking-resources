# Hiking Groups of Alberta

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

    Install dependencies with npm install or yarn install or pnpm install                                                                                                                                                                                              16:09:04

    ```bash
    cd app && pnpm install
    ````
4. Start development server

    Start development server with npm run dev or yarn dev or pnpm run dev 

    ```bash
    cd app && pnpm run dev
    ```

## Deployment

Check deploy.sh for additional notes regarding deployment

1. Generate the static website

    ```bash
    cd app && npx nuxi build --prerender --preset github_pages
    ```
2. Preview the generated static website

    ```bash
    cd app && npx serve .output/public/
    ```
3. Deploy to GH Pages

    ```bash
    cd app && npx gh-pages --dotfiles  --nojekyll -d .output/public
    ```
## The project was initially setup using

```bash
pnpm dlx nuxi@latest init app -t github:ZTL-UwU/shadcn-docs-nuxt-starter
```


## Resources
- shadcn-docs: [Homepage](https://shadcn-docs-nuxt.vercel.app/), [Github](https://github.com/ZTL-UwU/shadcn-docs-nuxt?tab=readme-ov-file)
- components: [shadcn-ui (The original components)](https://ui.shadcn.com/), [shadcn-vue (The Vue port of the components, for use with shadcn-docs)](https://www.shadcn-vue.com/)
- Icons: [smart-icon](https://shadcn-docs-nuxt.vercel.app/components/docs/icon#smart-icon) can use any [iconify](https://iconify.design/) icons

## License

Shield: [![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg


## TODO

- [ ] Add section on Hikers Gathering
- [ ] https://content.nuxt.com/recipes/sitemap
- [ ] Safety Checklist
- [ ] Better presentation of index page of each section
- [ ] More appealing graphics, generally
- [ ] Reorganize order of sections
