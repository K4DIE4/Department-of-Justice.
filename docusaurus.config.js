module.exports = {
  title: 'Kompendium i Podanie',
  tagline: 'Oficjalna strona Departamentu Sprawiedliwości',
  url: 'https://doj.vercel.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'twoja-org',
  projectName: 'doj-strona',
  themeConfig: {
    navbar: {
      title: 'Departament Sprawiedliwości',
      style: 'dark',
      items: [
        { to: '/kompendium', label: 'Kompendium', position: 'left' },
        { to: '/podanie', label: 'Podanie', position: 'left' },
      ],
    },
    colorMode: { defaultMode: 'dark', disableSwitch: true },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Departament Sprawiedliwości`,
    },
  },
  presets: [['classic', { docs: false, blog: false, theme: { customCss: require.resolve('./src/css/custom.css') } }]],
};
