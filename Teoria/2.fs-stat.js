const fs = require("node:fs");

const stats = fs.statSync("./nombres.txt");

console.log(stats.isFile());
console.log(stats.isDirectory());
console.log(stats.size);
console.log(stats.birthtime);
console.log(stats.ctime);
