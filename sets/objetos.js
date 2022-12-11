/*

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

*/

const datosPersonales = {
  nombre: "Carmen",
  apellido: "Lopez",
  edad: 32,
  altura: 158,
  eresDesarrollador: true,
};

console.log(datosPersonales);

let edadDesarrollador = datosPersonales.edad;

console.log(edadDesarrollador);

const arrayDatos = [
  {
    nombre: "Freddy",
    apellido: "Baez",
    edad: 35,
    altura: 160,
    eresDesarrollador: true,
  },
  datosPersonales,
  {
    nombre: "Fidel",
    apellido: "Baez",
    edad: 33,
    altura: 163,
    eresDesarrollador: true,
  },
];

console.log(arrayDatos);

const arrayDatosporEdad = arrayDatos.sort((a, b) => {
  if (a.edad > b.edad) return 1;
  if (a.edad < b.edad) return -1;
  return 0;
});

console.log(arrayDatosporEdad);
