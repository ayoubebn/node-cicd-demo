const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Bonjour depuis le pipeline CI/CD!' });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
