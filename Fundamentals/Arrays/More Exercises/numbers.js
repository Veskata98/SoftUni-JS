//  Problem 3. Numbers Link: https://judge.softuni.org/Contests/Practice/Index/2474#2

// Write a program to read a sequence of integers and find and print the top 5 numbers greater than the average value in the sequence, sorted in descending order.

// Input

// · Read from the console a single line holding space-separated integers.

// Output

// · Print the above-described numbers on a single line, space-separated.
// · If less than 5 numbers hold the property mentioned above, print less than 5 numbers.
// · Print "No" if no numbers hold the above property.

// Constraints

// · All input numbers are integers in the range [-1 000 000 … 1 000 000].
// · The count of numbers is in the range [1…10 000].

function numbers(nums) {
  let array = nums.split(" ");
  let sum = 0,
    count = 0;
  let resultArray = [];
  for (const el of array) {
    sum += Number(el);
    count++;
  }
  let average = sum / count;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > average) {
      resultArray.push(array[i]);
    }
  }
  if (count === 1 || array.every((val, i, arr) => val === arr[0])) {
    return console.log("No");
  }
  console.log(
    resultArray
      .sort((a, b) => b - a)
      .slice(0, 5)
      .join(" ")
  );
}

numbers("5 6 7 8");
