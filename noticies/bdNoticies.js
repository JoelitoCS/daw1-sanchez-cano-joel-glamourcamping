// Importar Firebase

// Importamos las funciones necesarias de Firebase para inicializar la aplicación y trabajar con Firestore.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// Datos del proyecto de Firebase
// Este objeto contiene la configuración del proyecto de Firebase, como las claves de API y los identificadores del proyecto.
const firebaseConfig = {
    apiKey: "AIzaSyDq8qGQC-RM8d2B8mrtLmjMw4D63Ye8fHU",
    authDomain: "canojoel-glamourcamping.firebaseapp.com",
    projectId: "canojoel-glamourcamping",
    storageBucket: "canojoel-glamourcamping.firebasestorage.app",
    messagingSenderId: "116101376365",
    appId: "1:116101376365:web:e8dbe756d0fe334c7a9264"
};

// Conectar con Firebase
// Inicializamos la aplicación de Firebase con la configuración proporcionada.
const app = initializeApp(firebaseConfig);

// Obtenemos una instancia de Firestore para interactuar con la base de datos.
const db = getFirestore(app);

// Función para mostrar las noticias, utilizo async yaque voy a usar `await` para esperar la respuesta de Firestore, que en toeria me tiene que devolver las noticias.

// Esta función se encarga de obtener las noticias desde Firestore y mostrarlas en el HTML.
async function mostrarNoticias() {
  // Referencia a la colección "noticias"

  // Usamos la función `collection` para obtener una referencia a la colección "noticias" en mi proyecto de firestore que contiene los documentos de las noticias, osea la informacion necesaria para mostrarr las notiicaias.

  const querySnapshot = await getDocs(collection(db, "noticias"));

  // Convertir los documentos en un array
  // `querySnapshot.docs` contiene todos los documentos de la colección "noticias" en forma de un array.
  const noticias = querySnapshot.docs;

  // Donde se van a poner las noticias en el HTML
  // Seleccionamos el contenedor en el HTML donde se van a insertar las noticias.
  let contenedor = document.querySelector("#noticias");

  // Contador para numerar los artículos
  // Este contador se utiliza para generar un número único para cada noticia, que se usará en los enlaces.
  let numero = 1;

  // Recorrer todas las noticias
  // Usamos un bucle `for` para iterar sobre cada documento en el array `noticias`.
  for (let i = 0; i < noticias.length; i++) {
    // Obtenemos el documento actual.
    let doc = noticias[i];

    // Extraemos los datos del documento usando el método `.data()`. Conseguimos un objeto que contiene todos los campos de la noticia que extraemos del firebase (firestore).
    let data = doc.data();

    // Creamos el HTML para mostrar la noticia.
    // Usamos una plantilla de cadena para construir el contenido HTML dinámicamente.
    let noticiaHTML = `
      <div class="contenidoNews">
        <img class="imgDetalle" src="${data.img}" alt="Imagen">
        <div>
          <h1 class="titolArticle">${data.tituloNoticia}</h1>
          ${data.introduccion}
          <a href="../articles/article${numero}.html" class="link_noticias">
            <p class="noticia">Read</p>
          </a>
        </div>
      </div>
    `;

    // Insertamos el HTML generado dentro del contenedor seleccionado.
    contenedor.innerHTML += noticiaHTML;

    // Incrementamos el contador para el siguiente artículo.
    numero++;
  }
}

// Llamar a la función
// Llamamos a la función `mostrarNoticias` para que se ejecute al cargar el script.
mostrarNoticias();