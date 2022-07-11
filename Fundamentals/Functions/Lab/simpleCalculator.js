// 5. Simple Calculator
// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result
// depending on the operator. Operator can be 'multiply', 'divide', 'add' or 'subtract'.
// Try to solve this task using arrow functions.

// Bonus
// Solve this task without using any conditional statements (no if or switch statements or ternary operators).

// Input
// The input comes as parameters named numOne, numTwo, operator.

function simpleCalculator(num1, num2, operator) {
  let operators = {
    multiply: "*",
    divide: "/",
    add: "+",
    subtract: "-",
  };

  let getOperator = operators[operator];

  let expression = `${num1} ${getOperator} ${num2}`;

  return console.log(eval(expression));
}

simpleCalculator(5, 5, "multiply");
