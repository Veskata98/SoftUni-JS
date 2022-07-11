// 7.	Max Sequence of Equal Elements
// Write a function that finds the longest sequence of equal elements in an array of numbers.
// If several longest sequences exist, print the leftmost one.

function maxSequence(arr) {
  let el = arr[0];
  let count = 1;
  let maxCount = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    if (maxCount < count) {
      el = arr[i];
      maxCount = count;
    }
  }
  for (let i = 0; i < maxCount; i++) {
    result.push(el);
  }
  console.log(result.join(" "));
}

maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
