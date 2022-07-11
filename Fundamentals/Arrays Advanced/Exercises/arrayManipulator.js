// 8	. *Array Manipulator
// Write a function that receives an array of integers and an array of string
// commands and executes them over the array. The commands are as follows:

// •	add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
// •	addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
// •	contains <element> – prints the index of the first occurrence of the specified element(if exists) in the array or -1 if the element is not found.
// •	remove <index> – removes the element at the specified index.
// •	shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
// o	For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
// •	sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
// o	For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
// •	print – stop receiving more commands and print the last state of the array in the following format:
//          `[ {element1}, {element2}, …elementN} ]`

//   Note: The elements in the array must be joined by comma and space (, ).

function arrayManipulator(nums, commands) {
  for (let i = 0; i < commands.length; i++) {
    let currentElements = commands[i].split(" ");
    let currentCommand = currentElements.shift();

    currentElements = currentElements.map(Number);

    switch (currentCommand) {
      case "add":
        index = currentElements.shift();
        element = +currentElements.pop();

        nums.splice(index, 0, element);
        break;

      case "addMany":
        index = currentElements.shift();
        nums.splice(index, 0, ...currentElements);

        break;

      case "contains":
        element = +currentElements.shift();
        if (nums.includes(element)) {
          console.log(nums.indexOf(element));
          continue;
        } else {
          console.log(-1);
        }
        break;

      case "remove":
        index = currentElements.shift();
        nums.splice(index, 1);
        break;

      case "shift":
        let positions = currentElements.shift();
        for (let i = 0; i < positions; i++) {
          let tempEl = nums.shift();
          nums.push(tempEl);
        }
        break;

      case "sumPairs":
        let newArr = [];
        if (nums.length % 2 !== 0) {
          nums.push(0);
        }
        for (let i = 0; i < nums.length; i += 2) {
          newArr.push(Number(nums[i]) + Number(nums[i + 1]));
        }
        nums = newArr;
        break;

      default:
        console.log(`[ ${nums.join(", ")} ]`);
        return;
    }
  }
}

arrayManipulator(
  [1, 2, 3, 4, 5],
  [
    "addMany 5 9 8 7 6 5",
    "contains 15",
    "remove 3",
    "shift 1",
    "sumPairs",
    "print",
  ]
);
