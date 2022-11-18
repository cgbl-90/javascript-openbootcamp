// Declaration
let nombre = "Carmen";

let str = "Carmen estudia historia en la Universidad";
console.log(str);

let str2 = `${nombre} es estudiante de historia en la Universidad`;
console.log(str2);

// Declaration for array Strings
let array_str = [
  "Empieza por el por qué",
  "El monje que vendió su Ferrari",
  "El poder del ahora",
];

// Length of a string
console.log(str2.length);

// Get part of a screen
console.log(str2.substring(10, 20)); // Same results as --> console.log(str2.slice(10, 20));
console.log(str2.substring(10));
console.log(str2.slice(10, 20));

// Delete spaces
let str_3 = "    String with spaces at the beginning and end   ";
console.log(str_3.length);
console.log(str_3.trim().length);
console.log(str_3.trimStart());
console.log(str_3.trimStart().length);
console.log(str_3.trimEnd());
console.log(str_3.trimEnd().length);

// Get the character from position 15
console.log(str_3.charAt(15));
console.log(str_3[15]);

// Position of a word inside a string
console.log(str2.indexOf("Universidad"));
console.log(str2.charAt(9));
console.log(str2.lastIndexOf("Universidad"));

// Convert to lower or upper case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// Replace one word with another
console.log(str2.replace("Universidad", "Escuela"));

// Replace the word all times, not just the first time.
console.log(str2.replace(/en/g, "nueva"));

// Find a word
console.log(str2.match(/en/g));

// Find a word inside a string
console.log(str2.includes("Universidad"));

// If the text starts with the word
console.log(str2.startsWith("Universidad"));

// If the text ends with the word
console.log(str2.endsWith("Universidad"));
