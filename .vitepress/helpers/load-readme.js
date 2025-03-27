import { marked } from 'marked';

export default function loadMarkdown(README_URL, elementId) {
  if (process.env.NODE_ENV === 'production') {
    loadProd(README_URL, elementId);
    return;
  }

  loadDev(README_URL, elementId);
}

function loadDev(README_URL, elementId) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (!README_URL) {
    console.error('README_URL não definido');
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

function loadProd(README_URL, elementId) {
}