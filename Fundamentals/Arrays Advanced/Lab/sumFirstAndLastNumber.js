// 1.	Sum First and Last
// Write a function that calculates and prints the sum of the first and the last elements in an array.
// The input comes as an array of string elements holding numbers.
// The output is printed on the console.

function sumFirstAndLastNumber(arr) {
  console.log(+arr[0] + +arr[arr.length - 1]);
}

sumFirstAndLastNumber(["20", "30", "40"]);
