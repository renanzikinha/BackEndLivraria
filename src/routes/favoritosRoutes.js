import express from "express";
import {
  adicionarFavorito,
  removerFavorito,
  listarFavoritos,
  listarFavoritosPorUsuario
} from "../controllers/favoritos.controller.js";

const routes = express.Router();

routes.get("/", listarFavoritos);
routes.post("/", adicionarFavorito);
routes.get("/usuario/:id", listarFavoritosPorUsuario);
routes.delete("/:id", removerFavorito);

export default routes;