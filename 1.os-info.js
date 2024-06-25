const os = require("os");

console.log("Nombre del sistema", os.platform());
console.log("Arquitectura", os.arch());
console.log("CPUs", os.cpus());
console.log("Memoria libre", os.freemem());
console.log("Memoria total", os.totalmem());
