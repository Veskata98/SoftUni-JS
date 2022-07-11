// 7.	Cut and Reverse
// The input will be a single string.
// Write a function that cuts the given string into half and reverse the two halves.
// Print each half on a separate line.

function cutAndReverse(data) {
  data = data.split("");
  let string1 = data.splice(0, data.length / 2).reverse();
  let string2 = data.reverse();
  console.log(string1.join(""));
  console.log(string2.join(""));
}

cutAndReverse("tluciffiDsIsihTgnizamAoSsIsihT");
