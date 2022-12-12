/*
- Configura el proyecto para utilizar los módulos de ES6
- Crea un archivo controller.js que exporte 2 funciones: suma(a, b) y multiplica(a, b)
- En el entrypoint index.js, importa el módulo controller.js
- El entrypoint index.js debe utilizar las funciones del módulo para devolver la multiplicación de suma(1, 2) y suma(4, 5)npm i chalk
- Instala e importa la librería chalk (https://www.npmjs.com/package/chalk)

- Modifica el último console.log del entrypoint index.js para devolver el resultado en color verde


*/


import * as mymath from "./module/functions.js";
import chalk from "chalk";

console.log(mymath.suma(3, 4));
console.log(mymath.suma(68, 4));
console.log(chalk.green(mymath.suma(7, 53)));
console.log(mymath.suma(321, 345));

console.log(mymath.resta(3, 4));
console.log(chalk.red(mymath.resta(68, 4)));
console.log(mymath.resta(7, 53));
console.log(mymath.resta(321, 345));

console.log(chalk.blue(mymath.multiplica(3, 4)));
console.log(mymath.multiplica(68, 4));
console.log(mymath.multiplica(7, 53));
console.log(mymath.multiplica(321, 345));