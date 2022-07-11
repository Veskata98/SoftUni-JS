// 6.	Magic Matrices
// Write a function that checks if a given matrix of numbers is magical.
// A matrix is magical if the sums of the cells of every row and every column are equal.
// Input
// The input comes as an array of arrays, containing numbers (number 2D matrix). The input numbers will always be positive.
// Output
// The output is a Boolean result indicating whether the matrix is magical or not.

function magicMatrices(arr) {
  let flag = true;
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let sumX = 0;
    let sumY = 0;

    for (let j = 0; j < arr.length; j++) {
      sumX += arr[i][j];
      sumY += arr[j][i];
    }

    array.push(sumX, sumY);
  }
  flag = array.every((val, i, arr) => val === arr[0]);
  console.log(flag);
}

magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//WORKING WITH DIAGONALS ||
//                       VV

// function magicMatrices(arr) {
//   let flag = true;
//   let sumDiagonal = 0;
//   let sumReverveDiagonal = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sumX = 0;
//     let sumY = 0;

//     for (let j = 0; j < arr.length; j++) {
//       sumX += arr[i][j];
//       sumY += arr[j][i];

//       if (i === j) {
//         sumDiagonal += arr[i][j];
//       }

//       if (i === arr.length - 1 - j && j === arr.length - 1 - i) {
//         sumReverveDiagonal += arr[i][j];
//       }
//     }

//     if (sumX !== sumY) {
//       flag = false;
//       return console.log(flag);
//     }
//   }
//   if (sumDiagonal !== sumReverveDiagonal) {
//     console.log(!flag);
//   } else {
//     console.log(flag);
//   }
// }

// magicMatrices([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
