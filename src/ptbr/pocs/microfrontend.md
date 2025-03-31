---
id: microfrontend
title: Microfrontend
sidebar_label: Microfrontend
lastUpdated: true
---

# Índice

[[toc]]

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

## Module Federation

Module Federation é uma técnica (introduzida no Webpack 5) que permite que
aplicações ou microfrontends compartilhem código e dependências em tempo de
execução, evitando duplicação e conflitos.

## Por que atualizar os projetos Angular?

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

## Front-ends

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

## Gestão de dependências

Lista de vulnerabilidades em cada sistema:

Faça uma análise das vulnerabilidades mais graves de cada projeto, falando a
respeito dos riscos associado aquele erro específico

### POL main

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix --force`
Will install @angular-devkit/build-angular@19.2.5, which is a breaking change
node_modules/@babel/runtime
  @angular-devkit/build-angular  0.1000.0-next.0 - 19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of vite
  node_modules/@angular-devkit/build-angular
    ngx-build-plus  13.0.1 || 16.0.0-next.7 - 16.0.0
    Depends on vulnerable versions of @angular-devkit/build-angular
    node_modules/ngx-build-plus

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install @angular-devkit/build-angular@19.2.5, which is a breaking change
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/vite


5 moderate severity vulnerabilities
```

:::

#### Principais Vulnerabilidades

- **@babel/runtime <7.26.10 (Moderada)**
  - Risco : Vulnerabilidade na geração de código com regex ineficiente ao
    transpilar grupos de captura nomeados. Pode levar a DoS (Denial of Service)
    devido ao alto consumo de recursos.
  - Impacto : Afeta ambientes de desenvolvimento, onde o código transpilado é
    gerado.
  - Solução : Atualizar para @babel/runtime@7.26.10 ou superior. A correção
    requer @angular-devkit/build-angular@19.2.5, que pode quebrar a
    compatibilidade.
- **esbuild <=0.24.2 (Moderada)**
  - Risco : O servidor de desenvolvimento do esbuild permite que sites externos
    façam requisições arbitrárias e leiam respostas, expondo dados sensíveis.
  - Impacto : Risco crítico em ambientes de desenvolvimento, permitindo ataques
    de leitura não autorizada .
  - Solução : Atualizar esbuild para versões seguras via npm audit fix --force,
    mesmo com quebra de versão.

### Consultas Públicas

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  0.1000.0-next.0 - 19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of vite
  Depends on vulnerable versions of webpack
  Depends on vulnerable versions of webpack-dev-middleware
  node_modules/@angular-devkit/build-angular

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/braces

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  3.0.0 - 4.6.1
    Depends on vulnerable versions of engine.io
    Depends on vulnerable versions of socket.io-parser
    node_modules/socket.io

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn


esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/@angular-devkit/build-angular/node_modules/vite


follow-redirects  <=1.15.5
Severity: moderate
Follow Redirects improperly handles URLs in the url.parse() function - https://github.com/advisories/GHSA-jchw-25xp-jwwc
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip
  socks  1.0.0 - 2.7.1
  Depends on vulnerable versions of ip
  node_modules/socks

loader-utils  2.0.0 - 2.0.3
Severity: high
loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS) via url variable - https://github.com/advisories/GHSA-3rfm-jhwj-7488
loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS) - https://github.com/advisories/GHSA-hhq3-ff78-jv3g
fix available via `npm audit fix`
node_modules/adjust-sourcemap-loader/node_modules/loader-utils
node_modules/resolve-url-loader/node_modules/loader-utils

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix`
node_modules/minimatch

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

rollup  3.0.0 - 3.29.4
Severity: high
DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS - https://github.com/advisories/GHSA-gcx4-mw62-g8wm
fix available via `npm audit fix`
node_modules/rollup

semver  6.0.0 - 6.3.0
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/istanbul-lib-instrument/node_modules/semver
node_modules/karma-coverage/node_modules/semver
node_modules/make-dir/node_modules/semver

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static

serialize-javascript  6.0.0 - 6.0.1
Severity: moderate
Cross-site Scripting (XSS) in serialize-javascript - https://github.com/advisories/GHSA-76p7-773f-r4q5
fix available via `npm audit fix`
node_modules/serialize-javascript



socket.io-parser  4.0.0 - 4.2.2
Severity: critical
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-qm95-pgcg-qqfq
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-cqmj-92xf-r6r9
fix available via `npm audit fix`
node_modules/socket.io-parser

tar  <6.2.1
Severity: moderate
Denial of service while parsing a tar file due to lack of folders count validation - https://github.com/advisories/GHSA-f5x3-32g6-xq36
fix available via `npm audit fix`
node_modules/tar

ua-parser-js  <0.7.33
Severity: high
ReDoS Vulnerability in ua-parser-js version - https://github.com/advisories/GHSA-fhg7-m89q-25r3
fix available via `npm audit fix`
node_modules/ua-parser-js


webpack  5.0.0-alpha.0 - 5.93.0
Severity: moderate
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

webpack-dev-middleware  <=5.3.3 || 6.0.0 - 6.1.1
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix`
node_modules/webpack-dev-middleware
node_modules/webpack-dev-server/node_modules/webpack-dev-middleware

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  7.0.0 - 7.5.9 || 8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/engine.io/node_modules/ws
node_modules/webpack-dev-server/node_modules/ws
node_modules/ws

