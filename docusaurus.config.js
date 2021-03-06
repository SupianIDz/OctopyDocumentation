module.exports = {
  title: 'Octopy Framework',
  tagline: 'A lightweight PHP Framework with Laravel look like',
  url: 'https://framework.octopy.id',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Octopy ID', // Usually your GitHub org/user name.
  projectName: 'OctopyDocumentation', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true,
    prism: {
      defaultLanguage: 'php',
      theme: require('prism-react-renderer/themes/github'),
    },
    algolia: {
        apiKey: 'd509cfa6d69f37b105528cea874322d5',
        indexName: 'octopy_framework',
        algoliaOptions: {},
        placeholder: 'Search...'
    },
    navbar: {
      search: true,
      title: 'Octopy Framework',
      logo: {
        alt: 'Octopy Framework Logo',
        src: 'img/octopy.png',
      },
      links: [
        {
          to: 'docs/introduction', 
          label: 'Documentation', 
          position: 'right'
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'right'
        },
        {
          to: 'https://github.com/OctopyID/OctopyFramework', 
          label: 'Github', 
          position: 'right'
        },
      ],
    },
    footer: {
      logo: {
        alt: 'Octopy Logo',
        src: 'img/footer.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Octopy ID - All Right Reserved.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/OctopyID/OctopyDocumentation/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css?family=Miriam+Libre',
  ],
};
