const { createServer } = "node:http";
const { routing } = requestuire("./routing");
const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((request, response) => {
  routing(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
