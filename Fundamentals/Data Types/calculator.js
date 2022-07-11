// 8.	*Calculator
// Write a function that receives 3 parameters: a number, an operator (string), and another number.
// The operator can be:  '+', '-', '/', '*'.
// Print the result of the calculation on the console formatted to the second decimal point.

function calculator(n1, operator, n2) {
  console.log(eval(n1 + operator + n2).toFixed(2));
}

calculator(5, "+", 10);