33 vulnerabilities (3 low, 11 moderate, 18 high, 1 critical)
```

:::

#### Principais Vulnerabilidades

- **socket.io-parser 4.0.0-4.2.2 (Crítica)**
  - Risco : Validação insuficiente ao decodificar pacotes Socket.IO, permitindo
    execução remota de código (RCE) ou DoS .
  - Impacto : Compromete comunicação em tempo real, com potencial para assumir o
    controle do servidor.
  - Solução : Atualizar para socket.io-parser@4.2.3 ou superior.
- **body-parser <1.20.3 (Alta)**
  - Risco : Vulnerável a DoS quando a codificação URL está habilitada, devido a
    parsing ineficiente de payloads maliciosos.
  - Impacto : Servidor pode ficar inoperante sob ataques de estresse.
  - Solução : Atualizar para body-parser@1.20.3 ou superior.
- **ip <0.0.0 (Alta)**
  - Risco : Classifica incorretamente IPs privados como públicos, permitindo
    SSRF (Server-Side Request Forgery) .
  - Impacto : Acesso não autorizado a recursos internos da rede.
  - Solução : Atualizar ip para versão corrigida.
- **ReDoS em múltiplos pacotes (Alta/Moderada)**
  - **Pacotes Afetados : braces, loader-utils, micromatch, minimatch,
    path-to-regexp, semver, word-wrap, ws.**
    - Risco : Ataques de Regex Denial of Service via entradas maliciosas,
      travando o servidor.
    - Impacto : Disponibilidade comprometida em endpoints críticos (ex:
      autenticação, parsing de URLs).
    - Solução : Atualizar todos os pacotes listados para versões seguras.
  - **http-proxy-middleware <2.0.7 (Alta)**
    - Risco : DoS devido a manipulação inadequada de headers HTTP.
    - Impacto : Proxy pode ser sobrecarregado, derrubando serviços dependentes.
    - Solução : Atualizar para http-proxy-middleware@2.0.7.
  - **webpack-dev-middleware (Alta)**
    - Risco : Path Traversal permite acesso a arquivos arbitrários no servidor
      de desenvolvimento.
    - Impacto : Exposição de credenciais ou código-fonte durante o
      desenvolvimento.
    - Solução : Atualizar para webpack-dev-middleware@6.1.2 ou superior.

### Galope

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  <=19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of critters
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of vite
  Depends on vulnerable versions of webpack
  Depends on vulnerable versions of webpack-dev-middleware
  node_modules/@angular-devkit/build-angular

@babel/traverse  <7.23.2
Severity: critical
Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code - https://github.com/advisories/GHSA-67hx-6x53-jw92
fix available via `npm audit fix`
node_modules/@babel/traverse

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/braces

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  3.0.0 - 4.6.1
    Depends on vulnerable versions of engine.io
    Depends on vulnerable versions of socket.io-parser
    node_modules/socket.io

critters  0.0.17 - 0.0.19
Severity: moderate
Critters Cross-site Scripting Vulnerability - https://github.com/advisories/GHSA-cx3j-qqxj-9597
fix available via `npm audit fix`
node_modules/critters

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn


esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/@angular-devkit/build-angular/node_modules/vite


follow-redirects  <=1.15.5
Severity: moderate
Follow Redirects improperly handles URLs in the url.parse() function - https://github.com/advisories/GHSA-jchw-25xp-jwwc
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip
  socks  1.0.0 - 2.7.1
  Depends on vulnerable versions of ip
  node_modules/socks

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix`
node_modules/minimatch

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

pdfjs-dist  <=4.1.392
Severity: high
PDF.js vulnerable to arbitrary JavaScript execution upon opening a malicious PDF - https://github.com/advisories/GHSA-wgrm-67xf-hhpq
fix available via `npm audit fix --force`
Will install ng2-pdf-viewer@10.4.0, which is outside the stated dependency range
node_modules/pdfjs-dist
  ng2-pdf-viewer  <=10.2.2
  Depends on vulnerable versions of pdfjs-dist
  node_modules/ng2-pdf-viewer

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix`
node_modules/postcss

rollup  3.0.0 - 3.29.4
Severity: high
DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS - https://github.com/advisories/GHSA-gcx4-mw62-g8wm
fix available via `npm audit fix`
node_modules/rollup

semver  <5.7.2 || >=6.0.0 <6.3.1
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/@babel/core/node_modules/semver
node_modules/istanbul-lib-instrument/node_modules/semver
node_modules/karma-coverage/node_modules/semver
node_modules/less/node_modules/semver
node_modules/make-dir/node_modules/semver

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static

serialize-javascript  6.0.0 - 6.0.1
Severity: moderate
Cross-site Scripting (XSS) in serialize-javascript - https://github.com/advisories/GHSA-76p7-773f-r4q5
fix available via `npm audit fix`
node_modules/serialize-javascript



socket.io-parser  4.0.0 - 4.2.2
Severity: critical
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-qm95-pgcg-qqfq
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-cqmj-92xf-r6r9
fix available via `npm audit fix`
node_modules/socket.io-parser

tar  <6.2.1
Severity: moderate
Denial of service while parsing a tar file due to lack of folders count validation - https://github.com/advisories/GHSA-f5x3-32g6-xq36
fix available via `npm audit fix`
node_modules/tar

ua-parser-js  <0.7.33
Severity: high
ReDoS Vulnerability in ua-parser-js version - https://github.com/advisories/GHSA-fhg7-m89q-25r3
fix available via `npm audit fix`
node_modules/ua-parser-js


webpack  5.0.0-alpha.0 - 5.93.0
Severity: moderate
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

webpack-dev-middleware  <=5.3.3 || 6.0.0 - 6.1.1
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix`
node_modules/webpack-dev-middleware
node_modules/webpack-dev-server/node_modules/webpack-dev-middleware

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/engine.io/node_modules/ws
node_modules/ws

37 vulnerabilities (3 low, 13 moderate, 19 high, 2 critical)
```

:::

#### Vulnerabilidades Críticas

a. **@babel/traverse <7.23.2**

- Risco : RCE (Remote Code Execution) devido à compilação de código malicioso.
- Impacto : Atacantes podem executar código arbitrário no servidor,
  comprometendo totalmente a aplicação.
- Solução : Atualizar para @babel/traverse@7.23.2 ou superior via npm audit fix.

b. **socket.io-parser 4.0.0-4.2.2**

- Risco : Validação insuficiente de pacotes Socket.IO permite RCE ou DoS .
- Impacto : Comunicação em tempo real pode ser manipulada para assumir o
  controle do servidor ou travá-lo.
- Solução : Atualizar para socket.io-parser@4.2.3 ou superior.

#### Vulnerabilidades de Alta Severidade

a. **body-parser <1.20.3**

- Risco : DoS via parsing ineficiente de payloads URL-encoded.
- Impacto : Servidor pode travar sob carga maliciosa.
- Solução : Atualizar para body-parser@1.20.3.

b. **cookie <0.7.0**

- Risco : Aceitação de caracteres inválidos em cookies permite falsificação de
  sessão .
- Impacto : Bypass de autenticação ou roubo de sessões.
- Solução : Atualizar para cookie@0.7.0.

c. **ip (versões antigas)**

- Risco : Classificação incorreta de IPs privados como públicos, permitindo SSRF
  (Server-Side Request Forgery) .
- Impacto : Acesso não autorizado a recursos internos da rede.
- Solução : Atualizar ip para a versão corrigida.

d. **http-proxy-middleware <2.0.7**

- Risco : DoS via manipulação de headers HTTP.
- Impacto : Proxy pode ser sobrecarregado, derrubando serviços.
- Solução : Atualizar para http-proxy-middleware@2.0.7.

e. **pdfjs-dist <=4.1.392**

- Risco : Execução de JavaScript arbitrário via PDFs maliciosos.
- Impacto : Comprometimento do cliente ou servidor ao visualizar PDFs.
- Solução : Forçar atualização para ng2-pdf-viewer@10.4.0 (fora do range atual).

### GTA

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix --force`
Will install @angular-devkit/build-angular@19.2.5, which is a breaking change
node_modules/@babel/runtime
  @angular-devkit/build-angular  0.1000.0-next.0 - 19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of vite
  node_modules/@angular-devkit/build-angular

