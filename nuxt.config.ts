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
    '@nuxt/fonts',
    // Dev-only: exposes the running app's routes, components, and resolved
    // config to an AI assistant over MCP at /__mcp/sse. Excluded from the
    // prerendered production bundle. includeNuxtDocsMcp is disabled because it
    // injects nuxt.com/mcp as an `sse` server every dev run, but that endpoint
    // speaks Streamable HTTP — we register it as `http` in .mcp.json instead.
    ...(process.env.NODE_ENV !== 'production'
      ? [['nuxt-mcp-dev', { includeNuxtDocsMcp: false }] as [string, Record<string, unknown>]]
      : [])
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
    provider: 'iconify',

    // Without this, only the icons @nuxt/ui registers itself end up in the
    // client bundle; every other icon is fetched from api.iconify.design at
    // render time, which logs "[Icon] failed to load icon" for each one and
    // leaves the site dependent on a third-party host at runtime — a problem
    // for a statically prerendered build. Scanning bundles the icons we
    // actually use instead.
    //
    // `scan: true` keeps @nuxt/icon's default globs, which cover .vue and .md
    // — the latter matters most here, since most of our icons are declared in
    // content frontmatter rather than in components. Setting globInclude to
    // extend that list is tempting but replaces it, pinning a copy of the
    // module's internals that silently goes stale when upstream adds an
    // extension.
    clientBundle: {
      scan: true,

      // Those default globs skip .ts, so nothing in app.config.ts is scanned.
      // These are the icons it declares that nothing else pulls in:
      // i-lucide-history on the header's Changelog link, and i-lucide-circle-dot
      // on the footer's Contact Us link. It declares two others that are covered
      // incidentally and so are not repeated here — i-lucide-github also appears
      // in a scanned .vue file, and i-lucide-star is one of the icons @nuxt/ui
      // registers itself. Nothing guarantees either stays true, but the failure
      // is loud rather than silent: an icon that is neither scanned nor listed
      // warns on every render.
      icons: ['lucide:history', 'lucide:circle-dot']
    }
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

  // `name` is consumed by @nuxtjs/mcp-toolkit (the runtime MCP server). Note
  // nuxt-mcp-dev shares this same `mcp` configKey; its own options are passed
  // inline in the `modules` array above to avoid the shared-key type collision.
  mcp: {
    name: siteTitle
  },

  // Site is deployed as a fully prerendered static bundle to GitHub Pages,
  // so there is no runtime Nitro server to handle dynamic OG image generation.
  // zeroRuntime strips the runtime endpoint and silences the URL-signing warning.
  ogImage: {
    zeroRuntime: true
  }
})
