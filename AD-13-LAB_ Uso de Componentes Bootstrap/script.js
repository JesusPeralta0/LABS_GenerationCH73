
const botonAlerta = document.getElementById("botonAlerta");
const contenedorAlerta = document.getElementById("contenedorAlerta");

botonAlerta.addEventListener("click", function () {
  contenedorAlerta.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show mt-3" role="alert">
      Alerta, alguien presionó el botón
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
});
