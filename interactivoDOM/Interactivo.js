 // ---- 1. Seleccionar elementos del DOM ----
    const tituloSeccion = document.querySelector("#titulo-seccion");
    const btnAgregar    = document.querySelector("#btn-agregar");
    const contenedor    = document.querySelector("#proyectos");
    const mensajeVacio  = document.querySelector("#vacio");

    let contador = 0; // cuenta los proyectos que se han creado

    // ---- 2. Actualizar el título de la sección según cuántas tarjetas hay ----
    function actualizarTitulo() {
      const total = contenedor.children.length;
      tituloSeccion.textContent =
        total === 0 ? "Mis proyectos" : `Mis proyectos (${total})`;
      mensajeVacio.hidden = total > 0; // muestra u oculta el mensaje vacío
    }

    // ---- 3. Crear una tarjeta ----
    function crearTarjeta() {
      contador++;

      const tarjeta = document.createElement("article");
      tarjeta.classList.add("tarjeta");

      const titulo = document.createElement("h3");
      titulo.textContent = `Proyecto ${contador}`;

      const descripcion = document.createElement("p");
      descripcion.textContent = "Describe aquí qué hiciste y qué tecnologías usaste.";

      // ---- 4. Botón para eliminar esta tarjeta ----
      const btnEliminar = document.createElement("button");
      btnEliminar.type = "button";
      btnEliminar.classList.add("btn-eliminar");
      btnEliminar.textContent = "Eliminar";
      btnEliminar.addEventListener("click", () => {
        tarjeta.remove();
        actualizarTitulo();
      });

      tarjeta.append(titulo, descripcion, btnEliminar);
      contenedor.appendChild(tarjeta);
    }

    // ---- 5. Al hacer clic, agregar una tarjeta y actualizar el título ----
    btnAgregar.addEventListener("click", () => {
      crearTarjeta();
      actualizarTitulo();
    });

    actualizarTitulo(); // estado inicial