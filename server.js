const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const STATIC_DIR = path.join(__dirname, 'responsive-book-website-main');

app.use(express.static(STATIC_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}`);
});
