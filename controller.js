const handlePing = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("pong");
};

const handleHello = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world");
};

module.exports = {
  handlePing,
  handleHello
};
