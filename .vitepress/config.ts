import { defineConfig } from 'vitepress';
import { ptbr } from './locales/ptbr';
import { en } from './locales/en';

export default defineConfig({
  srcDir: 'src',
  title: 'PROCERGS',
  description: 'Documentação da Agricultura',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          },
        },
      },
    },
  },
  locales: {
    root: ptbr as any,
    en: en as any,
  },
});
