// Refer to Task 5 in your Instructions to complete this task

let cantidad = Number(prompt("¿Cuántas líneas quieres generar?"));

for (let i = 1; i <= cantidad; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}