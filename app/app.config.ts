export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Alberta Hiking Groups',
      description: 'Find your way in the jungle of FB and Meetup groups.Hiking Partners. Information. Ideas.',
    },
    header: {
      title: 'Alberta Hiking Groups',
      showTitle: true,
      darkModeToggle: false,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/samidalouche/alberta-hiking-groups',
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
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/samidalouche/alberta-hiking-groups',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/samidalouche/alberta-hiking-groups/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});