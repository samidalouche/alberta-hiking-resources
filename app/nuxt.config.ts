// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],

  // Because of --prerender in deploy.sh, this is probably not needed
  // https://nuxt.com/docs/getting-started/prerendering
  // routeRules: {
  //   "/": { prerender: true },
  //   "/**": { prerender: true },
  // },

  // https://vercel.com/docs/frameworks/nuxt#static-rendering
  // nitro: {
  //   static: true,
  // },
});
