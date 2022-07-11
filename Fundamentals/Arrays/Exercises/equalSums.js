// 6.	Equal Sums
// Write a function that determines if there exists an element in the array of numbers such that the sum
// of the elements on its left is equal to the sum of the elements on its right.
// If there are NO elements to the left/right, their sum is 0.
// Print the index that satisfies the required condition or "no" if there is no such index.

function equalSums(arr) {
  if (arr.length === 1) {
    return console.log(0);
  }
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0,
      rightSum = 0;
    for (let j = i - 1; j >= 0; j--) {
      leftSum += arr[j];
    }
    for (let k = i + 1; k < arr.length; k++) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      console.log(i);
      flag = true;
      break;
    }
  }
  if (!flag) {
    console.log("no");
  }
}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
