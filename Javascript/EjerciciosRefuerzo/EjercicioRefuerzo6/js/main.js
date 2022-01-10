const iva = 0.21;
let precio = parseFloat(prompt('Indica el precio del producto'));

let valor = precio + iva * precio;

alert(`El precio con IVA es de ${valor}€`)