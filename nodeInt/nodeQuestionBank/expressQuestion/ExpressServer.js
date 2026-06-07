// With Express:
const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

app.post('/users', (req, res) => {
  // Handle POST...
});

app.listen(3000);