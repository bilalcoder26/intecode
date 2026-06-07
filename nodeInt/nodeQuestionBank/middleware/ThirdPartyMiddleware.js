//5. Third-Party Middleware

const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const compression = require('compression');

app.use(cors());                    // Enable CORS
app.use(helmet());                  // Security headers
app.use(morgan('combined'));        // Logging
app.use(compression());             // Gzip compression
app.use(require('express-rate-limit')({ windowMs: 15*60*1000, max: 100 })); // Rate limiting