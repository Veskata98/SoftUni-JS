// 2.	Number Modification
// Write a JS program that changes a number until the average of all its digits is not higher than 5.
// To modify the number, your program should append a 9 to the end of the number,
// when the average value of all its digits is higher than 5 the program should stop appending.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5.
// The output should be printed on the console.
// Constraints
// •	The input number will consist of no more than 6 digits.
// •	The input will be a valid number (there will be no leading zeroes).

function numberModification(number) {
  let digits = number.toString().split("").map(Number);
  let sumDigits = 0;

  for (const el of digits) {
    sumDigits += el;
  }
  if (Math.floor(sumDigits / digits.length) < 5) {
    numberModification(number + "9");
  } else {
    console.log(number);
  }
}

numberModification(5835);
