# Padronização de código dos projetos com Eslint

O ESLint é uma ferramenta de análise de código estática para identificar padrões
problemáticos encontrados no código JavaScript/Typescript. Ele ajuda a manter um
estilo de código consistente e evitar bugs.

## Instalação

```bash
npm install eslint --save-dev
```

## Configuração

1. Inicialize o ESLint:

```bash
npx eslint --init
```

2. Crie um arquivo `.eslintrc.json` na raiz do projeto:

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always"]
  }
}
```

## Uso

Para verificar arquivos:

```bash
npx eslint src/**/*.js
```

Para corrigir automaticamente:

```bash
npx eslint src/**/*.js --fix
```

## Integração com VS Code

1. Instale a extensão ESLint
2. Adicione ao settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Referências

- [ESLint - Getting Started](https://eslint.org/docs/user-guide/getting-started)
- [ESLint - Configuring](https://eslint.org/docs/user-guide/configuring)
- [ESLint - Rules](https://eslint.org/docs/rules/)
- [ESLint VS Code Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
