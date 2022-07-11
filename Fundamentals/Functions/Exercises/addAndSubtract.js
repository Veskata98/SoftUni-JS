// 2. Add and Subtract
// You will receive three integer numbers.
// Write a function sum() to calculate the sum of the first two integers and a function subtract(),
// which subtracts the result of the function the sum() and the third integer.

function addAndSubtract(a, b, c) {
  let sum = (a, b) => a + b;
  let res = sum(a, b);
  let subtract = (res, c) => res - c;

  console.log(subtract(res, c));
}

addAndSubtract(23, 6, 10);
