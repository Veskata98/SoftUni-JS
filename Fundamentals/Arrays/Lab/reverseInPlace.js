// 4.	Reverse In Place
// Write a program, which receives an array of strings. Your task is to reverse the array without creating a new array.
// Print the resulting elements on a single line, space-separated.

function reverceInPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr.reverse();
    arr[arr.length - 1 - i] = temp;
  }
  console.log(arr.join(" "));
}

reverceInPlace(["a", "b", "c", "d", "e"]);
