const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello from CI/CD Pipeline 🚀");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

