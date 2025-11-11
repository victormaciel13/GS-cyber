const express = require("express");
const app = express();

app.use(express.json());

// Rota principal – simula a home do MentIA
app.get("/", (req, res) => {
  res.send(`
    <h1>MentIA</h1>
    <p>Plataforma para apoiar carreiras no futuro do trabalho.</p>
  `);
});

// Rota de login – só pra ter formulário/entrada
app.post("/login", (req, res) => {
  const { email } = req.body;
  res.send({ message: `Usuário ${email} logado (fake).` });
});

// Rota de dashboard – exemplo de área autenticada
app.get("/dashboard", (req, res) => {
  res.send(`
    <h2>Dashboard MentIA</h2>
    <p>Aqui ficarão recomendações de carreira, trilhas, cursos, etc.</p>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MentIA rodando em http://localhost:${PORT}`);
});
