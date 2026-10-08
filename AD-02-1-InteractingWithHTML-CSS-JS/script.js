// Cambiar el primer "Hola Mundo" por "Adiós"
document.getElementById("red").textContent = "Adiós";

// Cambiar el color de un encabezado a naranja
document.getElementById("encabezadoColor").style.color = "orange";

// Crear comportamiento para cambiar el color al hacer clic
document.getElementById("encabezadoColor").onclick = function () {
    this.style.color = "brown";
};