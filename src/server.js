import mysql from "mysql2/promise";
// ============================
//  Dependências
// ============================
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { db } from "./config/db.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import reservaRoutes from "./routes/reservaRoutes.js";
import favoritosRoutes from "./routes/favoritosRoutes.js";
import avaliacoesRoutes from "./routes/avaliacoesRoutes.js";
import livrosRoutes from "./routes/livrosRoutes.js";



// ============================
//  Configuração do servidor
// ============================
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("API Funcionando!")
})
app.use("/Usuarios", usuariosRoutes);
app.use("/Reservas", reservaRoutes);
app.use("/Favoritos", favoritosRoutes);
app.use("/Avaliacoes", avaliacoesRoutes);
app.use("/Livros", livrosRoutes); 




// ============================
//  Inicia o servidor
// ============================
const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));