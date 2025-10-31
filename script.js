
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


// validacion de formulario
document.getElementById("formContacto").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const errores = {};
   
  // oblicaiones de caracteres
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTel = /^[0-9]{7,15}$/;

  if (!nombre) errores.nombre = "El nombre es obligatorio.";
  if (!regexEmail.test(email)) errores.email = "Email inválido.";
  if (!regexTel.test(telefono)) errores.telefono = "Teléfono inválido (solo números).";

  document.querySelectorAll(".error").forEach(el => el.textContent = "");

  if (Object.keys(errores).length > 0) {
    for (const campo in errores) {
      document.getElementById(`error-${campo}`).textContent = errores[campo];
    }
  } else {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const div = document.createElement("div");
    div.classList.add("datos-enviados");
    div.innerHTML = `
      <h3>Datos Enviados:</h3>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
    `;
    resultado.appendChild(div);
    document.getElementById("formContacto").reset();
  }
});