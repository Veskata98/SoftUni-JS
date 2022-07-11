// 4.	Non-Decreasing Subset
// Write a function that extracts only those numbers that form a non-decreasing subset.
// In other words, you start from the first element and continue to the end of the given array of numbers.
// Any number which is LESS THAN the current biggest one is ignored, alternatively
// if it’s equal or higher than the current biggest one you set it as the current biggest one and you continue to the next number.
// Input
// The input comes as an array of numbers.
// Output
// The output is the processed array after the filtration, which should be a non-decreasing subset.
// The elements should be printed on one line, separated by a single space.

function nonDecreasingSubnet(arr) {
  let max = 0;
  console.log(
    arr
      .filter((value) => {
        if (value >= max) {
          max = value;
          return true;
        } else {
          return false;
        }
      })
      .join(" ")
  );
}

nonDecreasingSubnet([1, 3, 8, 4, 10, 12, 3, 2, 24]);
