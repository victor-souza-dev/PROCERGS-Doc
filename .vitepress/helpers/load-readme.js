// .vitepress/load-readme.js

import { marked } from 'marked';

const README_URL = 'https://raw.githubusercontent.com/victor-souza-dev/PROCERGS-Doc/refs/heads/master/README-br.md';

export default function loadMarkdown(elementId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  fetch(README_URL, { cache: 'no-store' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }
      return response.text();
    })
    .then(markdown => {
      document.getElementById(elementId).innerHTML = marked.parse(markdown);
    })
    .catch(error => {
      console.error('Falha ao carregar README:', error);
      document.getElementById(elementId).innerHTML = `<p style="color: red;">Erro ao carregar conteúdo: ${error.message}</p>`;
    });
}
