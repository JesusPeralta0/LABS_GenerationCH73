//Se crea la clase Producto y se le agrega su contructor con 3 parametros.
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }

    mostrarInfo() {
        return this.nombre + " cuesta $" + this.precio +
               " Disponible: " + this.disponible;
    }

    cambiarDisponibilidad() {
        this.disponible = !this.disponible;
    }
}

// Se agregan productos.
const producto_1 = new Producto("Laptop", 15000, true);
const producto_2 = new Producto("Mouse", 500, true);
const producto_3 = new Producto("Impresora", 3000, false);
const producto_4 = new Producto("Monitor", 3500, true);

console.log(producto_1.mostrarInfo());
console.log(producto_2.mostrarInfo());
console.log(producto_3.mostrarInfo());
console.log(producto_4.mostrarInfo());

producto_1.cambiarDisponibilidad();

console.log(`Producto: ${producto_1.nombre}, disponible: ${producto_1.disponible}`);


// Se crea la clase hija maquillaje que hereda de Producto y seleagrega un parametro propio.

class Maquillaje extends Producto {
    constructor(nombre, precio, disponible, tono) {
        super(nombre, precio, disponible);
        this.tono = tono;
    }

    mostrarInfo() {
        return this.nombre + " cuesta $" + this.precio +
               " Disponible: " + this.disponible +
               " Tono: " + this.tono;
    }
}


const maquillaje_1 = new Maquillaje(
    "Polvo",
    350,
    true,
    "Cafe"
);

console.log(maquillaje_1.mostrarInfo());