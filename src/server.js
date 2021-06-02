const app = require('./app');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Aplicativo rodando na porta ${PORT}`);
});