---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'PROCERGS'
  text: 'Agricultura'
  tagline: Documentação técnica, guias e muito mais...
  actions:
    - theme: brand
      text: Começar agora
      link: /ptbr/introduction
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/64621536?v=4',
    name: 'Victor Souza',
    title: 'Criador',
    links: [
      { icon: 'github', link: 'https://github.com/victor-souza-dev' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/62353632?v=4',
    name: 'Marcelo Moraes Aguiar',
    title: 'Contribuidor',
    links: [
      { icon: 'github', link: 'https://github.com/marcelomoraesaguiar' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61767099?v=4',
    name: 'Giovanni Silveira Brasil',
    title: 'Contribuidor',
    links: [
      { icon: 'github', link: 'https://github.com/brasilgiovanni' }
    ]
  }
]
</script>

<VPTeamPageTitle>
  <template #title>
    Heróis
  </template>
  <template #lead>
    O desenvolvimento dessa documentação só foi possível graças aos esforços desses profissionais.
  </template>
  </VPTeamPageTitle>
<VPTeamMembers :members="members" />