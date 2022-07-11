// 6.	Print and Sum
// Write a function that displays numbers from given start to given end and their sum.
// The input comes as two number parameters. Print the result like the examples below:

function solve(start, end) {
  let sum = 0;
  let printArray = [];
  for (let i = start; i <= end; i++) {
    printArray.push(i);
    sum += i;
  }
  console.log(printArray.join(" "));
  console.log(`Sum: ${sum}`);
}

solve(5, 10);
