const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const filePath = path.resolve('../arduinoData.txt');

app.get('/api/data', (req, res) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      return res.status(500).json({ error: 'Erro ao ler o arquivo' });
    }

    const lines = content.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    try {
      const jsonData = JSON.parse(
        lastLine.replace(/([a-zA-Z0-9_]+?):/g, '"$1":').replace(/'/g, '"')
      );
      res.json(jsonData);
    } catch (e) {
      res.status(500).json({ error: 'Erro ao analisar JSON' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
