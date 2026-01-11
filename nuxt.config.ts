// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

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
    public: {
      siteUrl: 'https://www.alberta-hiking-resources.org'
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

  llms: {
    domain: 'https://www.alberta-hiking-resources.org',
    title: 'Alberta Hiking Resources',
    description: 'Find your way in the jungle of FB and Meetup groups. Hiking Partners. Information. Ideas.',
    full: {
      title: 'Alberta Hiking Resources',
      description: 'Find your way in the jungle of FB and Meetup groups. Hiking Partners. Information. Ideas.'
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
    name: 'Alberta Hiking Resources'
  }
})
