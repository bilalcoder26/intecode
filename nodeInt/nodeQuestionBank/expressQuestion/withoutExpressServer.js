// Without Express (vanilla Node.js):
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ users: ['Alice', 'Bob'] }));
  } else if (req.url === '/users' && req.method === 'POST') {
    // Handle POST...
  }
  // Much more manual routing logic...
});

server.listen(3000);