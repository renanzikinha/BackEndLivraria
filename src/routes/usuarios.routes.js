import 
{ CriarUsuario,
     listaUsuario,
      obterUsuario,
      deletarUsuario, 
      atualizaUsuario} from "../controllers/usuarios.controller.js";


      import express from "express";

      const routes = express.Router();
      
routes.get("/", listaUsuario);
routes.post("/", CriarUsuario);
routes.get("/:id", obterUsuario);
routes.put("/:id", atualizaUsuario);
routes.delete("/:id", deletarUsuario);

export default routes;