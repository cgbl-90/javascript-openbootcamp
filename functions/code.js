/*

Crea un archivo JS que contenga las siguientes líneas

- Una función sin parámetros que devuelva siempre "true"

- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

- Una función generadora de índices pares automáticos

*/

function boolStatus() {
  return true;
}

const timedPromise = async () => {
  await timeout(3000);
  return "Hola soy una promesa";
};

console.log(boolStatus());
console.log(timedPromise);

function* idGenerator(x) {
  while (x < 10) {
    x++;
    yield x;
  }
}

console.log(idGenerator().next());
console.log(idGenerator().next());
console.log(idGenerator().next());
console.log(idGenerator().next());
console.log(idGenerator().next());
console.log(idGenerator().next());