d3-color  <3.1.0
Severity: high
d3-color vulnerable to ReDoS - https://github.com/advisories/GHSA-36jr-mh4h-2g58
fix available via `npm audit fix`
node_modules/d3-color
node_modules/d3-node/node_modules/d3-color
  d3  4.0.0-alpha.1 - 6.7.0
  Depends on vulnerable versions of d3-brush
  Depends on vulnerable versions of d3-color
  Depends on vulnerable versions of d3-interpolate
  Depends on vulnerable versions of d3-scale
  Depends on vulnerable versions of d3-transition
  Depends on vulnerable versions of d3-zoom
  node_modules/d3
  node_modules/d3-node/node_modules/d3
    d3-node  <=3.0.0
    Depends on vulnerable versions of d3
    Depends on vulnerable versions of jsdom
    node_modules/d3-node
  d3-interpolate  0.1.3 - 2.0.1
  Depends on vulnerable versions of d3-color
  node_modules/d3-interpolate
  node_modules/d3-node/node_modules/d3-interpolate
    d3-brush  0.1.0 - 2.1.0
    Depends on vulnerable versions of d3-interpolate
    Depends on vulnerable versions of d3-transition
    node_modules/d3-brush
    node_modules/d3-node/node_modules/d3-brush
    d3-scale  0.1.3 - 3.3.0
    Depends on vulnerable versions of d3-color
    Depends on vulnerable versions of d3-interpolate
    node_modules/d3-node/node_modules/d3-scale
    node_modules/d3-scale
    d3-transition  0.0.7 - 2.0.0
    Depends on vulnerable versions of d3-color
    Depends on vulnerable versions of d3-interpolate
    node_modules/d3-node/node_modules/d3-transition
    node_modules/d3-transition
    d3-zoom  0.0.2 - 2.0.0
    Depends on vulnerable versions of d3-interpolate
    Depends on vulnerable versions of d3-transition
    node_modules/d3-node/node_modules/d3-zoom
    node_modules/d3-zoom

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix --force`
Will install @angular-devkit/build-angular@19.2.5, which is a breaking change
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/@angular-devkit/build-angular/node_modules/vite

hoek  *
Severity: high
hoek subject to prototype pollution via the clone function. - https://github.com/advisories/GHSA-c429-5p7v-vgjp
fix available via `npm audit fix`
node_modules/hoek
  bossy  *
  Depends on vulnerable versions of hoek
  Depends on vulnerable versions of joi
  node_modules/bossy
  joi  0.0.2 - 14.3.1
  Depends on vulnerable versions of hoek
  Depends on vulnerable versions of topo
  node_modules/joi
  topo  *
  Depends on vulnerable versions of hoek
  node_modules/topo

pdfjs-dist  <=4.1.392
Severity: high
PDF.js vulnerable to arbitrary JavaScript execution upon opening a malicious PDF - https://github.com/advisories/GHSA-wgrm-67xf-hhpq
fix available via `npm audit fix --force`
Will install ng2-pdf-viewer@10.4.0, which is outside the stated dependency range
node_modules/pdfjs-dist
  ng2-pdf-viewer  <=10.2.2
  Depends on vulnerable versions of pdfjs-dist
  node_modules/ng2-pdf-viewer

request  *
Severity: moderate
Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
Depends on vulnerable versions of tough-cookie
No fix available
node_modules/request
  jsdom  0.1.20 || 0.2.0 - 16.5.3
  Depends on vulnerable versions of request
  Depends on vulnerable versions of tough-cookie
  node_modules/d3-node/node_modules/jsdom
  phantomjs-prebuilt  *
  Depends on vulnerable versions of request
  node_modules/phantomjs-prebuilt
    svg2png  *
    Depends on vulnerable versions of phantomjs-prebuilt
    Depends on vulnerable versions of yargs
    node_modules/svg2png
      lts  *
      Depends on vulnerable versions of bossy
      Depends on vulnerable versions of d3
      Depends on vulnerable versions of d3-node
      Depends on vulnerable versions of svg2png
      node_modules/lts


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
No fix available
node_modules/d3-node/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie


yargs-parser  <=5.0.0
Severity: moderate
yargs-parser Vulnerable to Prototype Pollution - https://github.com/advisories/GHSA-p9pc-299p-vxgp
No fix available
node_modules/svg2png/node_modules/yargs-parser
  yargs  4.0.0-alpha1 - 7.0.0-alpha.3 || 7.1.1
  Depends on vulnerable versions of yargs-parser
  node_modules/svg2png/node_modules/yargs

27 vulnerabilities (12 moderate, 15 high)
```

:::

#### Vulnerabilidades Críticas/Altas:

- **pdfjs-dist <=4.1.392 (Alta)**
  - Risco : RCE (Remote Code Execution) via PDFs maliciosos.
  - Impacto : Execução arbitrária de código ao visualizar PDFs, permitindo
    acesso total ao servidor ou cliente.
  - Solução : Atualizar ng2-pdf-viewer para 10.4.0 (fora do range atual, requer
    ajustes).
- **request (Moderada/Alta)**
  - Risco : SSRF (Server-Side Request Forgery) , permitindo que o servidor
    acesse recursos internos ou externos não autorizados.
  - Impacto : Exposição de dados internos ou acesso a serviços restritos.
  - Solução : Substituir request por alternativas como axios ou node-fetch, já
    que não há correção disponível.
- **d3-color <3.1.0 (Alta)**
  - Risco : ReDoS (Denial of Service) via regex ineficiente no parsing de cores.
  - Impacto : Travamento do servidor ao processar entradas maliciosas.
  - Solução : Atualizar d3-color para 3.1.0 ou superior.
- **hoek (Alta)**
  - Risco : Poluição de Protótipo , permitindo manipulação de objetos e escalada
    de privilégios.
  - Impacto : Comprometimento de dados ou falhas na lógica da aplicação.
  - Solução : Atualizar dependências que usam hoek (ex: joi, topo).

### Produtor Rural

::: details Log de Vulnerabilidades

