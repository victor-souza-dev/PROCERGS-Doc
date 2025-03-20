import { ILocaleConfig } from '../types';

export const en: ILocaleConfig = {
  label: 'English',
  lang: 'en',
  title: 'DNAT',
  description: 'From Nothing to Everything',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/en/' },
      { text: 'Docs', link: '/en/docs/getting-started' },
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          {
            text: 'Getting Started',
            link: '/en/docs/getting-started',
          },
          {
            text: 'KeePass',
            collapsed: true,
            items: [
              {
                text: 'Introduction',
                link: '/en/docs/keepass/introduction',
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Do-nada-ao-tudo/LibertyChain',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 DNAT',
    },
  },
};
