//3. Error-Handling Middleware

// Identified by 4 parameters (err, req, res, next).

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: err.message 
  });
});

// Example usage
app.get('/danger', (req, res, next) => {
  try {
    throw new Error('Boom!');
  } catch (err) {
    next(err); // Pass to error handler
  }
});