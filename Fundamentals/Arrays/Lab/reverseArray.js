// 3.	Reverse an Array of Numbers
// Write a program, which receives a number n and an array of elements.
// Your task is to create a new array with n numbers from the original array,
// reverse it and print its elements on a single line, space-separated.

function reverseArray(n, arr) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.unshift(arr[i]);
  }
  console.log(res.join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
