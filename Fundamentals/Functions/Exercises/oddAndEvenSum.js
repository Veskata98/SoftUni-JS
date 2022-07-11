// 4. Odd and Even Sum
// You will receive a single number. You have to write a function, that returns the sum of all even and all odd digits from that number.

function oddAndEvenSum(num) {
  let oddSum = 0,
    evenSum = 0;
  let iterableNumber = num.toString().split("");
  for (const el of iterableNumber) {
    if (el % 2 === 0) {
      evenSum += +el;
    } else {
      oddSum += +el;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435);
