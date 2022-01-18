import { program } from "commander";
import { suma } from "./calculadora";

program
    .option('-a, --a <type>', 'left unit')
    .option('-b, --b <type>', 'right unit');

const main = async () => {
    program
        .command('run')
        .action(run);

    return suma(program.opts().a, program.opts().b)
};

