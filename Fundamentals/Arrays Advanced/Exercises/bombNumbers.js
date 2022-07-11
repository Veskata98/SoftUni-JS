// 6.	Bomb Numbers
// Write a function that receives two parameters: sequence of numbers and special bomb number with a certain power.

// Your task is to detonate every occurrence of the special bomb number and according to its power
// his neighbors from left and right. Detonations are performed from left to right and all detonated numbers disappear.

// The input contains two arrays of numbers. The first contains the initial sequence and the second contains the special bomb number and its power.

// The output is the sum of the remaining elements in the sequence.

function bombNumbers(arr1, arr2) {
  let specialNumber = arr2.shift();
  let neighborsCount = arr2.pop();

  let res = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === specialNumber) {
      arr1[i] = 0;

      for (let j = 0; j < neighborsCount; j++) {
        arr1[i - 1 - j] = 0;
      }
      for (let j = 0; j < neighborsCount; j++) {
        arr1[i + 1 + j] = 0;
      }
    }
  }

  res = arr1.map((el) => (res += el)).pop();

  console.log(res);
}

bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);
