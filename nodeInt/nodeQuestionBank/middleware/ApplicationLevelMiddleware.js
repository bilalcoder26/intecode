// Application-Level Middleware
//Bound to the entire app instance using app.use() or app.METHOD().

const express = require('express');
const app = express();

// Runs for every request
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Runs only for /user/:id path
app.use('/user/:id', (req, res, next) => {
  console.log('User middleware for:', req.params.id);
  next();
});

// Runs only for GET /user/:id
app.get('/user/:id', (req, res, next) => {
  res.send('USER');
});