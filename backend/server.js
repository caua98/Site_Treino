require('dotenv').config(); // Mantém aqui para o PORT, se necessário
const express = require("express");
const path = require("path");
const loginRouter = require('./routes/login');
const singUpRouter = require('./routes/sing_up');

const app = express();
const PORT = process.env.PORT || 3000; // Boa prática: usar porta do .env ou 3000

// Caminho da pasta "frontend" - Ajustado para garantir que suba um nível corretamente
const frontendPath = path.join(__dirname, "..", "frontend");

// Middlewares
app.use(express.static(frontendPath));
app.use(express.json());

// API Routes
app.use('/api', loginRouter);
app.use('/api', singUpRouter);

// Frontend Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "pages", "index.html"));
});

app.get("/sing_up", (req, res) => {
  res.sendFile(path.join(frontendPath, "pages", "sing_up.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});