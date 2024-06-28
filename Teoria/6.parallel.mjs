import { readFile } from "node:fs/promises";

// Mas rapido porque esta en paralelo porque los lee directamente los dos
Promise.all([readFile("./nombres.txt"), readFile("./apellidos.txt")]).then(
  ([first, second]) => {
    console.log(
      first
        .toString()
        .split("\n")
        .map((name) => name.trim())
        .filter((name) => name.length > 0)
    );
    console.log(second);
  }
);
