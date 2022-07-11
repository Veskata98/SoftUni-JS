// 5.	Rosetta Stone
// You will be given an encoded message and a template matrix for decoding it.
// The decoding is done by overlaying the template on top of the stone with the message and performing
// an arithmetic operation with the numbers that overlap. Each pair of numbers (one from the message and one from the template matrix)
// is added together and the resulting number is located on the wheel of letters (pictured to the right),
// by counting from the beginning (zero) and going clockwise. You may count more than one full revolution around the
// wheel (e.g. 6 is the same as 33 and so on). Repeat this process for all symbols of the message.

// If the decoding template matrix is smaller than the message, shift the template horizontally by as many cells as it is wide,
// so it covers the next section of the message (see example). Once you reach the last column of the message matrix,
// if there are more rows left, shift the template back to the first column, but offset it vertically by as many cells as
// it is high. See the example’s explanation for more information.
// Input
// You will receive an array of strings. The first element represents a number n, which is the length of the template matrix for decoding.
// The next n elements represent rows in the decoding template matrix, with columns separated by space.
// The rest of the elements are all rows of the encoded message matrix, with columns in each row separated by space.
// Output
// Print the decoded message in uppercase on a single line on the console.
// The final message is joined from all resulting cells, starting from top left, going right, row by row. Trailing spaces are ignored.

function rosettaStone(arr) {
  let n = +arr[0];
  let alphabet = [
    " ",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let templateMatrix = [];
  let messageMatrix = [];

  for (let i = 1; i <= n; i++) {
    templateMatrix.push(arr[i].split(" ").map(Number));
  }

  for (let i = n + 1; i < arr.length; i++) {
    messageMatrix.push(arr[i].split(" ").map(Number));
  }

  for (let i = 0; i < messageMatrix.length; i++) {
    for (let j = 0; j < messageMatrix[i].length; j++) {
      let modifier =
        templateMatrix[i % templateMatrix.length][j % templateMatrix[0].length];
      messageMatrix[i][j] += modifier;
    }
  }

  for (let i = 0; i < messageMatrix.length; i++) {
    for (let j = 0; j < messageMatrix.length; j++) {
      while (messageMatrix[i][j] > 27) {
        messageMatrix[i][j] -= 27;
      }
      if (messageMatrix[i][j] === 27) {
        messageMatrix[i][j] = 0;
      }
      messageMatrix[i][j] = alphabet[messageMatrix[i][j]];
    }
  }
  let result = "";
  for (const el of messageMatrix) {
    result += el.join("");
  }

  console.log(result.trim());
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// function solve(input) {
//   // Get size of code
//   let n = Number(input.shift());

//   // Initialize code matrix
//   let code = [];
//   for (let i = 0; i < n; i++) {
//     code.push(input.shift().split(" ").map(Number));
//   }

//   // Initialize message matrix
//   let matrix = [];
//   for (let row of input) {
//     matrix.push(row.split(" ").map(Number));
//   }

//   // Initialize decoded message
//   let result = "";

//   for (let row = 0; row < matrix.length; row++) {
//     for (let col = 0; col < matrix[0].length; col++) {
//       let current = matrix[row][col];
//       let modifier = code[row % code.length][col % code[0].length];
//       result += String.fromCharCode(((current + modifier) % 27) + 64);
//     }
//   }

//   result = result.replace(/@/g, " ");
//   console.log(result);
// }

rosettaStone([
  "2",
  "59 36",
  "82 52",
  "4 18 25 19 8",
  "4 2 8 2 18",
  "23 14 22 0 22",
  "2 17 13 19 20",
  "0 9 0 22 22",
]);
