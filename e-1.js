/* 
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

let name = "Carmen";
console.log(name);

let age = 32;
console.log(age);

let dev = true;
console.log(dev);

let a = new Date();
a = "14/06/1990";
console.log(a);

let book = {};
book = {
  name: "War & Peace",
  author: "Leon Tolstoi",
  publicationYear: 1869,
  rating: 4.5,
  url: "https://www.litcharts.com/lit/war-and-peace",
};

console.log(book.name);
console.log(book.author);
console.log(book.url);
console.log(book);