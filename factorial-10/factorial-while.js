/* 
Factorial of 10
n! = n x (n - 1) x (n - 2) x (n - 3) ... 3 x 2 x 1
*/

let max = 10;
let factorial = 1;
let i = 0;

while (i < max) {
  factorial *= max - i;
  i++;
  console.log(factorial);
}
