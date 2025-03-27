# Introdução ao VitePress

O VitePress é uma ferramenta moderna para geração de sites estáticos, projetada
especialmente para documentações técnicas. Baseado no Vite, ele combina
desempenho, simplicidade e flexibilidade, proporcionando uma experiência
otimizada para desenvolvedores.

Com suporte nativo a Markdown, temas personalizáveis e uma comunidade ativa, o
VitePress é ideal para documentar projetos, bibliotecas ou frameworks de forma
leve e eficiente.

## Por que escolher o VitePress?

O VitePress se destaca por ser construído sobre o Vite, uma das ferramentas de
build mais confiáveis e amplamente adotadas. Alguns números que reforçam sua
relevância:

- **Estrelas no GitHub**: Mais de **71 mil**, refletindo a confiança da
  comunidade.
- **Forks no GitHub**: Mais de **6,5 mil**, indicando um ecossistema
  colaborativo.
- **Downloads no NPM**: **18 milhões** mensais, comprovando sua popularidade.
- **Comunidade no Discord**: **26 mil membros**, oferecendo suporte e troca de
  conhecimento.

## Principais vantagens do VitePress

- **Desempenho Superior**: Builds rápidos e hot module replacement (HMR) durante
  o desenvolvimento.
- **Markdown Avançado**: Suporte a sintaxes estendidas e extensões específicas
  para documentação.
- **Temas Flexíveis**: Personalize o design da sua documentação com facilidade.
- **Versatilidade**: Perfeito para documentar projetos de qualquer escala.

Com o poder do Vite, o VitePress é uma solução confiável e moderna para criar
documentações excepcionais.

## Próximos Passos

Planejo desenvolver um plugin que permita integrar dinamicamente arquivos
Markdown hospedados externamente, tornando o processo de gerenciamento de
documentação ainda mais descentralizado e eficiente.

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://vitepress.dev/vitepress-logo-large.svg',
    name: 'VitePress',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  },
  {
    avatar: 'https://vite.dev/logo.svg',
    name: 'Vite',
    links: [
      { icon: 'github', link: 'https://github.com/vitejs/vite' },
    ]
  },
{
    avatar: 'https://vuejs.org/logo.svg',
    name: 'Vue',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/vue' },
    ]
  },
  {
    avatar: 'https://rollupjs.org/rollup-logo.svg',
    name: 'Rollup',
    links: [
      { icon: 'github', link: 'https://github.com/rollup/rollup' },
    ]
  },
  {
    avatar: 'https://pinia.vuejs.org/logo.png',
    name: 'Pinia',
    links: [
      { icon: 'github', link: 'https://github.com/vuejs/pinia' },
    ]
  },
  {
    avatar: 'https://vueuse.org/favicon.svg',
    name: 'VueUse',
    links: [
      { icon: 'github', link: 'https://github.com/vueuse/vueuse' },
    ]
  },
  {
    avatar: 'https://vitest.dev/logo-shadow.svg',
    name: 'Vitest',
    links: [
      { icon: 'github', link: 'https://vitest.dev' },
    ]
  },
  {
    avatar: 'https://d3js.org/logo.svg',
    name: 'D3',
    links: [
      { icon: 'github', link: 'https://github.com/d3/d3' },
    ]
  },
  {
    avatar: 'https://unocss.dev/logo.svg',
    name: 'UnoCSS',
    links: [
      { icon: 'github', link: 'https://github.com/unocss/unocss' },
    ]
  },
  {
    avatar: 'https://commitlint.js.org/assets/icon.png',
    name: 'Commitlint',
    links: [
      { icon: 'github', link: 'https://github.com/conventional-changelog/commitlint' },
    ]
  }
]
</script>

<VPTeamPageTitle>
  <template #title>
    Exemplos
  </template>
  <template #lead>
    Lista de bibliotecas e frameworks que utilizam VitePress.
  </template>
  </VPTeamPageTitle>
<VPTeamMembers :members="members" />