```bash
# npm audit report

d3-color  <3.1.0
Severity: high
d3-color vulnerable to ReDoS - https://github.com/advisories/GHSA-36jr-mh4h-2g58
fix available via `npm audit fix`
node_modules/d3-color
node_modules/d3-node/node_modules/d3-color
  d3  4.0.0-alpha.1 - 6.7.0
  Depends on vulnerable versions of d3-brush
  Depends on vulnerable versions of d3-color
  Depends on vulnerable versions of d3-interpolate
  Depends on vulnerable versions of d3-scale
  Depends on vulnerable versions of d3-transition
  Depends on vulnerable versions of d3-zoom
  node_modules/d3
  node_modules/d3-node/node_modules/d3
    d3-node  <=3.0.0
    Depends on vulnerable versions of d3
    Depends on vulnerable versions of jsdom
    node_modules/d3-node
  d3-interpolate  0.1.3 - 2.0.1
  Depends on vulnerable versions of d3-color
  node_modules/d3-interpolate
  node_modules/d3-node/node_modules/d3-interpolate
    d3-brush  0.1.0 - 2.1.0
    Depends on vulnerable versions of d3-interpolate
    Depends on vulnerable versions of d3-transition
    node_modules/d3-brush
    node_modules/d3-node/node_modules/d3-brush
    d3-scale  0.1.3 - 3.3.0
    Depends on vulnerable versions of d3-color
    Depends on vulnerable versions of d3-interpolate
    node_modules/d3-node/node_modules/d3-scale
    node_modules/d3-scale
    d3-transition  0.0.7 - 2.0.0
    Depends on vulnerable versions of d3-color
    Depends on vulnerable versions of d3-interpolate
    node_modules/d3-node/node_modules/d3-transition
    node_modules/d3-transition
    d3-zoom  0.0.2 - 2.0.0
    Depends on vulnerable versions of d3-interpolate
    Depends on vulnerable versions of d3-transition
    node_modules/d3-node/node_modules/d3-zoom
    node_modules/d3-zoom

hoek  *
Severity: high
hoek subject to prototype pollution via the clone function. - https://github.com/advisories/GHSA-c429-5p7v-vgjp
fix available via `npm audit fix`
node_modules/hoek
  bossy  *
  Depends on vulnerable versions of hoek
  Depends on vulnerable versions of joi
  node_modules/bossy
  joi  0.0.2 - 14.3.1
  Depends on vulnerable versions of hoek
  Depends on vulnerable versions of topo
  node_modules/joi
  topo  *
  Depends on vulnerable versions of hoek
  node_modules/topo

request  *
Severity: moderate
Server-Side Request Forgery in Request - https://github.com/advisories/GHSA-p8p7-x288-28g6
Depends on vulnerable versions of tough-cookie
No fix available
node_modules/request
  jsdom  0.1.20 || 0.2.0 - 16.5.3
  Depends on vulnerable versions of request
  Depends on vulnerable versions of tough-cookie
  node_modules/d3-node/node_modules/jsdom
  phantomjs-prebuilt  *
  Depends on vulnerable versions of request
  node_modules/phantomjs-prebuilt
    svg2png  *
    Depends on vulnerable versions of phantomjs-prebuilt
    Depends on vulnerable versions of yargs
    node_modules/svg2png
      lts  *
      Depends on vulnerable versions of bossy
      Depends on vulnerable versions of d3
      Depends on vulnerable versions of d3-node
      Depends on vulnerable versions of svg2png
      node_modules/lts


tough-cookie  <4.1.3
Severity: moderate
tough-cookie Prototype Pollution vulnerability - https://github.com/advisories/GHSA-72xf-g2v4-qvf3
No fix available
node_modules/d3-node/node_modules/tough-cookie
node_modules/request/node_modules/tough-cookie

vite  6.2.0 - 6.2.2
Severity: moderate
Vite bypasses server.fs.deny when using ?raw?? - https://github.com/advisories/GHSA-x574-m823-4x7w
fix available via `npm audit fix`
node_modules/@angular-devkit/build-angular/node_modules/vite
  @angular/build  19.2.1 - 19.2.4 || 20.0.0-next.0 - 20.0.0-next.2
  Depends on vulnerable versions of vite
  node_modules/@angular-devkit/build-angular/node_modules/@angular/build
    @angular-devkit/build-angular  19.2.1 - 19.2.4 || 20.0.0-next.0 - 20.0.0-next.2
    Depends on vulnerable versions of @angular/build
    node_modules/@angular-devkit/build-angular

yargs-parser  <=5.0.0
Severity: moderate
yargs-parser Vulnerable to Prototype Pollution - https://github.com/advisories/GHSA-p9pc-299p-vxgp
No fix available
node_modules/svg2png/node_modules/yargs-parser
  yargs  4.0.0-alpha1 - 7.0.0-alpha.3 || 7.1.1
  Depends on vulnerable versions of yargs-parser
  node_modules/svg2png/node_modules/yargs

23 vulnerabilities (10 moderate, 13 high)
```

:::

#### Vulnerabilidades Críticas/Altas:

- **vite 6.2.0-6.2.2 (Moderada)**
  - Risco : Bypass de restrições de acesso a arquivos (server.fs.deny).
  - Impacto : Leitura não autorizada de arquivos do sistema via parâmetros de
    URL.
  - Solução : Atualizar vite para versão corrigida via npm audit fix.
- **request (Moderada/Alta)**
  - Risco : SSRF , idêntico ao projeto GTA.
  - Solução : Substituir request por bibliotecas mais seguras.
- **d3-color <3.1.0 (Alta)**
  - Risco : ReDoS , igual ao projeto GTA.
  - Solução : Atualizar d3-color para 3.1.0.
- **hoek (Alta)**
  - Risco : Poluição de Protótipo , idêntico ao projeto GTA.
  - Solução : Atualizar dependências relacionadas.

### Ajuste Saldo

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  <=19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of semver
  Depends on vulnerable versions of webpack
  Depends on vulnerable versions of webpack-dev-middleware
  node_modules/@angular-devkit/build-angular

@babel/traverse  <7.23.2
Severity: critical
Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code - https://github.com/advisories/GHSA-67hx-6x53-jw92
fix available via `npm audit fix`
node_modules/@babel/traverse

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/braces

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn


esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild


follow-redirects  <=1.15.5
Severity: moderate
Follow Redirects improperly handles URLs in the url.parse() function - https://github.com/advisories/GHSA-jchw-25xp-jwwc
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip
  socks  1.0.0 - 2.7.1
  Depends on vulnerable versions of ip
  node_modules/socks

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix`
node_modules/minimatch

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix`
node_modules/postcss

semver  <=5.7.1 || 6.0.0 - 6.3.0 || 7.0.0 - 7.5.1
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/@angular-devkit/build-angular/node_modules/@babel/core/node_modules/semver
node_modules/@babel/core/node_modules/semver
node_modules/@babel/helper-compilation-targets/node_modules/semver
node_modules/@babel/helper-define-polyfill-provider/node_modules/semver
node_modules/@babel/plugin-transform-runtime/node_modules/semver
node_modules/@babel/preset-env/node_modules/semver
node_modules/babel-plugin-polyfill-corejs2/node_modules/semver
node_modules/istanbul-lib-instrument/node_modules/semver
node_modules/karma-coverage/node_modules/semver
node_modules/less/node_modules/semver
node_modules/make-dir/node_modules/semver
node_modules/semver
  @angular/cli  9.1.0-next.0 - 14.2.11 || 15.0.0-next.0 - 15.2.8 || 16.0.0-next.0 - 16.1.1
  Depends on vulnerable versions of semver
  node_modules/@angular/cli

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static

serialize-javascript  6.0.0 - 6.0.1
Severity: moderate
Cross-site Scripting (XSS) in serialize-javascript - https://github.com/advisories/GHSA-76p7-773f-r4q5
fix available via `npm audit fix`
node_modules/serialize-javascript


socket.io  3.0.0 - 4.6.1
Severity: moderate
socket.io has an unhandled 'error' event - https://github.com/advisories/GHSA-25hc-qcg6-38wj
fix available via `npm audit fix`
node_modules/socket.io

socket.io-parser  4.0.4 - 4.2.2
Severity: moderate
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-cqmj-92xf-r6r9
fix available via `npm audit fix`
node_modules/socket.io-parser

