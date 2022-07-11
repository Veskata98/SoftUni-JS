// 1.	Print N-th Element
// Write a function that collects each element of an array, on a given step.
// The input comes as an array of strings. The last element is N - the step.
// The collections are every element on the N-th step starting from the first one.
// If the step is "3", you need to print the 1-st, the 4-th, the 7-th … and so on,
// until you reach the end of the array. Then, print elements in a row, separated by a single space.

function printNthElement(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i += +arr[arr.length - 1]) {
    res.push(arr[i]);
  }
  console.log(res.join(" "));
}

printNthElement(["1", "2", "3", "4", "5", "6"]);
