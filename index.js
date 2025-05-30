// Selecciona el contenedor donde se mostrarán las noticias
const contenedor = document.querySelector('#Articles_news');

//Selecciona las 3 últimas noticias (del final del array)
const ultimasNoticias = bd.slice(-3);

//Genera el HTML de las tarjetas
let html = '';
for (let i = 0; i < ultimasNoticias.length; i++) {
  const noticia = ultimasNoticias[i];
  html += `
    <div class="card">
      <img src="${noticia.img}" alt="${noticia.tituloNoticia}" style="width:100%">
      <h2>${noticia.tituloNoticia}</h2>
      ${noticia.introduccion}
      <button class="ver-detalle" id="btn-${noticia.id}">READ</button>
    </div>
  `;
}
contenedor.innerHTML = html;

//Añade eventos a los botones para redirigir al detalle
const botones = document.querySelectorAll('.ver-detalle');
for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function () {
    // Extrae el id del botón (ejemplo: "btn-3" -> "3")
    const noticiaId = this.id.split('-')[1];
    // Redirige a la página de detalle con el parámetro id
    window.location.href = `noticies/detallNoticia.html?id=${noticiaId}`;
  });
}

