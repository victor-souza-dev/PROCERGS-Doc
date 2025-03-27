---
id: conventional-commits
title: Conventional Commits
sidebar_label: Conventional Commits
---

# Conventional Commits

O Conventional Commits é uma convenção para mensagens de commit que fornece um
conjunto de regras para criar um histórico de commit explícito. Isso facilita a
criação de ferramentas automatizadas e a geração de changelogs.

## Formato da mensagem

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

### Tipos principais

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Alterações em documentação
- `style`: Formatação, ponto e vírgula faltando, etc (sem alteração de código)
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Alterações em arquivos de build, dependências, etc

### Exemplos

```
feat: adiciona função de busca

fix(auth): corrige validação de token

docs: atualiza README com novas instruções

style: formata código usando prettier

refactor(api): simplifica lógica de autenticação

test: adiciona testes para módulo de usuários

chore: atualiza dependências
```

## Referências

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Angular Commit Message Guidelines](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit)
- [Commitlint - Lint commit messages](https://commitlint.js.org/)
- [Commitizen - Ferramenta para commits padronizados](https://commitizen.github.io/cz-cli/)
