// 1.	Add and Subtract
// Write a function, which changes the value of odd and even numbers in an array of numbers.
// •	If the number is even - add to its value its index position
// •	If the number is odd - subtract to its value its index position
// Output
// On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
// on the third line print the sum of numbers from the modified array.

function addAndSubstract(arr) {
  let oldSum = 0,
    newSum = 0;
  for (let i = 0; i < arr.length; i++) {
    oldSum += arr[i];
    if (arr[i] % 2 === 0) {
      arr[i] += i;
    } else {
      arr[i] -= i;
    }
    newSum += arr[i];
  }
  console.log(`[ ${arr.join(", ")} ]`);
  console.log(oldSum);
  console.log(newSum);
}

addAndSubstract([5, 15, 23, 56, 35]);
