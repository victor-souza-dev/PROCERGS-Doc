# 📚 PROCERGS - Doc

[![en](https://img.shields.io/badge/lang-en-red.svg)](./README.md)
[![br](https://img.shields.io/badge/lang-br-green.svg)](./README-br.md)

## 🌟 Visão Geral

A **PROCERGS - Doc** é um projeto com documentação organizada e acessível,
construída utilizando [VitePress](https://vitepress.vuejs.org/), um gerador de
sites estáticos moderno e eficiente. O objetivo principal deste projeto é
fornecer uma plataforma de documentação abrangente e fácil de usar, permitindo
que acessem informações detalhadas acerca dos nossos sistemas.

<br>

## 🏗️ Estrutura do Projeto

Abaixo está a estrutura organizada do projeto:

```
.
├── .vitepress/
│   ├── config.ts          # Configuração principal do VitePress
│   └── locales/           # Configurações específicas para cada idioma
├── assets/                # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── index.md           # Página inicial do projeto(Padrão PT-BR)
│   └── locale/            # Pastas para cada idioma suportado
│       ├── projects/      # É aqui onde você deve adicionar documentação técnica sobre cada projeto
└── README.md              # Resumo geral do projeto
```

> 💡 **Dica:** Use esta estrutura como referência ao adicionar novas páginas ou
> modificar o projeto, sempre visando manter um padrão consistente.

<br>

## 🤝 Como Contribuir

### 1. Adicionando Páginas

Para adicionar novas páginas à documentação, siga os passos abaixo:

1. Navegue até a pasta `src/`, onde há uma pasta para cada idioma suportado.
2. Escolha o idioma desejado e entre em `docs`, que é a pasta onde deve ser
   adicionado o conteúdo:
   - Crie uma nova pasta com o nome da página desejada.
   - Ou crie um arquivo `.md` dentro de uma pasta já existente, sempre
     respeitando a hierarquia das pastas.
3. Adicione conteúdo no formato **Markdown**.
4. Atualize o arquivo `.vitepress/locales/<locale>.ts` para incluir o caminho da
   nova página na barra lateral (`sidebar`).

### 2. Traduções

Para traduzir o conteúdo para novos idiomas:

1. Edite os arquivos em `.vitepress/locales/`.
2. Mantenha as chaves sincronizadas entre os idiomas para garantir consistência.
3. Atualize o arquivo `config.ts` para incluir o novo idioma, se necessário.

Aqui está uma versão refatorada e mais "clean" do texto, mantendo a clareza e
organização enquanto melhora a legibilidade e o fluxo:

### **3. Commitando e Enviando Alterações**

Para garantir que todas as alterações sejam consistentes e fáceis de entender,
estamos utilizando o padrão **Conventional Commits**. Se você não está
familiarizado com o assunto, confira a
[documentação oficial](https://www.conventionalcommits.org/en/v1.0.0/).

#### **Passo a Passo para Realizar o Commit**

1. **Atualize seu Branch**  
   Certifique-se de que seu branch está sincronizado com o `main`. Execute:

   ```bash
   git pull origin main
   ```

2. **Adicione as Alterações**  
   Adicione todos os arquivos modificados ao staging area:

   ```bash
   git add .
   ```

3. **Inicie o Commit**  
   Execute o comando abaixo para iniciar o assistente de commit:

   ```bash
   git commit
   ```

4. **Análise Automática com Lint-Staged**

   - O **lint-staged** irá analisar automaticamente todos os arquivos
     modificados.
   - Durante essa etapa, ele ajustará a formatação do código e removerá
     metadados de imagens e outros arquivos.
     ![Lint-Staged](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/lint-staged.png)

5. **Crie o Commit com Conventional Commits**  
   Após a análise do lint-staged, o assistente de commit será aberto. Siga as
   instruções para criar um commit seguindo o padrão **Conventional Commits**.  
   ![Conventional Commits](https://raw.githubusercontent.com/Do-nada-ao-tudo/RepoStaticFile/refs/heads/main/conventional-commits.png)

---

### 💡 **Dicas Importantes**

- **Mensagens de Commit**: Use mensagens claras, descritivas para facilitar a
  compreensão das alterações e de preferência em inglês.  
  Exemplo:
  ```
  feat: add metadata removal support
  fix: correct image formatting error
  docs: update contribution guide
  ```
- **Teste Localmente**: Antes de enviar suas alterações, execute testes locais
  para garantir que tudo funciona conforme o esperado.

<br>

## 🛠️ Desenvolvimento Local

### Instalação

```bash
npm install
```

### Execução Local

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o site localmente em:  
[http://localhost:5173](http://localhost:5173)

### Compilação

Para compilar o projeto para produção:

```bash
npm run build
```

### Executar o Build do Projeto

```bash
npm run preview
```

<br>

## 📋 Boas Práticas

Siga estas diretrizes para manter a documentação organizada e consistente:

- **Organização por temas:** Crie pastas temáticas dentro de `src/locale/docs/`
  para agrupar páginas relacionadas.
- **Traduções atualizadas:** Sempre que adicionar ou modificar conteúdo,
  certifique-se de que todas as traduções estejam sincronizadas.
- **Padrões estabelecidos:** Siga o estilo e as convenções já definidas no
  projeto para garantir uniformidade.

<br>

### 🔍 Exemplo de Uso de Markdown

#### Listas Aninhadas

Use listas aninhadas para organizar informações hierárquicas:

```markdown
- Categoria Principal
  - Subcategoria 1
    - Item 1
    - Item 2
  - Subcategoria 2
```

#### Tabelas

Tabelas são úteis para organizar informações tabulares:

| Comando         | Descrição                            |
| --------------- | ------------------------------------ |
| `npm install`   | Instala dependências                 |
| `npm run dev`   | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção      |

#### Blocos de Código

Use blocos de código para destacar comandos ou exemplos:

```javascript
const message = 'Olá, mundo!';
console.log(message);
```

<br>

## 📜 Licença

Este projeto está licenciado sob a **MIT License**. Consulte o arquivo
[LICENSE](./LICENCE.txt) para mais detalhes.
