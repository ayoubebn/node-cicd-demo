const express = require('express');
const app = express();
const PORT = 3000;

// Middleware pour analyser le JSON dans les requêtes
app.use(express.json());

// Route principale
app.get('/', (req, res) => {
    res.send('Hello hello Aymen and Rami');
});

// Route pour gérer le webhook GitHub
app.post('/github-webhook', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    res.status(200).send('Webhook traité avec succès');
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
});
