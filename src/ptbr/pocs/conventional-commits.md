---
id: conventional-commits
title: Conventional Commits
sidebar_label: Conventional Commits
lastUpdated: true
---

# Conventional Commits

A padronização de mensagens de commit, como a proposta pelo **Conventional
Commits**, é essencial para criar um histórico de mudanças claro, previsível e
automatizável. Essa prática vai além de uma simples convenção estética: ela
impacta diretamente a **manutenibilidade**, **colaboração** e **eficiência** em
projetos de software.

## **1. Por que a padronização é necessária?**

Sem regras definidas, as mensagens de commit tendem a ser **caóticas** e
**inconsistentes**. Por exemplo:

- _"Fix bug"_ → Vago e sem contexto.
- _"Atualizei coisa do login"_ → Falta de clareza sobre o tipo de mudança.
- _"Merge branch 'feature-x'"_ → Sem descrição do propósito.

Essa falta de estrutura dificulta:

- **Rastrear mudanças**: Identificar quando e por que um bug foi introduzido.
- **Automatizar processos**: Gerar changelogs, definir versões semanticamente
  corretas [(SemVer)](https://semver.org) ou integrar ferramentas de CI/CD.
- **Colaboração**: Novos membros da equipe perdem tempo decifrando commits
  ambíguos.

O **Conventional Commits** resolve isso ao impor uma estrutura **consistente** e
**semântica** para as mensagens.

## **2. Benefícios da padronização**

### **a. Automação poderosa**

Com mensagens estruturadas, ferramentas podem: - **Gerar changelogs
automaticamente**: Identificando `feat` (novas funcionalidades), `fix`
(correções), `perf` (melhorias de performance), etc.

```markdown
## 1.0.0 (2023-10-01)

### Features

- Adicione autenticação via OAuth (`feat(auth): add OAuth login`)

### Fixes

- Corrija falha na validação de senhas (`fix(auth): validate password length`)
```

- **Definir versões semanticamente corretas**:
  - `feat` → **versão menor** (ex: `v1.1.0`).
  - `fix` → **versão patch** (ex: `v1.0.1`).
  - `BREAKING CHANGE` → **versão major** (ex: `v2.0.0`).

### **b. Clareza no histórico de mudanças**

Uma mensagem bem formatada responde imediatamente a três perguntas:

1. **O que foi feito?** (`feat`, `fix`, `docs`).
2. **Onde?** (escopo, ex: `auth`, `payment`).
3. **Qual o impacto?** (`!` para breaking changes).

Exemplo:

```text
feat(lai)!: adicione suporte as notificacoes do Lai
BREAKING CHANGE: O fluxo de checkout agora requer configuração de gateway
```

Isso permite entender rapidamente o escopo e o impacto da mudança.

### **c. Facilita revisões de código (Code Review)**

Em times, mensagens claras ajudam revisores a:

- Identificar mudanças críticas (ex: `perf` ou `security`).
- Priorizar revisões com base no tipo de commit (ex:
  `chore(deps): update dependencies` pode ser menos urgente).

### **d. Documentação viva**

O histórico de commits padronizado torna-se uma **documentação técnica** do
projeto, mostrando:

- Evolução de funcionalidades.
- Decisões de design (ex: `refactor(api): remova endpoint deprecated`).
- Regressões e correções.

## **3. Estrutura do Conventional Commits**

A especificação define um formato simples, mas rigoroso:

```text
<tipo>(<escopo>): <descrição curta>

<corpo> (opcional)

<footer> (opcional, ex: BREAKING CHANGE, issues relacionadas)
```

### **Tipos principais**:

- **feat**: Nova funcionalidade.
- **fix**: Correção de bug.
- **docs**: Alterações na documentação.
- **style**: Formatação, espaços, etc.
- **refactor**: Refatoração de código (sem mudar funcionalidade).
- **perf**: Melhoria de performance.
- **test**: Adição/modificação de testes.
- **chore**: Manutenção (ex: atualização de dependências).
- **revert**: Reversão de commit.

### **Escopo**:

Define o contexto da mudança (ex: `auth`, `database`, `frontend`).

### **Breaking Changes**:

Sinalizados com `!` após o tipo/escopo ou no footer:

```text
feat(api)!: remove suporte a versão 1 da API
```

## **4. Exemplo prático de impacto**

Suponha um projeto sem padronização:

```text
git log --oneline
- Fix login
- Update dependencies
- Refactor code
```

Agora, com Conventional Commits:

```text
feat(auth): add multi-factor authentication
fix(cart): resolve race condition on checkout
chore(deps): update lodash to ^4.17.21
docs(api): document new endpoints
```

Com isso:

- Ferramentas geram um changelog estruturado.
- Ferramentas de CI/CD determinam que a versão deve ser **v2.1.0** (por causa do
  `feat`).
- Desenvolvedores entendem rapidamente o impacto de cada mudança.

## **5. Desafios e boas práticas**

- **Adoção inicial**: Requer treinamento e ferramentas de validação (ex:
  **Commitizen** para prompts interativos).
- **Consistência**: Use hooks Git (ex: **Husky**) para validar commits antes do
  push.
- **Evite mensagens genéricas**: Substitua _"Fix bug"_ por _"fix(cart): prevent
  negative quantity on checkout"_.

## **Conclusão**

Padronizar mensagens de commit não é apenas uma "boa prática" — é um
**investimento em escalabilidade**. Times que adotam Conventional Commits
reduzem tempo gasto com processos manuais, melhoram a comunicação e constroem um
histórico de mudanças que serve como documentação técnica confiável. Em um mundo
onde a automação e a colaboração são críticas, essa convenção torna-se uma peça
fundamental para projetos sustentáveis. 🚀

## ⭐PLUS⭐ Integrando a uma pipeline do Azure DevOps

O Conventional Commits pode ser integrado a uma pipeline do Azure DevOps
utilizando a biblioteca `commitlint`. Essa ferramenta valida automaticamente se
as mensagens de commit seguem as regras da convenção.

```yaml
steps:
  - checkout: self
    fetchDepth: 0

  - task: NodeTool@0
    inputs:
      versionSpec: '20.x'
      checkLatest: true

  - script: |
      git --version
      node --version
      npm --version
      npx commitlint --version
    displayName: Print versions

  - script: |
      npm install conventional-changelog-conventionalcommits
      npm install commitlint@latest
    displayName: Install commitlint

  - script: npx commitlint --last --verbose
    condition: ne(variables['Build.Reason'], 'PullRequest')
    displayName: Validate current commit (last commit) with commitlint

  - script: |
      echo "Accessing Azure DevOps API..."

      response=$(curl -s -X GET -H "Cache-Control: no-cache" -H "Authorization: Bearer $(System.AccessToken)" $(System.TeamFoundationCollectionUri)$(System.TeamProject)/_apis/git/repositories/$(Build.Repository.Name)/pullRequests/$(System.PullRequest.PullRequestId)/commits?api-version=6.0)
      numberOfCommits=$(echo "$response" | jq -r '.count')

      echo "$numberOfCommits commits to check"

      npx commitlint --from $(System.PullRequest.SourceCommitId)~${numberOfCommits} --to $(System.PullRequest.SourceCommitId) --verbose
    condition: eq(variables['Build.Reason'], 'PullRequest')
    displayName: Validate PR commits with commitlint
```

## Referências

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
- [Commitlint - Lint commit messages](https://commitlint.js.org/)
- [Commitizen - Ferramenta para commits padronizados](https://commitizen.github.io/cz-cli/)
- [SemVer](https://semver.org)
