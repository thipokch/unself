// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


// const {remarkMdxDisableExplicitJsx} = require('remark-mdx-disable-explicit-jsx');
// import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx';
const remarkDisableTokenizers = require('remark-disable-tokenizers')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'unself. documentation',
  tagline: 'Make Your Data Yours.',
  url: 'https://doc.unself.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unself', // Usually your GitHub org/user name.
  projectName: 'unself', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: false,
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/thipokch/unself/tree/master/page/guide/',
        // },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./developer/api/static-assets/dartdoc.css')
          ],
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'Unself Docs Logo',
          src: 'img/unself-logo-wordmark--light.svg',
          srcDark: 'img/unself-logo-wordmark--dark.svg',
        },
        items: [
          {
            to: '/',
            label: 'Guide',
            position: 'left',
          },
          {
            to: '/developer',
            label: 'Developer',
            position: 'left',
          },
          {
            href: 'https://unself.app',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://github.com/thipokch/unself',
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
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              // },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/docusaurus',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/docusaurus',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Home',
                href: 'https://unself.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/thipokch/unself',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Unself. Docs built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      '@docusaurus/plugin-google-tag-manager',
      { containerId: 'GTM-KVZ35TZ' }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        // id: 'resource', // omitted => default instance
        path: 'guide',
        routeBasePath: '/', // Serve the docs at the site's root
        sidebarPath: require.resolve('./sidebars.js'),
        sidebarCollapsible: false,
        editUrl:
          'https://github.com/thipokch/unself/tree/master/page/doc/',
        showLastUpdateTime: true,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'developer',
        path: 'developer',
        routeBasePath: '/developer', // Serve the docs at the site's root
        sidebarPath: require.resolve('./sidebars.js'),
        // sidebarCollapsible: false,
        editUrl:
          'https://github.com/thipokch/unself/tree/master/page/doc/',
        exclude: [
          '**/packages/static-assets/**',
        ],
        showLastUpdateTime: true,
      }
    ],
  ],
};

module.exports = config;
