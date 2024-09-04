const pingController = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("pong");
};

const helloController = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello world");
};

module.exports = {
  pingController,
  helloController,
};
