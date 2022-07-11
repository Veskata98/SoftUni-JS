// 3. Repeat String
// Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).

function repeatString(str, n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    res += str;
  }
  return res;
}

repeatString("abc", 3);
