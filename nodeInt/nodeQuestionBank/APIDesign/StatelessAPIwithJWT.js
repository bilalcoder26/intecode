//2. Stateless API with JWT

// Avoid Server-Side Sessions
// ❌ BAD - Stateful (won't scale horizontally)
const sessions = new Map(); // Lost if server restarts

app.post('/login', (req, res) => {
  const sessionId = uuid();
  sessions.set(sessionId, { userId: 123 });
  res.json({ sessionId });
});

app.get('/profile', (req, res) => {
  const session = sessions.get(req.headers.sessionid);
  // Session not shared across servers!
});

// ✅ GOOD - Stateless with JWT
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  const user = await authenticate(req.body);
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
  res.json({ token });
});

app.get('/profile', authenticateJWT, (req, res) => {
  // User info from token, no session storage needed
  res.json({ user: req.user });
});

function authenticateJWT(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}