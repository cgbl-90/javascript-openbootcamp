/* 

- Una cadena de texto con tu Nombre
- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
- Una variable que contenga la primera letra del Nombre
- Otra variable que contenga la última letra del Apellido
- Una cadena de texto que elimine los espacios de la variable "estudiante"
- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

*/

let firstname = "Carmen";
let surname = "Lopez";

let student = firstname + " " + surname;
console.log(student);

let studentMayus = student.toUpperCase();
console.log(studentMayus);

let studentMinus = student.toLowerCase();
console.log(studentMinus);

let num = student.length;

console.log(firstname[0]);
console.log(surname[surname.length - 1]);

console.log(student.replace(/\s/g, ""));

let nTrue = student.includes(firstname) ? true : false;
console.log(nTrue);
