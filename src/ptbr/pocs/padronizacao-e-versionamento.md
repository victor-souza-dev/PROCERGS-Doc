---
id: padronizacao-e-versionamento
title: Padronização de Commits e Versionamento
sidebar_label: Padronização de Commits e Versionamento
lastUpdated: true
---

# Padronização de commits e Versionamento

A padronização de commits e o versionamento são práticas essenciais no
desenvolvimento de software que garantem rastreabilidade e manutenibilidade dos
projetos.

## Benefícios da Padronização de Commits

- Histórico claro e organizado
- Facilidade na revisão de código
- Geração automática de changelogs
- Melhor compreensão das mudanças

## Benefícios do Versionamento Semântico ([SemVer](https://semver.org))

- Controle preciso das versões
- Compatibilidade entre componentes
- Gerenciamento de dependências
- Rollbacks seguros

## [Semantic Versioning](https://semver.org)

O versionamento semântico utiliza três números (MAJOR.MINOR.PATCH):

- **MAJOR**: Mudanças incompatíveis (`v2.0.0`)
- **MINOR**: Novas funcionalidades compatíveis (`v1.1.0`)
- **PATCH**: Correções de bugs compatíveis (`v1.0.1`)

### Exemplos Práticos

1. **Nova Funcionalidade**

   - Anterior: `v1.0.0`
   - Nova: `v1.1.0`
   - Motivo: Adição de endpoint

2. **Mudança Incompatível**

   - Anterior: `v1.1.0`
   - Nova: `v2.0.0`
   - Motivo: Remoção de campo na API

3. **Correção de Bug**
   - Anterior: `v2.0.0`
   - Nova: `v2.0.1`
   - Motivo: Correção na autenticação

## [Conventional Commits](https://www.conventionalcommits.org)

Formato padrão:

```
<tipo>(escopo): descrição
```

Componentes:

- **tipo**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- **escopo**: Identificador da mudança (opcional)
- **descrição**: Resumo da alteração
- **BREAKING CHANGE**: Indicador de incompatibilidade

Exemplos:

```
feat(#123)!: novo endpoint de usuários
```

```
fix(api): correção de autenticação
BREAKING CHANGE: Novo parâmetro obrigatório em login()
```

## Relação entre Commits e Versões

| Commit   | Descrição           | Versão |
| -------- | ------------------- | ------ |
| feat     | Nova funcionalidade | MINOR  |
| fix      | Correção de bug     | PATCH  |
| docs     | Documentação        | N/A    |
| style    | Formatação          | N/A    |
| refactor | Refatoração         | PATCH  |
| perf     | Performance         | PATCH  |
| test     | Testes              | PATCH  |
| chore    | Manutenção          | N/A    |

\*BREAKING CHANGE sempre incrementa MAJOR

## Changelogs Automatizados

Changelogs são registros de alterações em um projeto, documentando o que foi
adicionado, alterado ou corrigido. Eles são essenciais para manter a
transparência e facilitar a comunicação entre desenvolvedores e usuários. Um
changelog bem estruturado deve incluir:

- Autores das mudanças
- Data da alteração
- Versão afetada
- Descrição das mudanças
- Notas sobre mudanças significativas (ex: breaking changes)

## Ferramentas e Práticas

### [Commitlint](https://commitlint.js.org)

Ferramenta de validação que garante a padronização dos commits através de regras
configuráveis. Ela verifica se as mensagens dos commits seguem o padrão
Conventional Commits, analisando:

- O tipo do commit (feat, fix, docs, etc)
- O formato da mensagem
- A presença de escopo (quando necessário)
- A indicação de breaking changes
- O tamanho e estrutura da descrição

O Commitlint pode ser integrado ao git hooks para validar automaticamente cada
commit antes de ser finalizado.

### Tags Git

Tags são referências estáticas no Git que marcam pontos específicos e
importantes no histórico do repositório, geralmente usadas para identificar
versões de software.

- **Tipos de Tags:**

  - Leves: São apenas ponteiros para commits específicos
  - Anotadas: Contêm metadados completos como autor, data e mensagem

- **Comandos principais:**
  - Criar tag leve: `git tag v1.0.0`
  - Criar tag anotada: `git tag -a v1.0.0 -m "Versão 1.0.0"`
  - Listar tags: `git tag -l`
  - Publicar tag específica: `git push origin v1.0.0`
  - Publicar todas as tags: `git push origin --tags`

## Fluxo de Integração

1. Commit enviado ao repositório
2. Validação pelo commitlint
3. Geração automática de tag com base em semantic versioning e conventional
   commits
4. Atualização da versão no arquivo `package.json` ou `pom.xml`
5. Geração de changelog automatizado
