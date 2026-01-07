const http = require('http');

// Fonction pour parser le body JSON d'une requête POST
const parseBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'));
      } catch (err) {
        resolve({ raw: body });
      }
    });
  });
};

const server = http.createServer(async (req, res) => {
  // Toujours renvoyer 200 OK
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.method === 'GET') {
    res.end(JSON.stringify({ message: "Hello from CI/CD Pipeline 🚀4 (GET OK)" }));
  } else if (req.method === 'POST') {
    const data = await parseBody(req);
    console.log("Received POST data:", data);
    res.end(JSON.stringify({ message: "POST received", received: data }));
  } else {
    res.end(JSON.stringify({ message: "Method not handled, but still 200 OK" }));
  }
});

const PORT = 3001
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

