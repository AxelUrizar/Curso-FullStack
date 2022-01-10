let libra = 0.86
let dolar = 1.13
let yen = 129.85

let moneda = prompt("¿A que moneda quieres cambiar?: Libra, Dolar o Yen.");

switch (moneda) {
    case "Libra":
        euro = parseInt(prompt("Cuantos euros quieres cambiar?"));
        totalLibras = euro * libra;

        console.log(`Tus ${euro}€ pasarán a ${totalLibras} Libras`)

        break;

    case "Dolar":
        euro = parseInt(prompt("Cuantos euros quieres cambiar?"));
        totalDolares = euro * dolar;

        console.log(`Tus ${euro}€ pasarán a ${totalDolares}$`)

        break;

    case "Yen":
        euro = parseInt(prompt("Cuantos euros quieres cambiar?"));
        totalYenes = euro * yen;

        console.log(`Tus ${euro}€ pasarán a ${totalYenes} Yenes`)

        break;

    default:

        console.log('Asegurate de haber escrito bien tu moneda usando mayúsculas.');

        break;
}