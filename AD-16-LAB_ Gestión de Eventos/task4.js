// 1. Seleccionar la sección con id "container"
const contenedor = document.getElementById("container");

// 2. Seleccionar todos los elementos con la clase "second"
const segundos = document.querySelectorAll(".second");

// 3. Seleccionar el elemento con clase "third" dentro de una etiqueta ol
const tercero = document.querySelector("ol .third");

// 4. Cambiar el contenido de la sección a "¡Hola!"
contenedor.textContent = "¡Hola!";

// 5. Añadir la clase "main" al div con clase "footer"
document.querySelector(".footer").classList.add("main");