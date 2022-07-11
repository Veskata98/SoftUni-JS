// 6.	Chess Board
// Write a function to print a chessboard of size n X n. See the example for more information.
// The input comes as a single number argument n.
// The output should be returned as a result of your function in the form of a string.

function chessBoard(size) {
  let chess = '<div class="chessboard">';
  for (let i = 1; i <= size; i++) {
    let index = 1;
    chess += `\n  <div>`;
    if (i % 2 !== 0) {
      while (index <= size) {
        if (index % 2 !== 0) {
          chess += `\n    <span class="black"></span>`;
        } else {
          chess += `\n    <span class="white"></span>`;
        }
        index++;
      }
    } else {
      while (index <= size) {
        if (index % 2 !== 0) {
          chess += `\n    <span class="white"></span>`;
        } else {
          chess += `\n    <span class="black"></span>`;
        }
        index++;
      }
    }
    chess += `\n  </div>`;
  }
  chess += "\n</div>";
  console.log(chess);
}

chessBoard(5);
