/*

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

*/

const peliculasFavoritas = [
  {
    title: "La ventana secreta",
    director: "David Koepp",
    year: 2004,
  },
  {
    title: "Star Wars: Episodio IV - Una nueva esperanza",
    director: "George Lucas",
    year: 1977,
  },
  {
    title: "El secreto de sus ojos",
    director: "Juan José Campanella",
    year: 2009,
  },
  {
    title: "Un día",
    director: "Lone Scherfig",
    year: 2011,
  },
];

const peliculasMayor2010 = peliculasFavoritas.find((p) => {
  if (p.year > 2010) return p;
});
console.log(peliculasMayor2010);

// Only directors
const directors = peliculasFavoritas.map((p) => p.director);

console.log(directors);

// Only film titles

const titulos = peliculasFavoritas.map((p) => p.title);

console.log(titulos);

// Concat directors + titulos

const listaCompleta = directors.concat(titulos);

console.log(listaCompleta);

// Factor de propagación

const listaPropagada = [...directors, ...titulos];

console.log(listaPropagada);
