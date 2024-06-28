const fs = require("node:fs");

// Funcion asincrona que se ejecuta con un callback cuando termina
console.log("Leyendo el primer archivo");
fs.readFile("./nombres.txt", "utf-8", (err, text) => {
  // por defecto readFile es asincrono
  console.log(
    text
      .toString()
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0)
  );
});

console.log("--> Haciendo algo mientras se lee el fichero...");

console.log("Leyendo el segundo archivo");
fs.readFile("./apellidos.txt", "utf-8", (err, text) => {
  console.log(text);
});
