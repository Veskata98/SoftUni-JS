// 5.	Process Odd Numbers
// You are given an array of numbers. Write a function that prints the elements
// at odd positions from the array, doubled and in reverse order.
// The input comes as an array of number elements.
// The output is printed on the console on a single line, separated by space.

function processOddNumbers(array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 !== 0) {
      res.unshift(array[i] * 2);
    }
  }
  console.log(res.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);
