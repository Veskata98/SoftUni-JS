// 3.	Rotate Array
// Write a function that rotates an array.
// The array should be rotated to the right side, meaning that the last element should become the first, upon rotation.
// The input comes as an array of strings.
// The last element of the array is the amount of rotation you need to perform.
// The output is the resulting array after the rotations.
// The elements should be printed on one line, separated by a single space.

function rotateArray(arr) {
  let newArr = arr.slice(0, arr.length - 1);
  for (let i = 0; i < arr[arr.length - 1]; i++) {
    let lastEl = newArr.pop();
    newArr.unshift(lastEl);
  }
  console.log(newArr.join(" "));
}

rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
