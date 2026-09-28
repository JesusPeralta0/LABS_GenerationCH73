function listacompras(items) {
    this.items = items
}

const products = []
const numberOfItems = Number(prompt("¿Cuántos artículos quieres agregar?"))
for (let i = 0; i < numberOfItems; i++) {

    const nombre = prompt("Nombre del artículo")
    const cantidad = Number(prompt("Cantidad"))

        products.push({
        name: nombre,
        quantity: cantidad
    })
}
const shoppingList = new listacompras(products)

console.log(shoppingList)


