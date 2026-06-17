const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.alberta-hiking-resources.org'
const siteTitle = 'Alberta Hiking Resources'
const siteDescription = 'Find your way in the jungle of FB and Meetup groups. Hiking Partners. Information. Ideas.'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/sitemap',
    '@nuxt/content', // must be after @nuxtjs/sitemap
    '@nuxtjs/robots',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@nuxt/fonts'
  ],

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: siteUrl,
    name: siteTitle
  },
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      siteUrl: siteUrl
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  vite: {
    build: {
      // Nuxt UI / Vue framework chunks exceed 500 kB and can't be easily split
      chunkSizeWarningLimit: 700
    },
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  // Public Sans is the brand font (see app/assets/css/main.css). Declare it
  // globally so nuxt-og-image's renderer has every weight the OG template uses —
  // notably 600 (font-semibold), which otherwise falls back to 400/700 with a
  // "weight not configured" warning. nuxt-og-image only sees globally-loaded
  // @nuxt/fonts families (ogImage.fonts is deprecated in v6).
  fonts: {
    families: [
      { name: 'Public Sans', weights: [400, 500, 600, 700], global: true }
    ]
  },

  llms: {
    domain: siteUrl,
    title: siteTitle,
    description: siteDescription,
    full: {
      title: siteTitle,
      description: siteDescription
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Meetup Groups',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/meetup-groups%' }
        ]
      },
      {
        title: 'Hiking & Scrambling Beta',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/hiking-scrambling-beta%' }
        ]
      },
      {
        title: 'Weather & Trail Conditions',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/weather-trail-conditions%' }
        ]
      },
      {
        title: 'Events',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/events%' }
        ]
      },
      {
        title: 'Outdoor Gear',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/outdoor-gear%' }
        ]
      },
      {
        title: 'Hike Organizers',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/hike-organizers%' }
        ]
      },
      {
        title: 'Frequently Asked Questions',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/faq%' }
        ]
      }
    ]
  },

  mcp: {
    name: siteTitle
  },

  // Site is deployed as a fully prerendered static bundle to GitHub Pages,
  // so there is no runtime Nitro server to handle dynamic OG image generation.
  // zeroRuntime strips the runtime endpoint and silences the URL-signing warning.
  ogImage: {
    zeroRuntime: true
  },

  // @nuxtjs/sitemap doesn't auto-discover Nuxt Content v3 pages;
  // we point it to a server endpoint that queries the content collections.
  sitemap: {
    sources: ['/api/__sitemap__/urls']
  }
})
