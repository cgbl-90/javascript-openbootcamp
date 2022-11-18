/* 
Factorial of 10
n! = n x (n - 1) x (n - 2) x (n - 3) ... 3 x 2 x 1
*/

let max = 10;
let factorial = 1;

for (i = 0; i < max; i++) {
  factorial *= max - i;
  console.log(factorial);
}
