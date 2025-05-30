const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));
const main = document.querySelector('main') || document.body;

const noticia = bd[id];

if (noticia) {
  main.innerHTML = `
    <div class="contenidoArticulo">
      <img class="imgDetalle" src="../${noticia.img}" alt="${noticia.tituloNoticia}">
      <div class="textoArticulo">
        <h1 class="titolArticle">${noticia.tituloNoticia}</h1>
        ${noticia.introduccion}
        ${noticia.Noticia}
      </div>
    </div>
  `;
} else {
  main.innerHTML = `<p>No s'ha trobat la notícia.</p>`;
}