// 2.	Distinct Array
// You will be given an array of integer numbers on the first line of the input.
// Remove all repeating elements from the array.
// Print the result elements separated by a single space.

function distinctArray(array) {
  let res = new Set([...array]);
  console.log(Array.from(res).join(" "));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
