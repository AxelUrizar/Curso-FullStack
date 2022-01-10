let getPrecioFinal = (numero, prefijo = "RX") => prefijo + numero;
let random = Math. floor(Math. random() * 999);
let resultado = getPrecioFinal(random);


console.log("El robot se llama: ", resultado);


let nombre = 'Axel'
let partLetter = nombre.substring(0,2).toUpperCase();
mai=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z"];

let firstLetterNum = mai.indexOf(partLetter.substring(0, 1))+1;

let secondLetterNum = mai.indexOf(partLetter.substring(1, 2))+1;

console.log('el resultado es: ' , partLetter + '-' + firstLetterNum + '-' + secondLetterNum)