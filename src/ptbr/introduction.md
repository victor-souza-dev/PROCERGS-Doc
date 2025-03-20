# Introdução Geral

---

<br />

<div id="remote-readme"></div>

<script type="module">
  // Usa marked.js via CDN para converter Markdown em HTML
  import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

  // URL do README externo
  const README_URL = 'https://raw.githubusercontent.com/Do-nada-ao-tudo/LibertyChain/main/README.md';

  // Busca e renderiza o conteúdo
  fetch(README_URL)
    .then(response => response.text())
    .then(markdown => {
      document.getElementById('remote-readme').innerHTML = marked.parse(markdown);
    })
    .catch(error => {
      console.error('Falha ao carregar README:', error);
      document.getElementById('remote-readme').innerHTML = 'Erro ao carregar conteúdo.';
    });
</script>