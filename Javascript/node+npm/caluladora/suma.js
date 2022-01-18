import { program } from "commander";
import { suma } from "./calculadora.js"

program
    .option('-a, --a <type>', 'left unit')
    .option('-b, --b <type>', 'right unit');

program.parse(process.argv);

console.log(`El resultado de sumar ${program.opts().a} y ${program.opts().b} es: ${suma(parseInt(program.opts().a), parseInt(program.opts().b))}`);
