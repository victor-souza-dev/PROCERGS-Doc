---
id: pipeline-pr
title: Pipeline de PR
sidebar_label: Pipeline de PR
lastUpdated: true
---

# Pipeline de PR

## Stage na pipeline de PR com "npm audit"

O "npm audit" é uma ferramenta essencial para garantir a segurança do seu
projeto. Ela analisa o arquivo package-lock.json e verifica se existem
vulnerabilidades conhecidas nas dependências utilizadas. Esta validação é
crucial porque:

- Identifica vulnerabilidades de segurança conhecidas em pacotes npm
- Fornece detalhes sobre a severidade dos problemas encontrados
- Sugere atualizações ou correções para resolver as vulnerabilidades
- Ajuda a manter seu projeto seguro contra exploits e ataques

```yaml
- stage: SecurityAudit
  jobs:
    - job: NpmAudit
      steps:
        - task: Npm@1
          inputs:
            command: 'custom'
            customCommand: 'audit'
            failOnAuditFailure: true # Falha a pipeline se encontrar vulnerabilidades críticas
```

## Stage na pipeline de PR para validar o Eslint

O Eslint é uma ferramenta de análise estática que é fundamental para manter a
qualidade do código. Sua importância se deve a:

- Padronização do código entre diferentes desenvolvedores
- Identificação precoce de problemas potenciais
- Redução de erros comuns de programação
- Melhoria na manutenibilidade do código
- Garantia de boas práticas de desenvolvimento
- Redução do tempo de review de código

```yaml
- stage: CodeQuality
  jobs:
    - job: Eslint
      steps:
        - task: Npm@1
          inputs:
            command: 'custom'
            customCommand: 'run lint'
```

## Referencias bibliográficas

- https://learn.microsoft.com/pt-br/azure/devops/artifacts/npm/npm-audit?view=azure-devops&tabs=classic
- https://docs.npmjs.com/cli/v8/commands/npm-audit
- https://eslint.org/docs/latest/use/getting-started
