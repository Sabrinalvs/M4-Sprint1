import chalk from 'chalk';
import readline from 'readline';
let info = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const organizador = function () {
    rl.question('Adicione uma propriedade de CSS à lista ou digite SAIR para mostrar a lista ordenada :', function (answer) {
        if (answer.toUpperCase() == 'SAIR'){
            console.log(chalk.blue("\nLista ordenada em ordem alfabética:"));
            const infoFinal = info.sort();
            for (let i = 0; i < infoFinal.length; i++){
                console.log(infoFinal[i]);
            }
            return rl.close();
        }
        info.push(answer)
        organizador();
    });
};
console.log(chalk.blue("| Organizador de propriedades CSS |"));
organizador();