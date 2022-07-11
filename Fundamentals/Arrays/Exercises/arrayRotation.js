// 4.	Array Rotation
// Write a function that receives an array and the number of rotations you have to perform.
// Note: Depending on the number of rotations, the first element goes to the end.
// Output
// Print the resulting array elements separated by a single space.

function arrayRotation(arr, number) {
  while (number > 0) {
    arr.push(arr.shift());
    number--;
  }
  console.log(arr.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
