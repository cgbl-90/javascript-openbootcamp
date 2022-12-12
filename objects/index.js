/*

Crea un nuevo fichero JS que contenga las siguientes líneas

- Una clase llamada "Estudiante" que tenga:

- Una variable llamada nombre

- Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS

- Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas

- Crea una nueva instancia de "Estudiante"

- Haz la llamada al método obtenDatos

*/

const estudiante = {
  nombre: "Carmen",
  edad: 15,
  materias: ["Javascript", "HTML", "CSS"],
  obtenDatos: function () {
    return `${nombre} tiene 3 materias: ${materias}`;
  },
};

console.log(estudiante.obtenDatos);
