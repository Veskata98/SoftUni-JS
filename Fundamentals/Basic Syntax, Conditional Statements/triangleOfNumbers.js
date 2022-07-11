// 7.	Triangle of Numbers
// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// ·	n will be in the interval [1...20].

function solve(n) {
  for (let i = 1; i <= n; i++) {
    let row = [];
    for (let j = 0; j < i; j++) {
      row.push(i);
    }
    console.log(row.join(" "));
  }
}

solve(5);