tar  <6.2.1
Severity: moderate
Denial of service while parsing a tar file due to lack of folders count validation - https://github.com/advisories/GHSA-f5x3-32g6-xq36
fix available via `npm audit fix`
node_modules/tar

webpack  5.0.0-alpha.0 - 5.93.0
Severity: critical
Cross-realm object access in Webpack 5 - https://github.com/advisories/GHSA-hc6q-2mpp-qw7j
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

webpack-dev-middleware  <=5.3.3 || 6.0.0 - 6.1.1
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix`
node_modules/webpack-dev-middleware
node_modules/webpack-dev-server/node_modules/webpack-dev-middleware

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/ws
  socket.io-adapter  2.5.2 - 2.5.4
  Depends on vulnerable versions of ws
  node_modules/socket.io-adapter

33 vulnerabilities (3 low, 12 moderate, 15 high, 3 critical)
```

:::

#### Vulnerabilidades Críticas

- **@babel/traverse <7.23.2**

  - Risco : RCE (Remote Code Execution) devido à compilação de código malicioso.
  - Impacto : Atacantes podem executar código arbitrário no servidor,
    comprometendo totalmente a aplicação.
  - Solução : Atualizar para @babel/traverse@7.23.2 ou superior via npm audit
    fix.

- **webpack 5.0.0-alpha.0-5.93.0**
  - Risco: XSS (Cross-Site Scripting) via DOM Clobbering. Acesso a objetos de
    outros contextos (cross-realm), permitindo manipulação de dados.
  - Impacto : Execução de scripts maliciosos no navegador do cliente, roubo de
    sessões ou dados sensíveis.
  - Solução : Atualizar webpack para versão corrigida.

#### Vulnerabilidades de Alta Severidade

- **body-parser <1.20.3**

  - Risco : DoS (Denial of Service) via parsing ineficiente de payloads
    URL-encoded.
  - Impacto : Servidor pode travar sob carga maliciosa.
  - Solução : Atualizar para body-parser@1.20.3.

- **cookie <0.7.0**

  - Risco : Aceitação de caracteres inválidos em cookies, permitindo
    falsificação de sessão .
  - Impacto : Bypass de autenticação ou roubo de sessões.
  - Solução : Atualizar para cookie@0.7.0.

- **http-proxy-middleware <2.0.7**

  - Risco : DoS via manipulação de headers HTTP.
  - Impacto : Proxy pode ser sobrecarregado, derrubando serviços dependentes.
  - Solução : Atualizar para http-proxy-middleware@2.0.7.

- **ip (versões antigas)**

  - Risco : Classificação incorreta de IPs privados como públicos (SSRF ).
  - Impacto : Acesso não autorizado a recursos internos da rede.
  - Solução : Atualizar ip para versão corrigida.

- **socket.io-parser 4.0.4-4.2.2**

  - Risco : Validação insuficiente de pacotes Socket.IO, permitindo RCE ou DoS .
  - Impacto : Comprometimento da comunicação em tempo real.
  - Solução : Atualizar para socket.io-parser@4.2.3.

- **webpack-dev-middleware <=6.1.1**

  - Risco : Path Traversal no servidor de desenvolvimento.
  - Impacto : Acesso a arquivos sensíveis do sistema.
  - Solução : Atualizar para webpack-dev-middleware@6.1.2.

- **ws 8.0.0-8.17.0**
  - Risco : DoS ao manipular requisições com muitos headers HTTP.
  - Impacto : WebSocket pode ser sobrecarregado, travando comunicação.
  - Solução : Atualizar para ws@8.17.1 ou superior.

### Declaração de Rebanho

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  <=19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of semver
  Depends on vulnerable versions of webpack
  Depends on vulnerable versions of webpack-dev-middleware
  node_modules/@angular-devkit/build-angular

@babel/traverse  <7.23.2
Severity: critical
Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code - https://github.com/advisories/GHSA-67hx-6x53-jw92
fix available via `npm audit fix`
node_modules/@babel/traverse

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/braces

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  3.0.0 - 4.6.1
    Depends on vulnerable versions of engine.io
    Depends on vulnerable versions of socket.io-parser
    node_modules/socket.io

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn


esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild


follow-redirects  <=1.15.5
Severity: moderate
Follow Redirects improperly handles URLs in the url.parse() function - https://github.com/advisories/GHSA-jchw-25xp-jwwc
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip
  socks  1.0.0 - 2.7.1
  Depends on vulnerable versions of ip
  node_modules/socks

loader-utils  2.0.0 - 2.0.3
Severity: high
loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS) via url variable - https://github.com/advisories/GHSA-3rfm-jhwj-7488
loader-utils is vulnerable to Regular Expression Denial of Service (ReDoS) - https://github.com/advisories/GHSA-hhq3-ff78-jv3g
fix available via `npm audit fix`
node_modules/adjust-sourcemap-loader/node_modules/loader-utils
node_modules/resolve-url-loader/node_modules/loader-utils

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix`
node_modules/minimatch

moment-timezone  0.1.0 - 0.5.34
Severity: moderate
Command Injection in moment-timezone - https://github.com/advisories/GHSA-56x4-j7p9-fcf9
Cleartext Transmission of Sensitive Information in moment-timezone - https://github.com/advisories/GHSA-v78c-4p63-2j6c
fix available via `npm audit fix`
node_modules/moment-timezone

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix`
node_modules/postcss

semver  <=5.7.1 || 6.0.0 - 6.3.0 || 7.0.0 - 7.5.1
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/@angular-devkit/build-angular/node_modules/@babel/core/node_modules/semver
node_modules/@angular-devkit/build-angular/node_modules/semver
node_modules/@angular/cli/node_modules/semver
node_modules/@babel/core/node_modules/semver
node_modules/@babel/helper-compilation-targets/node_modules/semver
node_modules/@babel/helper-create-class-features-plugin/node_modules/semver
node_modules/@babel/helper-create-regexp-features-plugin/node_modules/semver
node_modules/@babel/helper-define-polyfill-provider/node_modules/semver
node_modules/@babel/plugin-transform-runtime/node_modules/semver
node_modules/@babel/preset-env/node_modules/semver
node_modules/babel-plugin-polyfill-corejs2/node_modules/semver
node_modules/istanbul-lib-instrument/node_modules/semver
node_modules/karma-coverage/node_modules/semver
node_modules/less/node_modules/semver
node_modules/make-dir/node_modules/semver
node_modules/semver
  @angular/cli  9.1.0-next.0 - 14.2.11 || 15.0.0-next.0 - 15.2.8 || 16.0.0-next.0 - 16.1.1
  Depends on vulnerable versions of semver
  node_modules/@angular/cli

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static

serialize-javascript  6.0.0 - 6.0.1
Severity: moderate
Cross-site Scripting (XSS) in serialize-javascript - https://github.com/advisories/GHSA-76p7-773f-r4q5
fix available via `npm audit fix`
node_modules/serialize-javascript



