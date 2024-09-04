const { createServer } = require("node:http");
const { routing } = require("./router");
const hostname = "127.0.0.1";
const port = 3000;
require;
const server = createServer((request, response) => {
  routing(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
