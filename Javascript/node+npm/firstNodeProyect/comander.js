const nombre = process.argv[2];
const apellido = process.argv[3];

import { program } from "commander";

program
  .option('-n, --nombre <type>')
  .option('-a, --apellido <type>')

program.parse(process.argv);

console.log(`Hola, me llamo ${nombre}  y mi apellido es ${apellido}`)