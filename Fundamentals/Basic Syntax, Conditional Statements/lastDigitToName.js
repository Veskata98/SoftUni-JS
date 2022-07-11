// 2.	English Name of the Last Digit
// Write a function that returns the English name of the last digit of a given number.
// Write a program that receives a number and prints the returned value from this function.

function lastDigitToName(number) {
  let lastDigit = number.toString().split("");
  switch (+lastDigit[lastDigit.length - 1]) {
    case 0:
      console.log("zero");
      break;
    case 1:
      console.log("one");
      break;
    case 2:
      console.log("two");
      break;
    case 3:
      console.log("three");
      break;
    case 4:
      console.log("four");
      break;
    case 5:
      console.log("five");
      break;
    case 6:
      console.log("six");
      break;
    case 7:
      console.log("seven");
      break;
    case 8:
      console.log("eight");
      break;
    case 9:
      console.log("nine");
      break;
  }
}

lastDigitToName(510);
