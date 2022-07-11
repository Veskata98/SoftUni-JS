// 4.	Jan's Notation
// Write a program that parses a series of instructions written in postfix notation and
// executes them (postfix means the operator is written after the operands).
// You will receive a series of instructions – if the instruction is a number, save it; otherwise,
// the instruction is an arithmetic operator (+-*/) and you must apply it to the most two most recently saved numbers.
// Discard these two numbers and in their place, save the result of the operation – this number is now
// eligible to be an operand in a subsequent operation. Keep going until all input instructions have been exhausted,
// or you encounter an error.

// In the end, if you’re left with a single saved number, this is the result of the calculation and you must print it.
// If there are more numbers saved, then the user-supplied too many instructions and you must print "Error: too many operands!".
// If at any point during the calculation you don’t have two numbers saved, the user-supplied too few instructions and you must
// print "Error: not enough operands!".  See the examples for more details.

// Input
// You will receive an array with numbers and strings – the numbers will be operands and must be saved;
// the strings will be arithmetic operators that must be applied to the operands.

// Output
// Print on the console on a single line the final result of the calculation or an error message, as instructed above.

// Constraints
// •	The numbers (operands) will be integers
// •	The strings (operators) will always be one of +-*/
// •	The result of each operation will be in the range [-253…253-1] (MAX_SAFE_INTEGER will never be exceeded)

function jansNotation(arr) {
  let numberCount = 0,
    operatorCount = 0;

  for (const el of arr) {
    if (isNaN(el)) {
      operatorCount++;
    } else {
      numberCount++;
    }
  }

  if (numberCount > operatorCount + 1) {
    console.log("Error: too many operands!");
    return;
  } else if (numberCount <= operatorCount) {
    console.log("Error: not enough operands!");
    return;
  }

  let indexToDeleteFrom = 0;
  let index = 0;
  let numbersArr = [];
  let operator = "";

  while (arr.length !== 1) {
    index = 0;
    numbersArr = [];
    while (!isNaN(arr[index])) {
      if (isNaN(arr[index + 1])) {
        numbersArr.push(arr[index - 1], arr[index]);
        operator = arr[index + 1];
        indexToDeleteFrom = arr.indexOf(arr[index - 1]);
      }
      index++;
    }

    let string = numbersArr[0] + operator + numbersArr[1];

    arr.splice(indexToDeleteFrom, 3, eval(string));
  }
  console.log(arr.join(""));
}

jansNotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
