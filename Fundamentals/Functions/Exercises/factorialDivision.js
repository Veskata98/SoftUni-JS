// 10. Factorial Division
// Write a function that receives two integer numbers. Calculate the factorial of each number.
// Divide the first result by the second and print the division formatted to the second decimal point.

function factorial(number) {
  if (number <= 0) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

factorialDivision(5, 2);
