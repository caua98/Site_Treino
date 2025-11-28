const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Caminho da pasta "frontend"
const frontendPath = path.join(__dirname, "..", "frontend");

// Torna a pasta inteira pública (HTML, CSS, JS, imagens, etc.)
app.use(express.static(frontendPath));

// Rotas
app.get("/", (req, res) => {
  res.sendFile(path.join(frontendPath, "pages", "index.html"));
});

app.get("/sing_up", (req, res) => {
  res.sendFile(path.join(frontendPath, "pages", "sing_up.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
