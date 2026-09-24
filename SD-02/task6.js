// Refer to Task 6 in your Instructions to complete this task
let resultado = [];

for (let i = 1; i <= 105; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
        resultado.push("Fizz");
    } else if (i % 5 === 0) {
        resultado.push("Buzz");
    } else {
        resultado.push(i);
    }
}

console.log(resultado);