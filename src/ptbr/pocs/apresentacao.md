## CORS

É um mecanismo de segurança implementado pelos navegadores para controlar como
recursos (como APIs, imagens ou scripts) de um domínio podem ser acessados por
uma aplicação em outro domínio. Por padrão, o navegador bloqueia requisições
entre origens diferentes (política de same-origin ), mas o CORS permite que
servidores autorizem explicitamente essas requisições usando cabeçalhos HTTP
específicos

### OWASP

O OWASP (Open Web Application Security Project), ou Projeto Aberto de Segurança
em Aplicações Web, é uma comunidade online que cria e disponibiliza de forma
gratuita artigos, metodologias, documentação, ferramentas e tecnologias no campo
da segurança de aplicações web

E além disso, a OWASP é a principal referência global em segurança de aplicações
web.

### Problema

Todas as nossas APIs estavam com o cabeçalho do CORS chamado “Allow-origin”
habilitado com “\*”.

O que isso significa? Que essas APIs estavam permitindo ser acessadas por
qualquer domínio.

O que isso pode gerar? vazamento de Dados!

## CDN (Content Delivery Network)

Uma CDN é uma rede de servidores espalhados globalmente que armazenam cópias de
arquivos estáticos (como imagens, CSS, JavaScript, vídeos, PDFs, etc.) para
entregá-los aos usuários de forma rápida e eficiente. Em vez de todos os
arquivos serem carregados de um único servidor central, a CDN distribui esses
arquivos por servidores próximos aos usuários finais.

### Vantagens

- Escalabilidade
- Desempenho
- Segurança

## Micro-frontend

É uma arquitetura de desenvolvimento que divide uma aplicação frontend
monolítica em partes menores e independentes, chamadas de "microfrontends". Cada
microfrontend é desenvolvido, testado e implantado separadamente e integrado em
tempo de execução para formar a aplicação completa.

Características :

- Modularidade : Funcionalidades são divididas em módulos autossuficientes (ex.:
  um microfrontend para checkout, outro para catálogo de produtos).
- Tecnologia independente : Cada equipe pode usar frameworks/bibliotecas
  diferentes (React, Angular, Vue, etc.).
- Escalabilidade : Facilita a manutenção e evita o acoplamento entre
  componentes.

### Module Federation

Module Federation é uma técnica (introduzida no Webpack 5) que permite que
aplicações ou microfrontends compartilhem código e dependências em tempo de
execução, evitando duplicação e conflitos.

### Por que atualizar os projetos Angular?

- Segurança: manter as dependências de um projeto atualizadas é muito importante
  para evitar expor vulnerabilidades no sistema.
- Signals: uma nova forma reativa e eficiente de gerenciar estados. Se trata de
  uma abordagem que simplifica bastante as coisas, reduzindo a complexidade do
  código para lidar com estados, principalmente em formulários, aumentando
  consideravelmente a manutenabilidade.
- HMR(Hot Module Replacement): permite atualizações rápidas de módulos durante o
  desenvolvimento sem recarregar a página, otimizando a experiência de
  desenvolvimento.
- Esbuild: é uma ferramenta de transpilação/otimização que complementa o
  processo de build.

### Front-ends

1. (v16) POL main
2. (v16) Consultas Públicas
3. (v16) Galope
4. (v16) GTA
5. (v16) Produtor Rural
6. (v15) Ajuste Saldo
7. (v15) Declaração de Rebanho
8. (v16) SDA main
9. (v16) Agrotóxicos
10. (v16) Template

### Gestão de dependências

Lista de vulnerabilidades em cada sistema: POL main: Consultas Públicas: Galope:
GTA: Produtor Rural: Ajuste Saldo: Declaração de Rebanho: SDA main: Agrotóxicos:
Template:

### Esbuild

Buildando um projeto com Three.js o esbuild se mostrou 105.67x vezes mais veloz
que o WebPack 5.

## Melhorias para o futuro

### Front-end

- Pipeline de PR
- Stage na pipeline de PR com “npm audit” para validação das dependências
- Padronização de código dos projetos com Eslint
- Stage na pipeline de PR para validar o Eslint
- Implementação de Conventional Commits
- CLI para geração de novos projetos
- Arquitetura de Formulário com Signals

### Back-end

- Observabilidade com Grafana
- Padronizar e automatizar versionamento das APIs
- Documentação Descentralizada e unificada

## Referências bibliográficas

### Angular:

- https://nx.dev/blog/using-rspack-with-angular
- https://medium.com/front-end-weekly/angular-frontend-framework-from-version-10-to-version-19-all-changes-published-yet-bed89b53ec8b

### Module Federation:

- https://medium.com/nerd-for-tech/best-5-micro-front-end-frameworks-every-developer-should-know-f9e99a359e79

### Gestão de dependências:

- https://medium.com/nerd-for-tech/best-5-micro-front-end-frameworks-every-developer-should-know-f9e99a359e79
- https://rextopleads.com/blog/tecnologia/projetos-de-ti/processos-de-gestao-de-dependencias-simplificando-o-ecossistema-de-desenvolvimento
- https://www.alura.com.br/artigos/o-que-e-inferno-de-dependencias-como-utilizar-dependabot
- https://medium.com/@ruben.alapont/securing-node-js-projects-an-introduction-to-npm-audit-40712662390f
- https://learn.microsoft.com/pt-br/azure/devops/artifacts/npm/npm-audit?view=azure-devops&tabs=classic

### CORS:

- https://pt.wikipedia.org/wiki/OWASP
- https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- https://www.secureideas.com/blog/2013/02/grab-cors-light.html
- https://stackoverflow.com/questions/12001269/what-security-risks-exist-when-setting-access-control-allow-origin-to-accept-all
- https://projectblack.io/blog/security-risks-of-setting-access-control-allow-origin
- https://medium.com/@ehayushpathak/security-risks-of-cors-e3f4a25c04d7
- https://www.freecodecamp.org/news/exploiting-cors-guide-to-pentesting
