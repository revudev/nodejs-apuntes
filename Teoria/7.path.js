const path = require("node:path");

console.log("Para saber la barra espaciadora en SO: ", path.sep);

console.log(
  "Unir rutas sin depender de SO: ",
  path.join("./content", "subfolder", "nombres.txt")
);

console.log(
  "Conseguir el nombre del fichero base: ",
  path.basename("./content", "subfolder", "nombres.txt", ".txt") // 2 param quita sufijo
);

console.log(
  "Da la extension al final del fichero de una ruta: ",
  path.extname("nombres.txt")
);
