// 7. NxN Matrix
// Write a function that receives a single integer number n and prints nxn matrix with that number.

function nxnMatrix(n) {
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(n);
    }
    console.log(row.join(" "));
  }
}

nxnMatrix(7);