socket.io-parser  4.0.0 - 4.2.2
Severity: critical
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-qm95-pgcg-qqfq
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-cqmj-92xf-r6r9
fix available via `npm audit fix`
node_modules/socket.io-parser

tar  <6.2.1
Severity: moderate
Denial of service while parsing a tar file due to lack of folders count validation - https://github.com/advisories/GHSA-f5x3-32g6-xq36
fix available via `npm audit fix`
node_modules/tar

ua-parser-js  <0.7.33
Severity: high
ReDoS Vulnerability in ua-parser-js version - https://github.com/advisories/GHSA-fhg7-m89q-25r3
fix available via `npm audit fix`
node_modules/ua-parser-js

webpack  5.0.0-alpha.0 - 5.93.0
Severity: moderate
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

webpack-dev-middleware  <=5.3.3 || 6.0.0 - 6.1.1
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix`
node_modules/webpack-dev-middleware
node_modules/webpack-dev-server/node_modules/webpack-dev-middleware

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/engine.io/node_modules/ws
node_modules/ws

35 vulnerabilities (3 low, 13 moderate, 17 high, 2 critical)
```

:::

#### Vulnerabilidades Críticas/Altas:

- **@babel/traverse <7.23.2 (Crítica)**

  - Risco : Execução arbitrária de código durante a compilação de código
    malicioso.
  - Impacto : Um atacante pode injetar código malicioso no processo de build,
    levando a comprometimento total do sistema.
  - Solução : Atualizar para @babel/traverse@7.23.2 ou superior via npm audit
    fix.

- **socket.io-parser 4.0.0-4.2.2 (Crítica)**

  - Risco : Validação insuficiente ao decodificar pacotes Socket.IO.
  - Impacto : Possível execução remota de código (RCE) ou DoS através de pacotes
    manipulados.
  - Solução : Atualizar para socket.io-parser@4.2.3 ou superior.

- **body-parser <1.20.3 (Alta)**

  - Risco : DoS via URL encoding malicioso.
  - Impacto : Sobrecarrega o servidor com requisições que consomem recursos
    excessivos.
  - Solução : Atualizar para body-parser@1.20.3.

- **cookie <0.7.0 (Alta)**

  - Risco : Aceita caracteres inválidos em nomes de cookies e domínios.
  - Impacto : Possível roubo de sessão ou XSS (Cross-Site Scripting).
  - Solução : Atualizar para cookie@0.7.0.

- **http-proxy-middleware <2.0.7 (Alta)**

  - Risco : DoS em proxies.
  - Impacto : Disponibilidade comprometida por requisições maliciosas.
  - Solução : Atualizar para http-proxy-middleware@2.0.7.

- **ip \* (Alta)**

  - Risco : Classificação incorreta de IPs públicos/privados, permitindo SSRF.
  - Impacto : Acesso não autorizado a recursos internos da rede.
  - Solução : Atualizar ip para versão corrigida.

- **send <0.19.0 (Alta)**
  - Risco : Injeção de template que leva a XSS.
  - Impacto : Execução de scripts maliciosos via caminhos de arquivos
    manipulados.
  - Solução : Atualizar para send@0.19.0.

### SDA main

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  <=19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of postcss
  Depends on vulnerable versions of semver
  Depends on vulnerable versions of vite
  Depends on vulnerable versions of webpack
  Depends on vulnerable versions of webpack-dev-middleware
  node_modules/@angular-devkit/build-angular

@babel/traverse  <7.23.2
Severity: critical
Babel vulnerable to arbitrary code execution when compiling specifically crafted malicious code - https://github.com/advisories/GHSA-67hx-6x53-jw92
fix available via `npm audit fix`
node_modules/@babel/traverse

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

braces  <3.0.3
Severity: high
Uncontrolled resource consumption in braces - https://github.com/advisories/GHSA-grv7-fg5c-xmjg
fix available via `npm audit fix`
node_modules/braces

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  3.0.0 - 4.6.1
    Depends on vulnerable versions of engine.io
    Depends on vulnerable versions of socket.io-parser
    node_modules/socket.io

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn


esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/@angular-devkit/build-angular/node_modules/vite


follow-redirects  <=1.15.5
Severity: moderate
Follow Redirects improperly handles URLs in the url.parse() function - https://github.com/advisories/GHSA-jchw-25xp-jwwc
follow-redirects' Proxy-Authorization header kept across hosts - https://github.com/advisories/GHSA-cxjh-pqwp-8mfp
fix available via `npm audit fix`
node_modules/follow-redirects

http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

ip  *
Severity: high
NPM IP package incorrectly identifies some private IP addresses as public - https://github.com/advisories/GHSA-78xj-cgh5-2h22
ip SSRF improper categorization in isPublic - https://github.com/advisories/GHSA-2p57-rm9w-gvfp
fix available via `npm audit fix`
node_modules/ip
  socks  1.0.0 - 2.7.1
  Depends on vulnerable versions of ip
  node_modules/socks

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

minimatch  <3.0.5
Severity: high
minimatch ReDoS vulnerability - https://github.com/advisories/GHSA-f8q6-p94x-37v3
fix available via `npm audit fix`
node_modules/minimatch

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

postcss  <8.4.31
Severity: moderate
PostCSS line return parsing error - https://github.com/advisories/GHSA-7fh5-64p2-3v2j
fix available via `npm audit fix`
node_modules/postcss

rollup  3.0.0 - 3.29.4
Severity: high
DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS - https://github.com/advisories/GHSA-gcx4-mw62-g8wm
fix available via `npm audit fix`
node_modules/rollup

semver  <=5.7.1 || 6.0.0 - 6.3.0 || 7.0.0 - 7.5.1
Severity: high
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
semver vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-c2qf-rxjj-qqgw
fix available via `npm audit fix`
node_modules/@angular-devkit/build-angular/node_modules/@babel/core/node_modules/semver
node_modules/@angular-devkit/build-angular/node_modules/semver
node_modules/@angular/cli/node_modules/semver
node_modules/@babel/core/node_modules/semver
node_modules/@babel/helper-compilation-targets/node_modules/semver
node_modules/@babel/helper-create-class-features-plugin/node_modules/semver
node_modules/@babel/helper-create-regexp-features-plugin/node_modules/semver
node_modules/@babel/helper-define-polyfill-provider/node_modules/semver
node_modules/@babel/plugin-transform-runtime/node_modules/semver
node_modules/@babel/preset-env/node_modules/semver
node_modules/babel-plugin-polyfill-corejs2/node_modules/semver
node_modules/istanbul-lib-instrument/node_modules/semver
node_modules/karma-coverage/node_modules/semver
node_modules/less/node_modules/semver
node_modules/make-dir/node_modules/semver
node_modules/semver
  @angular/cli  9.1.0-next.0 - 14.2.11 || 15.0.0-next.0 - 15.2.8 || 16.0.0-next.0 - 16.1.1
  Depends on vulnerable versions of semver
  node_modules/@angular/cli

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static

