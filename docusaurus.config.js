module.exports = {
  title: 'open.mp | Documentations',
  tagline: 'Documentations of Open Multiplayer',
  url: 'https://wiki.open.mp/',
  baseUrl: '/',
  favicon: 'public/favicon.ico',
  organizationName: 'openmultiplayer',
  projectName: 'wiki',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Open Multiplayer Documentations',
        src: 'public/logo-light-trans.svg',
      },
      links: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://open.mp/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/openmultiplayer/wiki',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/scripting/resources/start',
            },
            {
              label: 'Functions',
              to: 'docs/scripting/functions',
            },
            {
              label: 'Callbacks',
              to: 'docs/scripting/callbacks',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/hURGKHJ',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/openmultiplayer/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/open_mp',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/openmultiplayer'
            },
            {
              label: 'VK',
              href: 'https://vk.com/open_mp'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
              href: 'https://open.mp/blog'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/openmultiplayer/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Multiplayer Team. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/openmultiplayer/wiki/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    'docusaurus-lunr-search'
  ]
};
