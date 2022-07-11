// 3.	Merge Arrays
// Write a function, which receives two string arrays and merges them into a third array.
// •	If the index of the element is even, add into the third array the sum of both elements at that index
// •	If the index of the element is odd, add the concatenation of both elements at that index
// Input
// As input, you will receive two string arrays (with equal length).
// Output
// As output, you should print the resulting third array, each element separated by " - ".

function mergeArrays(arr1, arr2) {
  let arr3 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) {
      let sum = +arr1[i] + +arr2[i];
      arr3.push(sum);
    } else {
      arr3.push(arr1[i] + arr2[i]);
    }
  }
  console.log(arr3.join(" - "));
}

mergeArrays(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
