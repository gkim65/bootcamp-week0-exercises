/**
 * Part 1:
 *    What will print and why? >>> 1 2 undefined (function x gives undefined because it didn't assign a value to a )
 *    What will change if we delete line 15? Why? >>>> 1 2 1 (This time it prints 1 instead of undefined because there is a global variable `a` defined previously)
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  console.log(a);
}

const y = () => {
  a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
