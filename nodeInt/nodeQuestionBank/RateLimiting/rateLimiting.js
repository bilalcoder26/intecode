// Method 1: Using express-rate-limit (Recommended)
// This is the most popular and easiest approach.
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Basic rate limiter: 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

// Apply to all requests
app.use(limiter);

// Or apply to specific routes
app.use('/api/', limiter);

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is rate limited' });
});