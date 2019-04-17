const express = require('express');

const app = express();

app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => {
  res.sendFile('./index.html');
});

const server = app.listen(3000, () => {
  console.log('App running on port 3000');
});

module.exports = server;
