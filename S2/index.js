import express from "express";
const app=express();

app.use(express.json());

import {dica} from './controllers/dica-controller.js';
dica(app)

app.listen(3002, () => {
    console.log('Porta 3002 ativada');
})

// import readline from 'readline';

// import {armazDica} from "./infra/bd.js"

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const enviarDica = function() {
//     rl.question('Adicione uma dica ou digite SAIR para gerar uma dica aleatória :', function (answer){
//         if (answer.toUpperCase() == 'SAIR'){
//             console.log(armazDica.dicas[0]);
//             return rl.close();
//         }
//         armazDica.dicas.push(answer)
//         enviarDica()
//     });
// };
// enviarDica();

