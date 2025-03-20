import { ILocaleConfig } from '../types';

export const ptbr: ILocaleConfig = {
  label: 'Português',
  lang: 'pt-BR',
  title: 'PROCERGS',
  description: 'Documentação da Agricultura',
  themeConfig: {
    nav: [
      { text: 'Página Inicial', link: '/' },
      { text: 'Docs', link: '/ptbr/introduction' },
    ],
    sidebar: [
      {
        text: 'Introdução',
        link: '/ptbr/introduction',
      },
      {
        text: 'Lista de Sistemas',
        collapsed: true,
        items: [
          {
            text: 'SDA',
            collapsed: true,
            items: [
              {
                text: 'Angular',
                link: '/ptbr/systems/sda/angular/introduction',
              },
              {
                text: 'Inspeção a Campo',
                link: '/ptbr/systems/sda/inspecaocampo/introduction',
              },
              {
                text: 'SDA Main',
                link: '/ptbr/systems/sda/sdamain/introduction',
              },
              {
                text: 'Sisdevin',
                link: '/ptbr/systems/sda/sisdevin/introduction',
              },
              {
                text: 'SDA Rest',
                link: '/ptbr/systems/pol/sdarest/introduction',
              },
              { text: 'Lai', link: '/ptbr/systems/pol/lai/introduction' },
            ],
          },
          {
            text: 'POL',
            collapsed: true,
            items: [
              {
                text: 'POL Main',
                link: '/ptbr/systems/pol/polmain/introduction',
              },
              { text: 'GTA', link: '/ptbr/systems/pol/gta/introduction' },
              {
                text: 'Ajuste de Saldo',
                link: '/ptbr/systems/pol/ajustesaldo/introduction',
              },
              {
                text: 'Declaração de Rebanho',
                link: '/ptbr/systems/pol/declaracaorebanho/introduction',
              },
              {
                text: 'Produtor Rural',
                link: '/ptbr/systems/pol/produtorrural/introduction',
              },
              {
                text: 'Agrotóxico',
                link: '/ptbr/systems/pol/agrotoxico/introduction',
              },
              {
                text: 'Galope',
                link: '/ptbr/systems/pol/galope/introduction',
              },
              {
                text: 'Consultas Públicas',
                link: '/ptbr/systems/pol/consultaspublicas/introduction',
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/victor-souza-dev/PROCERGS-Doc',
      },
    ],
    footer: {
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos Autorais © 2025 PROCERGS',
    },
  },
};
