// 1.	Sort Numbers
// Receive three numbers and you have to sort them in descending order. Print each number on a new line.

function sortNumbers(n1, n2, n3) {
  let array = [];
  array.push(n1, n2, n3);
  console.log(array.sort((a, b) => b - a).join("\r\n"));
}

sortNumbers(2, 1, 3);
