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
                link: '/ptbr/sistemas/sda/angular/introduction',
              },
              {
                text: 'Inspeção a Campo',
                link: '/ptbr/sistemas/sda/inspecaocampo/introduction',
              },
              {
                text: 'SDA Main',
                link: '/ptbr/sistemas/sda/sdamain/introduction',
              },
              {
                text: 'Sisdevin',
                link: '/ptbr/sistemas/sda/sisdevin/introduction',
              },
              {
                text: 'SDA Rest',
                link: '/ptbr/sistemas/pol/sdarest/introduction',
              },
              { text: 'Lai', link: '/ptbr/sistemas/pol/lai/introduction' },
            ],
          },
          {
            text: 'POL',
            collapsed: true,
            items: [
              {
                text: 'POL Main',
                link: '/ptbr/sistemas/pol/polmain/introduction',
              },
              { text: 'GTA', link: '/ptbr/sistemas/pol/gta/introduction' },
              {
                text: 'Ajuste de Saldo',
                link: '/ptbr/sistemas/pol/ajustesaldo/introduction',
              },
              {
                text: 'Declaração de Rebanho',
                link: '/ptbr/sistemas/pol/declaracaorebanho/introduction',
              },
              {
                text: 'Produtor Rural',
                link: '/ptbr/sistemas/pol/produtorrural/introduction',
              },
              {
                text: 'Agrotóxico',
                link: '/ptbr/sistemas/pol/agrotoxico/introduction',
              },
              {
                text: 'Galope',
                link: '/ptbr/sistemas/pol/galope/introduction',
              },
              {
                text: 'Consultas Públicas',
                link: '/ptbr/sistemas/pol/consultaspublicas/introduction',
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
      message: 'Lançado sob a Licença MIT.',
      copyright: 'Direitos Autorais © 2025 PROCERGS',
    },
  },
};
