const express = require('express');
const path = require('path');

const app = express();

// Servir archivos estáticos desde "dist"
app.use(express.static(path.join(__dirname, 'dist')));

// Manejar todas las rutas y devolver "index.html"
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Puerto dinámico para Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});