const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
}

async function fetchColorsList() {
  try {
    const response = await fetch('https://reqres.in/api/unknown');

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const result = await response.json();
    const colors = result.data;

    localStorage.setItem("colors", JSON.stringify(colors));

    return colors;
  } catch (error) {
    console.error('No se pudo obtener la lista de colores:', error);
    return [];
  }
}

function loadColorsFromStorage() {
  const stored = localStorage.getItem("colors");

  if (stored) {
    const colors = JSON.parse(stored);
    colors.forEach(color => addItem(color));
  }
}

function init() {
  if (localStorage.getItem("colors")) {
    loadColorsFromStorage();
  } else {
    fetchColorsList().then(colors => {
      colors.forEach(color => addItem(color));
    });
  }
}

const deleteButton = document.querySelector("#delete-button")

function clearColors() {
  itemsContainer.innerHTML = ""          // vacía la lista en pantalla
  localStorage.removeItem("colors")      // borra también los datos guardados
}

deleteButton.addEventListener("click", clearColors)

const loadButton = document.querySelector("#load-button")

async function reloadColors() {
  const colors = await fetchColorsList()   // descarga de la API (y guarda en localStorage)

  itemsContainer.innerHTML = ""            // vacía la lista para no duplicar
  colors.forEach(color => addItem(color))
}

loadButton.addEventListener("click", reloadColors)

init();