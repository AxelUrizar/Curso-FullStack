let numArray = [];
let arrayLength = parseInt(prompt('Que tamaño tendrá la Array?'));
let resultado = 0;

for (let i = 0; i < arrayLength; i++) {
    numArray.push(Math.floor(Math.random() * 10));
    resultado = resultado + numArray[i];
}

console.log(numArray);
console.log(resultado);