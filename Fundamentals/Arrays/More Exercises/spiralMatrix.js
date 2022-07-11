// 7.	Spiral Matrix
// Write a function that generates a Spirally filled matrix with numbers, with given dimensions.
// Input
// The input comes as 2 numbers that represent the dimension of the matrix.
// Output
// The output is the matrix filled spirally starting from 1.
// You need to print every row on a new line, with the cells separated by a space. Check the examples below.

function spiralMatrix(x, y) {
  let arr = Array.from(Array(x), () => new Array(y));

  let direction = "right";

  let top = 0;
  let left = 0;
  let right = x - 1;
  let bottom = y - 1;

  let count = 1;

  while (count <= x * y) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        arr[left][i] = count;
        count++;
      }
      direction = "bottom";
      top++;
    }
    if (direction === "bottom") {
      for (let i = top; i <= bottom; i++) {
        arr[i][right] = count;
        count++;
      }
      right--;
      direction = "left";
    }
    if (direction === "left") {
      for (let i = right; i >= left; i--) {
        arr[bottom][i] = count;
        count++;
      }
      bottom--;
      direction = "top";
    }
    if (direction === "top") {
      for (let i = bottom; i >= top; i--) {
        arr[i][left] = count;
        count++;
      }
      left++;
      direction = "right";
    }
  }

  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index].join(" "));
  }
}

spiralMatrix(3, 3);
