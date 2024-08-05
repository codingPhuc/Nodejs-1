const { handleHello, handlePing } = require("./controller");

const router = (req, res) => {
  if (req.url === "/ping") {
    if (req.method === "GET") {
      handlePing(req, res);
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not allow");
    }
  } else if (req.url === "/") {
    if (req.method === "GET") {
      handleHello(req, res);
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("Method not allow");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
};

module.exports = {
    router
}