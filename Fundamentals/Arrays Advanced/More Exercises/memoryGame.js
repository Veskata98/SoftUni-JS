// Problem 3 - Memory game
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2517#1.

// Write a program that recreates the Memory game.
// On the first line, you will receive a sequence of elements. Each element in the sequence will have a twin.
// Until the player receives "end" from the console, you will receive strings with two integers separated by a space,
// representing the indexes of elements in the sequence.
// If the player tries to cheat and enters two equal indexes or indexes which are out of bounds of the sequence,
// you should add two matching elements at the middle of the sequence in the following format:
// "-{number of moves until now}a"
// Then print this message on the console:
// "Invalid input! Adding additional elements to the board"
// Input
// •	On the first line, you will receive a sequence of elements
// •	On the following lines, you will receive integers until the command "end"
// Output
// •	Every time the player hit two matching elements, you should remove them from the sequence and print on the console the following message:
// "Congrats! You have found matching elements - ${element}!"
// •	If the player hit two different elements, you should print on the console the following message:
// "Try again!"
// •	If the player hit all matching elements before he receives "end" from the console, you should print on the console the following message:
// "You have won in {number of moves until now} turns!"
// •	If the player receives "end" before he hits all matching elements, you should print on the console the following message:
// "Sorry you lose :(
// {the current sequence's state}"
// Constraints
// •	All elements in the sequence will always have a matching element.

function memoryGame(arr) {
  let sequence = arr.shift().split(" ");
  let moves = 0;

  for (let el of arr) {
    if (el === "end") {
      break;
    }

    moves++;
    el = el.split(" ");
    let [index1, index2] = el;

    if (
      index1 < 0 ||
      index2 < 0 ||
      index1 >= sequence.length ||
      index2 >= sequence.length ||
      index1 === index2
    ) {
      let middleIndex = sequence.length / 2;
      let addedValue = `-${moves}a`;
      sequence.splice(middleIndex, 0, addedValue, addedValue);
      console.log("Invalid input! Adding additional elements to the board");
      continue;
    }

    if (sequence[index1] === sequence[index2]) {
      let solvedNumber = sequence[index1];
      console.log(
        `Congrats! You have found matching elements - ${solvedNumber}!`
      );
      sequence = sequence.filter((el) => el !== solvedNumber);
    } else {
      console.log("Try again!");
    }

    if (sequence.length === 0) {
      break;
    }
  }

  if (sequence.length === 0) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log(`Sorry you lose :(\n${sequence.join(" ")}`);
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
