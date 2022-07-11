// 5.	Max Number
// Write a function to find all the top integers in an array.
// A top integer is an integer, which is bigger than all the elements to its right.

// Output
// Print all top integers on the console, separated by a single space.

function maxNumber(arr) {
  let topIntegers = [];
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i],
      flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (temp < arr[j] || temp === arr[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      topIntegers.push(temp);
    }
  }
  console.log(topIntegers.join(" "));
}

maxNumber([41, 41, 34, 20]);
