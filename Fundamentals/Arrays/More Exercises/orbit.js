// 9.	Orbit
// You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
// You will be given a coordinate of a cell, which will always be inside the matrix,
// on which you will put the value - 1. Then you must set the values of the cells directly surrounding that cell,
// including the diagonals, to 2. After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.
// For example, we are given a matrix that has 5 rows and 5 columns and the star is at coordinates - 0, 0. Then the following should happen:

// If the coordinates of the star are somewhere in the middle of the matrix for example - 2, 2, then it should look like this:

// Input
// The input comes as an array of 4 numbers [width, height, x, y], which represents the dimensions of the matrix and the coordinates of the star.
// Output
// The output is the filled matrix, with the cells separated by a space, each row on a new line.

function orbit(arr) {
  let rows = arr[0];
  let cols = arr[1];

  let x = arr[2];
  let y = arr[3];

  let ar = new Array(rows);
  let array = Array.from(Array(rows), () => new Array(cols));

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
    }
  }

  for (const el of array) {
    console.log(el.join(" "));
  }
}

orbit([5, 5, 0, 0]);
