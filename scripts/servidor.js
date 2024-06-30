const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Request recibido");
  res.end("Hola mundo");
});

server.listen(0, () => {
  console.log(`Escucho en el puerto ${server.address().port}`);
});
