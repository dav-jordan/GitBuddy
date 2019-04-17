const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./src/index.html', { root: __dirname });
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
