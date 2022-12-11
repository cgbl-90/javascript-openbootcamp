/*

- Un nuevo Set con los nombres de tu familia

- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

- Modifica el Set original añadiendo el nombre "Javascript"

*/

const fliaNames = new Set([
    "Carmen",
    "Freddy",
    "Fidel",
    "Freddy M.",
    "Elsa",
    "Alexander",
]);

console.log(fliaNames);

fliaNames.add("Carmen");

console.log(fliaNames);

fliaNames.add("JavaScript");

console.log(fliaNames);