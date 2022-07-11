// 8.	Array Manipulations
// Write a function that manipulates an array of numbers.
// •	Add {number}: add a number to the end of the array
// •	Remove {number}: remove all occurrences of a particular number from the array
// •	RemoveAt {index}: removes number at a given index
// •	Insert {number} {index}: inserts a number at a given index

// Note: All the indices will be valid!

// The input comes as an array of strings.

// The first element will be a string containing the array to manipulate.
// Every other command you receive will also be a string.

// The output is the manipulated array printed on the console on a single line, separated by space.

function arrayManipulations(array) {
  let result = array.shift().split(" ");

  for (const el of array) {
    let splittedElement = el.split(" ");

    let action = splittedElement.shift();
    let value = splittedElement.shift();

    switch (action) {
      case "Add":
        result.push(value);
        break;
      case "Remove":
        result = result.filter((el) => el !== value);
        break;
      case "RemoveAt":
        result.splice(value, 1);
        break;
      case "Insert":
        let number = value;
        let index = splittedElement.shift();

        result.splice(index, 0, number);
        break;

      default:
        break;
    }
  }

  console.log(result.join(" "));
}

arrayManipulations([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
