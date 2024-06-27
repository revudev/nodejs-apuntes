// Para usar await sin async hay que cambiar la extension a .mjs
// -------------------------------------------------------------------------------------------------------
const fs = require("node:fs/promises");

// Para transformar a promesas, pero en caso muy especifico, en los modulos nativos sin promesas
const { promisify } = require("node:util");
const readFilePromise = promisify(fs.readFile);

// -------------------------------------------------------------------------------------------------------

// Funcion asincrona que se ejecuta con un callback cuando termina
console.log("Leyendo el primer archivo");
fs.readFile("./nombres.txt", "utf-8").then((text) => {
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
fs.readFile("./apellidos.txt", "utf-8").then((text) => {
  console.log(text);
});

// ---------------------------------Tambien se puede con una funcion auto invocada--------------------------
// IIFE - Inmediatly Invoked Function Expression
(async () => {
  console.log("Leyendo el segundo archivo");
  const text = await fs.readFile("./apellidos.txt", "utf-8");
  console.log(text);
})();
