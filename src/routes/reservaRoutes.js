import express from "express";
import { 
  listarReservas, 
  criarReserva, 
  atualizarReserva, 
  deletarReserva,
  listarReservasAtivas
} from "../controllers/reserva.controller.js";

const routes = express.Router();

routes.get("/", listarReservas);
routes.get("/ativas", listarReservasAtivas);
routes.post("/", criarReserva);
routes.put("/:id", atualizarReserva);
routes.delete("/:id", deletarReserva);

export default routes;