serialize-javascript  6.0.0 - 6.0.1
Severity: moderate
Cross-site Scripting (XSS) in serialize-javascript - https://github.com/advisories/GHSA-76p7-773f-r4q5
fix available via `npm audit fix`
node_modules/serialize-javascript



socket.io-parser  4.0.0 - 4.2.2
Severity: critical
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-qm95-pgcg-qqfq
Insufficient validation when decoding a Socket.IO packet - https://github.com/advisories/GHSA-cqmj-92xf-r6r9
fix available via `npm audit fix`
node_modules/socket.io-parser

tar  <6.2.1
Severity: moderate
Denial of service while parsing a tar file due to lack of folders count validation - https://github.com/advisories/GHSA-f5x3-32g6-xq36
fix available via `npm audit fix`
node_modules/tar

ua-parser-js  <0.7.33
Severity: high
ReDoS Vulnerability in ua-parser-js version - https://github.com/advisories/GHSA-fhg7-m89q-25r3
fix available via `npm audit fix`
node_modules/ua-parser-js


webpack  5.0.0-alpha.0 - 5.93.0
Severity: moderate
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

webpack-dev-middleware  <=5.3.3 || 6.0.0 - 6.1.1
Severity: high
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
Path traversal in webpack-dev-middleware - https://github.com/advisories/GHSA-wr3j-pwj9-hqq6
fix available via `npm audit fix`
node_modules/webpack-dev-middleware
node_modules/webpack-dev-server/node_modules/webpack-dev-middleware

word-wrap  <1.2.4
Severity: moderate
word-wrap vulnerable to Regular Expression Denial of Service - https://github.com/advisories/GHSA-j8xg-fqg3-53r7
fix available via `npm audit fix`
node_modules/word-wrap

ws  8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/webpack-dev-server/node_modules/ws
node_modules/ws

35 vulnerabilities (3 low, 12 moderate, 18 high, 2 critical)
```

:::

#### Vulnerabilidades Críticas

- **@babel/traverse <7.23.2**

  - Risco: Execução arbitrária de código durante a compilação de código
    malicioso
  - Impacto: Um atacante pode injetar e executar código arbitrário no ambiente
    de build, comprometendo totalmente o sistema
  - Contexto: Afeta projetos que usam Babel para transpilação (ex: aplicações
    Angular, React ou Vue.js)

- **socket.io-parser 4.0.0 - 4.2.2**
  - Risco: Validação insuficiente ao decodificar pacotes Socket.IO
  - Impacto: Possível RCE (Remote Code Execution) ou DoS (Denial of Service) via
    pacotes manipulados
  - Contexto: Crítico em aplicações com comunicação em tempo real (ex: chats,
    notificações em tempo real)

#### Vulnerabilidades de Alta Gravidade

- **body-parser <1.20.3**

  - Risco: Negação de serviço (DoS) via URL encoding malicioso
  - Impacto: Sobrecarga do servidor com requisições que consomem recursos
    excessivos
  - Contexto: Aplicações Express.js que usam body-parser para parsing de dados
    de requisições

- **cookie <0.7.0**

  - Risco: Aceitação de caracteres inválidos em cookies, permitindo XSS
    (Cross-Site Scripting)
  - Impacto: Roubo de sessão ou execução de scripts maliciosos no navegador do
    usuário

- **http-proxy-middleware <2.0.7**

  - Risco: Negação de serviço (DoS) em proxies
  - Impacto: Disponibilidade comprometida por requisições maliciosas que travam
    o serviço

- **ip \***

  - Risco: Classificação incorreta de IPs públicos/privados, permitindo SSRF
    (Server-Side Request Forgery)
  - Impacto: Acesso não autorizado a recursos internos da rede (ex: serviços de
    banco de dados)

- **send <0.19.0**

  - Risco: Injeção de template que leva a XSS
  - Impacto: Execução de scripts maliciosos via caminhos de arquivos manipulados
    (ex: GET /)

- **rollup 3.0.0 - 3.29.4**
  - Risco: DOM Clobbering em scripts empacotados, levando a XSS
  - Impacto: Ataques de sequestro de sessão ou defacement em aplicações

### Agrotóxicos

::: details Log de Vulnerabilidades

```bash
# npm audit report

@babel/helpers  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/helpers

@babel/runtime  <7.26.10
Severity: moderate
Babel has inefficient RexExp complexity in generated code with .replace when transpiling named capturing groups - https://github.com/advisories/GHSA-968p-4wvh-cqc8
fix available via `npm audit fix`
node_modules/@babel/runtime
  @angular-devkit/build-angular  0.1000.0-next.0 - 19.2.2 || 20.0.0-next.0
  Depends on vulnerable versions of @babel/runtime
  Depends on vulnerable versions of esbuild
  Depends on vulnerable versions of vite
  Depends on vulnerable versions of webpack
  node_modules/@angular-devkit/build-angular

body-parser  <1.20.3
Severity: high
body-parser vulnerable to denial of service when url encoding is enabled - https://github.com/advisories/GHSA-qwcr-r2fm-qrc7
fix available via `npm audit fix`
node_modules/body-parser
  express  <=4.21.1 || 5.0.0-alpha.1 - 5.0.0
  Depends on vulnerable versions of body-parser
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of path-to-regexp
  Depends on vulnerable versions of send
  Depends on vulnerable versions of serve-static
  node_modules/express

cookie  <0.7.0
cookie accepts cookie name, path, and domain with out of bounds characters - https://github.com/advisories/GHSA-pxg6-pf52-xh8x
fix available via `npm audit fix`
node_modules/cookie
node_modules/express/node_modules/cookie
  engine.io  0.7.8 - 0.7.9 || 1.8.0 - 6.6.1
  Depends on vulnerable versions of cookie
  Depends on vulnerable versions of ws
  node_modules/engine.io
    socket.io  1.6.0 - 4.7.5
    Depends on vulnerable versions of engine.io
    node_modules/socket.io

cross-spawn  7.0.0 - 7.0.4
Severity: high
Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
fix available via `npm audit fix`
node_modules/cross-spawn

esbuild  <=0.24.2
Severity: moderate
esbuild enables any website to send any requests to the development server and read the response - https://github.com/advisories/GHSA-67mh-4wv8-2f99
fix available via `npm audit fix`
node_modules/esbuild
  vite  <=6.1.2
  Depends on vulnerable versions of esbuild
  node_modules/@angular-devkit/build-angular/node_modules/vite


http-proxy-middleware  <2.0.7
Severity: high
Denial of service in http-proxy-middleware - https://github.com/advisories/GHSA-c7qv-q95q-8v27
fix available via `npm audit fix`
node_modules/http-proxy-middleware

micromatch  <4.0.8
Severity: moderate
Regular Expression Denial of Service (ReDoS) in micromatch - https://github.com/advisories/GHSA-952p-6rrq-rcjv
fix available via `npm audit fix`
node_modules/micromatch

nanoid  <3.3.8
Severity: moderate
Predictable results in nanoid generation when given non-integer values - https://github.com/advisories/GHSA-mwcw-c2x4-8c55
fix available via `npm audit fix`
node_modules/nanoid

