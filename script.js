document.addEventListener("DOMContentLoaded", () => {
  // Lista de imágenes del carrusel
  const imagenes = [
    "Imagenes/Rosa.webp",
    "Imagenes/rosa 2.webp",
    "Imagenes/rosa 3.webp"
  ];

  let indice = 0;
  const imagen = document.getElementById("centro");
  const btnAnterior = document.getElementById("Anterior");
  const btnSiguiente = document.getElementById("Siguiente");

  // Mostrar imagen inicial
  imagen.src = imagenes[indice];

  // Función para cambiar imagen
  function mostrarImagen(nuevoIndice) {
    indice = (nuevoIndice + imagenes.length) % imagenes.length;
    imagen.src = imagenes[indice];
  }

  // Botones manuales
  btnAnterior.addEventListener("click", () => mostrarImagen(indice - 1));
  btnSiguiente.addEventListener("click", () => mostrarImagen(indice + 1));

  // Cambio automático cada 4 segundos
  setInterval(() => mostrarImagen(indice + 1), 4000);
});