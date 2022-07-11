// Problem 2 - Array Modifier
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2474#1.

// You are given an array with integers. Write a program to modify the elements after receiving the following commands:
// •	"swap {index1} {index2}" takes two elements and swap their places.
// •	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
// •	"decrease" decreases all elements in the array with 1.
// Input
// On the first input line, you will be given the initial array values separated by a single space.
// On the next lines you will receive commands until you receive the command "end". The commands are as follow:
// •	"swap {index1} {index2}"
// •	"multiply {index1} {index2}"
// •	"decrease"
// Output
// The output should be printed on the console and consist of elements of the modified array – separated by a comma and a single space ", ".
// Constraints
// •	Elements of the array will be integer numbers in the range [-231...231]
// •	Count of the array elements will be in the range [2...100]
// •	Indexes will be always in the range of the array

function arrayModifier(arr) {
  let numberArray = arr.shift().split(" ").map(Number);
  for (let el of arr) {
    if (el === "end") {
      break;
    } else if (el === "decrease") {
      numberArray = numberArray.map((number) => number - 1);
    }

    el = el.split(" ");
    let command = el.shift();

    let index1 = +el[0];
    let index2 = +el[1];

    if (command === "swap") {
      let number1 = numberArray[index1];
      let number2 = numberArray[index2];

      numberArray.splice(index1, 1, number2);
      numberArray.splice(index2, 1, number1);
    } else {
      numberArray[index1] *= numberArray[index2];
    }
  }
  console.log(numberArray.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

// arrayModifier([
//   "1 2 3 4",
//   "swap 0 1",
//   "swap 1 2",
//   "swap 2 3",
//   "multiply 1 2",
//   "decrease",
//   "end",
// ]);
