export const dica = (app) =>{
    app.get('/tips', (req, res) => {
        let indice = armazDica.dicas[Math.floor(Math.random() * armazDica.dicas.length)]
        console.log(indice);
        res.send({'Dica aleatória': indice.dica})
    })
    app.post('/create', (req, res) => {
        const novaDica = new Dica (req.body.dica);
        armazDica.dicas.push(novaDica)
        res.send({"Dica armazenada": novaDica});
    })
}

import {armazDica} from "../infra/bd.js"
import {Dica} from "../models/dica-model.js"