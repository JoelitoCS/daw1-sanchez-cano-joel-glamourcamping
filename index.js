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

const exploreBtn = document.querySelector('#botonExplorar');

// Funcionnn para renderizar las 5 noticias
function renderNoticias() {
  let htmlCards = '';
  for (let i = 0; i < bd.length; i++) {
    const noticia = bd[i];
    htmlCards += `
      <div class="card">
        <img src="${noticia.img}" alt="${noticia.tituloNoticia}" style="width:100%;height:200px;object-fit:cover;">
        <h2>${noticia.tituloNoticia}</h2>
        <div>${noticia.introduccion}</div>
        <button class="ver-detalle" id="btn-${noticia.id}">READ</button>
      </div>
    `;
  }
  contenedor.innerHTML = htmlCards;

  // Asignar eventos a los botones
  const botones = document.querySelectorAll('.ver-detalle');
  for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', function () {
      const itemId = this.id.split('-')[1];
      window.location.href = `detalle.html?id=${itemId}`;
    });
  }
}

// Mostrar noticias al pulsar "EXPLORE"
exploreBtn.addEventListener('click', renderNoticias);