path-to-regexp  <=0.1.11
Severity: high
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
path-to-regexp outputs backtracking regular expressions - https://github.com/advisories/GHSA-9wv6-86v2-598j
fix available via `npm audit fix`
node_modules/path-to-regexp

rollup  3.0.0 - 3.29.4
Severity: high
DOM Clobbering Gadget found in rollup bundled scripts that leads to XSS - https://github.com/advisories/GHSA-gcx4-mw62-g8wm
fix available via `npm audit fix`
node_modules/rollup

send  <0.19.0
send vulnerable to template injection that can lead to XSS - https://github.com/advisories/GHSA-m6fv-jmcg-4jfg
fix available via `npm audit fix`
node_modules/send
  serve-static  <=1.16.0
  Depends on vulnerable versions of send
  node_modules/serve-static



webpack  5.0.0-alpha.0 - 5.93.0
Severity: moderate
Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986
fix available via `npm audit fix`
node_modules/webpack

ws  7.0.0 - 7.5.9 || 8.0.0 - 8.17.0
Severity: high
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
ws affected by a DoS when handling a request with many HTTP headers - https://github.com/advisories/GHSA-3h5v-q93c-6h6q
fix available via `npm audit fix`
node_modules/engine.io/node_modules/ws
node_modules/socket.io-adapter/node_modules/ws
node_modules/webpack-dev-server/node_modules/ws
node_modules/ws
  socket.io-adapter  2.5.2 - 2.5.4
  Depends on vulnerable versions of ws
  node_modules/socket.io-adapter

21 vulnerabilities (4 low, 8 moderate, 9 high)
```

:::

#### Vulnerabilidades de Alta Gravidade

- **body-parser <1.20.3**

  - Risco: Negação de serviço (DoS) via URL encoding malicioso
  - Impacto: Sobrecarrega o servidor com requisições que consomem recursos
    excessivos, tornando o serviço indisponível
  - Contexto: Afeta aplicações Express.js que usam body-parser para parsing de
    dados de requisições (ex: formulários)

- **cookie <0.7.0**

  - Risco: Aceitação de caracteres inválidos em cookies, permitindo XSS
    (Cross-Site Scripting)
  - Impacto: Injeção de scripts maliciosos via cookies, podendo roubar sessões
    de usuários ou executar ações não autorizadas

- **http-proxy-middleware <2.0.7**

  - Risco: Negação de serviço (DoS) em proxies
  - Impacto: Requisições maliciosas podem travar o serviço de proxy,
    interrompendo a comunicação entre cliente e servidor

- **path-to-regexp <=0.1.11**

  - Risco: ReDoS (Regular Expression Denial of Service) em expressões regulares
    maliciosas
  - Impacto: Ataques que travam o servidor ao processar URLs ou rotas com
    padrões regex complexos

- **rollup 3.0.0 - 3.29.4**

  - Risco: DOM Clobbering em scripts empacotados, levando a XSS
  - Impacto: Scripts maliciosos podem manipular o DOM e roubar dados sensíveis
    (ex: tokens de autenticação)

- **send <0.19.0**

  - Risco: Injeção de template que leva a XSS
  - Impacto: Exploração de caminhos de arquivos para injetar scripts (ex: GET /)

- **ws 7.0.0 - 7.5.9 || 8.0.0 - 8.17.0**
  - Risco: DoS via requisições com muitos cabeçalhos HTTP
  - Impacto: Travamento do servidor WebSocket, afetando funcionalidades em tempo
    real (ex: notificações)

## Esbuild

Buildando um projeto com Three.js o esbuild se mostrou 105.67x vezes mais veloz
que o WebPack 5.

## Melhorias para o futuro

### Front-end

- [Pipeline de PR](./pipeline-pr.md)
- [Stage na pipeline de PR com “npm audit” para validação das dependências](./pipeline-pr.md#stage-na-pipeline-de-pr-com-npm-audit)
- [Padronização de código dos projetos com Eslint](./eslint.md)
- [Stage na pipeline de PR para validar o Eslint](./eslint.md#stage-na-pipeline-de-pr-para-validar-o-eslint)
- [Implementação de Conventional Commits](./conventional-commits.md)
- CLI para geração de novos projetos
- Arquitetura de Formulário com Signals

### Back-end

- [Observabilidade com Grafana](./observabilidade.md)
- [Padronizar e automatizar versionamento das APIs](./padronizacao-e-versionamento.md)
- [Documentação Descentralizada e unificada](./vitepress.md)

## Referências

### Angular:

- https://nx.dev/blog/using-rspack-with-angular
- https://medium.com/front-end-weekly/angular-frontend-framework-from-version-10-to-version-19-all-changes-published-yet-bed89b53ec8b
- https://angular.dev

### Module Federation:

- https://medium.com/nerd-for-tech/best-5-micro-front-end-frameworks-every-developer-should-know-f9e99a359e79
- https://www.angulararchitects.io/blog/combining-native-federation-and-module-federation
- https://www.angulararchitects.io/blog/micro-frontends-with-modern-angular-part-2-multi-version-and-multi-framework-solutions-with-angular-elements-and-web-components
- https://www.npmjs.com/package/@angular-architects/native-federation
- https://github.com/angular-architects/module-federation-plugin
- https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md
- https://github.com/angular-architects/module-federation-plugin/blob/main/libs/mf/README.md
- https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular
- https://module-federation.io/guide/start
- https://medium.com/@fahad.nedian109/module-federation-what-why-how-53ac1bef5da4
- https://randombits.dev/articles/module-federation-advanced
- https://medium.com/localizalabs/module-federation-o-futuro-do-microfrontend-4fed87983ec2
- https://medium.com/frontend-for-everyone/module-federation-clearly-explained-with-a-simple-example-5aa761bfef8c
- https://blog.angular.dev/micro-frontends-with-angular-and-native-federation-7623cfc5f413
- https://medium.com/@lukas.caniga/angular-17-as-microfrontend-native-federation-supporting-pwa-and-ssr-1e9d43eb411d
- https://www.angulararchitects.io/blog/announcing-native-federation-1-0
- https://www.angulararchitects.io/blog/using-module-federation-with-monorepos-and-angular
- [Enterprise Angular: Micro Frontends and Moduliths with Angular](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/Enterprise%20Angular%20Micro%20Frontends%20and%20Moduliths%20with%20Angular.pdf)

### Gestão de dependências:

- https://medium.com/nerd-for-tech/best-5-micro-front-end-frameworks-every-developer-should-know-f9e99a359e79
- https://rextopleads.com/blog/tecnologia/projetos-de-ti/processos-de-gestao-de-dependencias-simplificando-o-ecossistema-de-desenvolvimento
- https://www.alura.com.br/artigos/o-que-e-inferno-de-dependencias-como-utilizar-dependabot
- https://medium.com/@ruben.alapont/securing-node-js-projects-an-introduction-to-npm-audit-40712662390f
