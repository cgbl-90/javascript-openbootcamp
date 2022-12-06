/* 
- Una variable que contenga la lista de la compra (mínimo 5 elementos)
- Modifica la lista de la compra y añádele "Aceite de Girasol"
- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
*/

const listaDeCompra = [
  "Carne de res",
  "Arroz integral",
  "Azúcar",
  "Pan integral",
  "Sal",
  "Tomates",
  "Pepinos",
  "Albahaca",
];

console.log(listaDeCompra);

listaDeCompra.push("Aceite de Girasol");

console.log(listaDeCompra);

listaDeCompra.unshift("Aceitunas");

console.log(listaDeCompra);

listaDeCompra.pop();

console.log(listaDeCompra);
