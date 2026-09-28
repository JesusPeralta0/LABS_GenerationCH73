function Carro(marca, modelo, año) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
}

const marca = prompt("Ingrese la marca")
const modelo = prompt("Ingrese el modelo")
const año = Number(prompt("Ingrese el año"))

const auto = new Car(marca, modelo, año)

console.log(auto)