// 6. Sign Check
// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative.
// Try to do this WITHOUT multiplying the 3 numbers.
// Input
// The input comes as parameters named numOne, numTwo, numThree.
// Output
// •	If the result is positive, print on the console -> "Positive"
// •	Otherwise, print -> "Negative"

function signCheck(num1, num2, num3) {
  let negativeCount = 0;
  if (num1.toString().includes("-")) {
    negativeCount++;
  }
  if (num2.toString().includes("-")) {
    negativeCount++;
  }
  if (num3.toString().includes("-")) {
    negativeCount++;
  }

  if (negativeCount === 1 || negativeCount === 3) {
    return console.log("Negative");
  } else {
    return console.log("Positive");
  }
}

signCheck(1, 2, 3);
