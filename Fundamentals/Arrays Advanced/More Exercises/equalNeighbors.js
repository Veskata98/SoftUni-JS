// 1.	Equal Neighbors
// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type (numbers or strings).
// The input comes as an array of arrays, containing string elements (2D matrix of strings).
// The output is the return value of your function. Save the number of equal pairs, you find and return it.

function equalNeighbors(array) {
  let count = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1; j < array[i].length; j++) {
      if (array[i][j] === array[i + 1][j]) {
        count++;
      }
      if (array[i][j] === array[i][j - 1]) {
        count++;
      }
    }
  }
  for (let i = 0; i < array[array.length - 1].length; i++) {
    if (array[array.length - 1][i] == array[array.length - 1][i + 1]) {
      count++;
    }
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i][0] == array[i + 1][0]) {
      count++;
    }
  }
  console.log(count);
}

equalNeighbors([
  ["2", "2", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
