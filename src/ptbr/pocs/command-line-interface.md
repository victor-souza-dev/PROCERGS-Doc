# CLI (Command Line Interface)

A **PROCERGS-CLI** é uma ferramenta de linha de comando que simplifica a criação
e gerenciamento de projetos no ecossistema PROCERGS. Através de comandos
intuitivos, desenvolvedores podem iniciar novos projetos de forma rápida e
padronizada.

## Benefícios

- Aumento de produtividade
- Padronização de código
- Minimização de erros
- Agilidade no onboarding

## Stack

- Node.js
- Typescript
- Gluegun

## Arquitetura

O projeto possui uma arquitetura modular que facilita a adição de novos
templates, com configurações centralizadas em objetos estruturados.

Exemplo:

```ts
export interface ITemplate {
  id: string;
  label: string;
  description?: string;
  items?: ITemplate[];
  link?: string;
}

export const templates: ITemplate[] = [
  {
    id: 'frontend',
    description: 'Front-end templates',
    label: 'Front-end',
    items: [
      {
        id: 'angular',
        label: 'Angular',
        description: 'Angular templates',
        items: [
          {
            id: 'angular.001',
            label: 'Default',
            description: 'Default Angular templates without PWA support',
            link: 'https://github.com/victor-souza-dev/Template.Default.FE.git',
          },
          {
            id: 'angular.002',
            label: 'Default with PWA',
            description: 'Angular templates with PWA support',
            link: 'Default with PWA',
          },
          {
            id: 'angular.003',
            label: 'Micro frontend without PWA (Host)',
            description: 'Micro frontend Angular templates without PWA support',
            link: '',
          },
          {
            id: 'angular.004',
            label: 'Micro frontend with PWA (Host)',
            description: 'Micro frontend Angular templates with PWA support',
            link: '',
          },
          {
            id: 'angular.005',
            label: 'Micro frontend without PWA (Child)',
            description: 'Micro frontend Angular templates without PWA support',
            link: '',
          },
          {
            id: 'angular.006',
            label: 'Micro frontend with PWA (Child)',
            description: 'Micro frontend Angular templates with PWA support',
            link: '',
          },
        ],
      },
      {
        id: 'react',
        label: 'React',
        description: 'React templates',
        items: [
          {
            id: 'react.001',
            label: 'Default',
            description: 'Default React templates without PWA support',
            link: 'Default',
          },
          {
            id: 'react.002',
            label: 'Default with PWA',
            description: 'React templates with PWA support',
            link: 'Default with PWA',
          },
        ],
      },
    ],
  },
  {
    id: 'backend',
    description: 'Back-end templates',
    label: 'Back-end',
    items: [
      {
        id: 'nodejs',
        label: 'Node.js',
        description: 'Node.js templates',
        link: 'Node.js',
      },
      {
        id: 'java',
        label: 'Java',
        description: 'Java templates',
        items: [],
      },
      {
        id: 'dotnet',
        label: '.NET',
        description: '.NET templates',
        items: [],
      },
    ],
  },
];
```

> [!NOTE] Repositório: https://github.com/victor-souza-dev/PROCERGS-CLI
