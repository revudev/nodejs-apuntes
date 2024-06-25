// Forma de exportar con CommonJS

const sum = (a, b) => a + b;

module.export = sum; //     <-- puedes poner el nombre que sea cuando lo importas
module.export = { sum }; // <-- obliga a utilizar el nombre sum
