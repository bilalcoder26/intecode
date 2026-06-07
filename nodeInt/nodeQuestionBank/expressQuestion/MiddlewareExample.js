
// ## Middleware Example\\

const express = require('express');
const cors = require('cors');           // Enable CORS
const helmet = require('helmet');       // Security headers
const morgan = require('morgan');       // HTTP request logging
const compression = require('compression'); // Gzip compression

// Middleware functions execute in sequence:

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next(); // Pass to next middleware/route
});

// Authentication middleware
function authenticate(req, res, next) {
  if (req.headers.authorization) {
    next(); // User is authenticated
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
}

// Protected route
app.get('/dashboard', authenticate, (req, res) => {
  res.send('Welcome to your dashboard!');
});



app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(compression());