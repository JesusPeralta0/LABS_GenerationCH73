// Refer to Task 7 in your Instructions to complete this task
let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang",
    "Zap",
    "Pop",
    "Boom",
    "Pow",
    "Crack",
    "Flash",
    "Spark",
    "Blast",
    "Thunder",
    "Rocket",
    "Fire",
    "Storm",
    "Wave",
    "Shock",
    "Zoom",
    "Blaze",
    "Rush",
    "Glow",
    "Burst",
    "Fury"
];

for (let i = 0; i < 1; i++) {
    console.log("This is Task Seven!");
}

let primeNumbers = [
    3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
    37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
    79, 83, 89, 97, 101, 103
];

let resultado = [];

for (let i = 1; i <= 105; i++) {

    let posicion = primeNumbers.indexOf(i);

    if (posicion !== -1) {
        resultado.push(buzzWords[posicion]);
    } else {
        resultado.push(i);
    }
}

console.log(resultado);