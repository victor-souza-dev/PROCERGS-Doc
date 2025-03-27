import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import { en } from './locales/en';
import { ptbr } from './locales/ptbr';
import include from 'markdown-it-include';
import importHandlerPlugin from './helpers/vite-plugin-import-handler';

export default defineConfig({
  vite: {
    plugins: [importHandlerPlugin()],
    resolve: {
      alias: {
        '@helpers': `${process.cwd()}/.vitepress/helpers`,
      },
    },
  },
  markdown: {
    config(md) {
      md.use(include, {
        root: resolve(__dirname, 'public'),
        includeRe: /:::\s*include\s+(.*?)\s*:::/g,
      });
    },
  },
  srcDir: 'src',
  title: 'PROCERGS',
  description: 'Documentação da Agricultura',
  themeConfig: {
    lastUpdated: {
      text: 'Última atualização',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },
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
