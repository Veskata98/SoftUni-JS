// 4.	Last K Numbers Sequence
// You are given two integers n and k. Write a function that generates and prints the following sequence:
// •	The first element is 1.
// •	Every following element equals the sum of the previous k elements.
// •	The length of the sequence is n elements.

// The input comes as two number arguments. The first element represents the number n, and the second – the number k.
// The output is printed on the console on a single line, separated by space.

function lastKNumbers(n, k) {
  let res = [1];
  for (let i = 0; i < n - 1; i++) {
    res.push(res.slice(-k).reduce((a, b) => a + b));
  }
  console.log(res.join(" "));
}

lastKNumbers(8, 2);
