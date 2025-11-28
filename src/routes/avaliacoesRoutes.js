import express from 'express';

import { obterAvaliacoes, 
    criarAvaliacao, 
    atualizarAvaliacao, 
    deletarAvaliacao 
} from '../controllers/avaliacoes.controller.js'


const routes = express.Router();

routes.get('/', obterAvaliacoes);
routes.post('/', criarAvaliacao);
routes.put('/:id', atualizarAvaliacao);
routes.delete('/:id', deletarAvaliacao);

export default routes;