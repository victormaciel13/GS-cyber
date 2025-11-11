const express = require("express");
const jwt = require("jsonwebtoken"); // se ainda não tiver, instale
const app = express();

app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || "chave-fraca-apenas-dev";

// Rota principal
app.get("/", (req, res) => {
  res.send("<h1>MentIA</h1><p>Plataforma de apoio ao futuro do trabalho.</p>");
});

// Rota de login que gera um token JWT fictício
app.post("/login", (req, res) => {
  const { email } = req.body;
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  res.json({
    message: `Usuário ${email} autenticado (mock).`,
    token,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MentIA rodando em http://localhost:${PORT}`);
});
