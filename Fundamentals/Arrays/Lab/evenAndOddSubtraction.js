// 6.	Even and Odd Subtraction
// Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.

function evenOddSubstraction(arr) {
  let sumEven = 0,
    sumOdd = 0;
  for (const el of arr) {
    if (+el % 2 === 0) {
      sumEven += +el;
    } else {
      sumOdd += +el;
    }
  }
  console.log(sumEven - sumOdd);
}

evenOddSubstraction([1, 2, 3, 4, 5, 6]);
