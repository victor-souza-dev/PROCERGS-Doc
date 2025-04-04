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
      // {
      //   text: 'Lista de Sistemas',
      //   collapsed: true,
      //   items: [
      //     {
      //       text: 'SDA',
      //       collapsed: true,
      //       items: [
      //         {
      //           text: 'Angular',
      //           link: '/ptbr/projects/sda/angular/introduction',
      //         },
      //         {
      //           text: 'Inspeção a Campo',
      //           link: '/ptbr/projects/sda/inspecaocampo/introduction',
      //         },
      //         {
      //           text: 'SDA Main',
      //           link: '/ptbr/projects/sda/sdamain/introduction',
      //         },
      //         {
      //           text: 'Sisdevin',
      //           link: '/ptbr/projects/sda/sisdevin/introduction',
      //         },
      //         {
      //           text: 'SDA Rest',
      //           link: '/ptbr/projects/pol/sdarest/introduction',
      //         },
      //         { text: 'Lai', link: '/ptbr/projects/pol/lai/introduction' },
      //       ],
      //     },
      //     {
      //       text: 'POL',
      //       collapsed: true,
      //       items: [
      //         {
      //           text: 'POL Main',
      //           link: '/ptbr/projects/pol/polmain/introduction',
      //         },
      //         { text: 'GTA', link: '/ptbr/projects/pol/gta/introduction' },
      //         {
      //           text: 'Ajuste de Saldo',
      //           link: '/ptbr/projects/pol/ajustesaldo/introduction',
      //         },
      //         {
      //           text: 'Declaração de Rebanho',
      //           link: '/ptbr/projects/pol/declaracaorebanho/introduction',
      //         },
      //         {
      //           text: 'Produtor Rural',
      //           link: '/ptbr/projects/pol/produtorrural/introduction',
      //         },
      //         {
      //           text: 'Agrotóxico',
      //           link: '/ptbr/projects/pol/agrotoxico/introduction',
      //         },
      //         {
      //           text: 'Galope',
      //           link: '/ptbr/projects/pol/galope/introduction',
      //         },
      //         {
      //           text: 'Consultas Públicas',
      //           link: '/ptbr/projects/pol/consultaspublicas/introduction',
      //         },
      //       ],
      //     },
      //   ],
      // },
      {
        text: 'POCS',
        collapsed: true,
        items: [
          {
            text: 'CORS',
            link: '/ptbr/pocs/cors',
          },
          {
            text: 'CDN',
            link: '/ptbr/pocs/cdn',
          },
          {
            text: 'MicroFrontend',
            link: '/ptbr/pocs/microfrontend',
          },
          {
            text: 'Testes de Integração Angular',
            link: '/ptbr/pocs/testes-integracao-angular',
          },
          {
            text: 'Webpack 5 vs Esbuild',
            link: '/ptbr/pocs/webpack-vs-esbuild',
          },
          {
            text: 'Eslint',
            link: '/ptbr/pocs/eslint',
          },
          {
            text: 'Pipeline PR',
            link: '/ptbr/pocs/pipeline-pr',
          },
          {
            text: 'Conventional Commits',
            link: '/ptbr/pocs/conventional-commits',
          },
          {
            text: 'Padronização e Versionamento',
            link: '/ptbr/pocs/padronizacao-e-versionamento',
          },
          {
            text: 'Exemplo de Changelog',
            link: '/ptbr/pocs/changelog-example',
          },
          {
            text: 'CLI (Command Line Interface)',
            link: '/ptbr/pocs/command-line-interface',
          },
          {
            text: 'Observabilidade',
            link: '/ptbr/pocs/observabilidade',
          },
          {
            text: 'Documentação Descentralizada e Unificada',
            link: '/ptbr/pocs/vitepress',
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
