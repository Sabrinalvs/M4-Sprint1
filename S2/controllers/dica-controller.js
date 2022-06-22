export const dica = (app) =>{
    app.get('/tips', (req, res) => {
        res.send({'Todas as dicas ': armazDica.dicas})
    })
    app.post('/create', (req, res) => {
        const novaDica = new Dica (req.body.dica);
        armazDica.dicas.push(novaDica)
        res.send({"Dica armazenada": novaDica});
    })
}

import {armazDica} from "../infra/bd.js"
import {Dica} from "../models/dica-model.js"