// 5.	Sum Even Numbers
// Write a program, which receives an array of strings, parse them into numbers, and sum only the even numbers.

function sumEvenNumbers(arr) {
  let sum = 0;
  for (const el of arr) {
    if (+el % 2 === 0) {
      sum += +el;
    }
  }
  console.log(sum);
}

sumEvenNumbers(["1", "2", "3", "4", "5", "6"]);
