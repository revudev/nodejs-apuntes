// .js  -> por defecto usa CommonJS
// .cjs -> para utilizar CommonJS
// .mjs -> utilizando Es modules ESTE ES MODERNO Y RECOMENDADO

import { sum, mul, div, mod } from "./sum.mjs";

console.log(sum(1, 2));
console.log(mul(1, 2));
console.log(div(1, 2));
console.log(mod(1, 2));
