# Introdução Geral

---

<br />

<div id="remote-readme"></div>

<script type="module">
  // Importa marked LOCALMENTE (não via CDN)
  import { marked } from '/node_modules/marked/lib/marked.esm.js';

  const README_URL = 'https://raw.githubusercontent.com/Do-nada-ao-tudo/LibertyChain/main/README.md';

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
