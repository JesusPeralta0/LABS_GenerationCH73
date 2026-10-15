document.getElementById("form1").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = this.elements["fname"].value;
  const apellido = this.elements["lname"].value;

  console.log(nombre);
  console.log(apellido);
});