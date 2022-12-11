/*
- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

let now = new Date(24 * 3600 * 1000);
console.log(now);

let myBirthday = new Date(1990, 5, 14);
console.log(myBirthday);

let isLater = now > myBirthday ? true : false;
console.log(isLater);

let myDate = myBirthday.getDate();
console.log(myDate);

let myMonth = myBirthday.getMonth() + 1;
console.log(myMonth);

let myYear = myBirthday.getFullYear();
console.log(myYear);
