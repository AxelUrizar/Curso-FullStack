const PI = 3.141592653589793;

let figura = prompt("Que figura quieres? Cuadrado, Círculo o Triángulo.");

switch (figura) {
    case "Cuadrado":
        let lado = parseInt(prompt("Dame la medida de uno de sus lados"));
        let areaCuadrado = lado * lado;

        console.log(`Su area es de ${areaCuadrado}`);

        break;

    case "Círculo":
        let radio = parseInt(prompt("Dame la medida de su radio"));
        let areaCirculo = (radio * radio) * PI;

        console.log(`Su area es de ${areaCirculo}`);

        break;

    case "Triángulo":
        let base = parseInt(prompt("Dame la base del Triángulo"));
        let altura = parseInt(prompt("Dame la altura del Triángulo"));

        let areaTriangulo = (base * altura) / 2;

        console.log(`Su area es de ${areaTriangulo}`);

        break;

    default:

        console.log("Esa figura no entra entre las tres nombradas, recuerda usar accentos y mayúsculas.")

        break;
}