//1.	Sum Digits
// Write a function, which will be given a single number. Your task is to find the sum of its digits.

function sumDigits(params) {
  console.log(
    params
      .toString()
      .split("")
      .reduce((a, b) => +a + +b)
  );
}

sumDigits(245678);
