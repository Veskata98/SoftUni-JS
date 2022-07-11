// Problem 1 - World Tour
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2518#0.

// You are a world traveler, and your next goal is to make a world tour.
// To do that, you have to plan out everything first. To start with, you would like to plan out all of your stops where you will have a break.
// On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel",
// you will be given some commands to manipulate that initial string. The commands can be:
// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
// Note: After each command, print the current state of the string
// After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"
// Input / Constraints
// •	JavaScript: you will receive a list of strings
// •	An index is valid if it is between the first and the last element index (inclusive) in the sequence.
// Output
// •	Print the proper output messages in the proper cases as described in the problem description

function worldTour(arr) {
  let destinations = arr.shift().split("");
  for (let el of arr) {
    if (el === "Travel") {
      break;
    }
    el = el.split(":");
    let command = el.shift();

    switch (command) {
      case "Add Stop":
        let addIndex = +el[0];
        let addString = el[1].split("");

        if (addIndex >= 0 && addIndex < destinations.length) {
          destinations.splice(addIndex, 0, ...addString);
        }
        console.log(destinations.join(""));
        break;

      case "Remove Stop":
        let startIndex = +el[0];
        let endIndex = +el[1];
        if (
          startIndex >= 0 &&
          startIndex < destinations.length &&
          endIndex >= 0 &&
          endIndex < destinations.length
        ) {
          let deleteLength = endIndex - startIndex + 1;
          destinations.splice(startIndex, deleteLength);
        }
        console.log(destinations.join(""));
        break;

      case "Switch":
        let oldDestination = el[0];
        let newDestination = el[1];
        let joinedDestinations = destinations.join("");
        if (joinedDestinations.includes(oldDestination)) {
          let switchIndex = joinedDestinations.indexOf(oldDestination);
          destinations.splice(
            switchIndex,
            oldDestination.length,
            newDestination
          );
        }
        console.log(destinations.join(""));
        break;

      default:
        break;
    }
  }
  console.log(`Ready for world tour! Planned stops: ${destinations.join("")}`);
}

worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
