import express from "express";
import { obterLivros, 
    criarLivro, 
    atualizarLivro, 
    deletarLivro 
} from "../controllers/livros.controller.js";

const routes = express.Router();

routes.get("/", obterLivros);
routes.post("/", criarLivro);
routes.put("/:id", atualizarLivro);
routes.delete("/:id", deletarLivro);

export default routes;