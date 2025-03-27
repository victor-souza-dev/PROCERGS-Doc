---
id: cors
title: CORS
sidebar_label: CORS
lastUpdated: true
---

# CORS

É um mecanismo de segurança implementado pelos navegadores para controlar como
recursos (como APIs, imagens ou scripts) de um domínio podem ser acessados por
uma aplicação em outro domínio. Por padrão, o navegador bloqueia requisições
entre origens diferentes (política de same-origin ), mas o CORS permite que
servidores autorizem explicitamente essas requisições usando cabeçalhos HTTP
específicos

## OWASP

O OWASP (Open Web Application Security Project), ou Projeto Aberto de Segurança
em Aplicações Web, é uma comunidade online que cria e disponibiliza de forma
gratuita artigos, metodologias, documentação, ferramentas e tecnologias no campo
da segurança de aplicações web

E além disso, a OWASP é a principal referência global em segurança de aplicações
web.

## Problema

Todas as nossas APIs estavam com o cabeçalho do CORS chamado “Allow-origin”
habilitado com “\*”.

O que isso significa? Que essas APIs estavam permitindo ser acessadas por
qualquer domínio.

O que isso pode gerar? vazamento de Dados!

## Referências

- https://pt.wikipedia.org/wiki/OWASP
- https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html
- https://www.secureideas.com/blog/2013/02/grab-cors-light.html
- https://stackoverflow.com/questions/12001269/what-security-risks-exist-when-setting-access-control-allow-origin-to-accept-all
- https://projectblack.io/blog/security-risks-of-setting-access-control-allow-origin
- https://medium.com/@ehayushpathak/security-risks-of-cors-e3f4a25c04d7
- https://www.freecodecamp.org/news/exploiting-cors-guide-to-pentesting
