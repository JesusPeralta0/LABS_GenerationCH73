function getLinks() {
  const enlaces = document.getElementsByTagName("a");

  alert(
    "Número de enlaces: " + enlaces.length +
    "\nPrimer enlace: " + enlaces[0].href +
    "\nÚltimo enlace: " + enlaces[enlaces.length - 1].href
  );
}