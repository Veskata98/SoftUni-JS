// 8.	Diagonal Attack
// Write a function that reads a given matrix of numbers, and checks if both main diagonals have an equal sum.
// If they have, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
// Input
// The input comes as an array of strings. Each element represents a string of numbers, with spaces between them.
// Parse it into a matrix of numbers, so you can work with it.
// Output
// The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum,
// or the original matrix if the two diagonals have different sums. You need to print every row on a new line,
// with cells separated by a space. Check the examples below.

function diagonalAttack(array) {
  let newArr = [];
  let equalSumFlag = false;

  let sumDiagonal = 0;
  let sumReverseDiagonal = 0;

  for (const el of array) {
    newArr.push(el.split(" "));
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (i === j) {
        sumDiagonal += +newArr[i][j];
      }
      if (i === newArr.length - 1 - j && j === newArr.length - 1 - i) {
        sumReverseDiagonal += +newArr[i][j];
      }
    }
  }

  if (sumDiagonal === sumReverseDiagonal) {
    equalSumFlag = true;
  }

  if (equalSumFlag) {
    for (let i = 0; i < newArr.length; i++) {
      for (let j = 0; j < newArr.length; j++) {
        if (
          i == j ||
          (i === newArr.length - 1 - j && j === newArr.length - 1 - i)
        ) {
        } else {
          newArr[i][j] = sumDiagonal;
        }
      }
    }
  }

  for (const el of newArr) {
    console.log(el.join(" "));
  }
}

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
