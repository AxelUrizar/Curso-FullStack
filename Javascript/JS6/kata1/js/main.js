const pi = 3.14;

function calcularPerimetro(radio) {
    return 2 * pi * radio;
}

function calcularArea(radio) {
    return pi * (radio ** 2);
}


//variables radio y pi
let radio = prompt("¿Podría facilitarme el radio del circulo?");


console.log("El perímetro es: ", calcularPerimetro(radio));

console.log("El area es: ", calcularArea(radio));



