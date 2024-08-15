const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Importa as rotas
const foodsRoutes = require("./routes/foodsRoutes");

app.use("/api/foods", foodsRoutes);

// Rota raiz
app.get("/", (req, res) => {
  res.send("Sistema de Estoque");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

require("./database/connection");
