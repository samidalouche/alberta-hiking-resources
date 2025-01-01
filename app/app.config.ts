export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Alberta Hiking Resources',
      description: 'Find your way in the jungle of FB and Meetup groups.Hiking Partners. Information. Ideas.',
    },
    header: {
      title: 'Alberta Hiking Resources',
      showTitle: true,
      darkModeToggle: false,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/samidalouche/alberta-hiking-resources',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [
        {
          title: 'Star on GitHub',
          icon: 'lucide:star',
          to: 'https://github.com/samidalouche/alberta-hiking-resources',
          target: '_blank',
        },
        {
          title: 'Create Issues',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/samidalouche/alberta-hiking-resources/issues',
          target: '_blank',
        },
        {
          title: 'Contact Us',
          icon: 'lucide:circle-dot',
          to: 'https://www.instagram.com/samidalouche/',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});