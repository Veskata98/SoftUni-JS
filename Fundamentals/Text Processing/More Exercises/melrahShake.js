// 6.	Melrah Shake
// You are given a string of random characters and a pattern of random characters. You need to “shake off” (remove) all of the border occurrences of that pattern, in other words, the very first match and the very last match of the pattern you find in the string.
// When you successfully shake off a match, you remove from the pattern the character which corresponds to the index equal to the pattern’s length / 2. Then you continue to shake off the border occurrences of the new pattern until the pattern becomes empty or until there is less than the - needed for a shake, matches in the remaining string.
// In case you have found at least two matches, and you have successfully shaken them off, you print "Shaked it." on the console. Otherwise, you print "No shake.", the remains of the main string, and you end the program. See the examples for more info.
// Input
// •	The input will consist only of two lines
// •	On the first line, you will get a string of random characters
// •	On the second line, you will receive the pattern and that ends the input sequence
// Output
// •	You must print "Shaked it." for every time you successfully do the melrah shake
// •	If the melrah shake fails, you print "No shake.", and on the next line you print what has remained of the main string
// Constraints
// •	The two strings may contain ANY ASCII character
// •	Allowed time/memory: 250ms/16MB

function melrahShake(input) {
  let string = input[0];
  let pattern = input[1];

  while (pattern.length > 0) {
    let firstIndex = string.indexOf(pattern);
    let lastIndex = string.lastIndexOf(pattern);
    if (firstIndex > -1 && lastIndex > -1 && firstIndex !== lastIndex) {
      string = string.split("");
      string.splice(firstIndex, pattern.length);
      string = string.join("");

      lastIndex = string.lastIndexOf(pattern);
      string = string.split("");
      string.splice(lastIndex, pattern.length);
      string = string.join("");

      console.log("Shaked it.");

      pattern = pattern.split("");
      pattern.splice(pattern.length / 2, 1);
      pattern = pattern.join("");
    } else {
      break;
    }
  }

  console.log("No shake.");
  console.log(string);
}

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// function melrahShake(input) {
//   let string = input[0];
//   let pattern = input[1];
//   let regex = new RegExp(pattern, "g");
//   if (string.match(regex).length > 1) {
//     let reversedPattern = pattern.split("").reverse().join("");
//     let lastRemoveExp = new RegExp(reversedPattern);
//     string = string.split("").reverse().join("");
//     string = string.replace(lastRemoveExp, "");

//     let firstRemoveExp = new RegExp(pattern);
//     string = string.split("").reverse().join("");
//     string = string.replace(firstRemoveExp, "");

//     console.log("Shaked it.");

//     pattern = pattern.split("");
//     pattern.splice(pattern.length / 2, 1);
//     pattern = pattern.join("");
//     regex = new RegExp(pattern, "g");
//   }
//   if (pattern.length === 0 || !regex.test(string)) {
//     console.log("No shake.");
//     console.log(string);
//     return;
//   }
//   if (string.match(regex).length > 1) {
//     let newArr = [];
//     newArr.push(string, pattern);
//     return melrahShake(newArr);
//   } else {
//     console.log("No shake.");
//     console.log(string);
//   }
// }

melrahShake(["##mtm!!mm.mm*mtm.#", "mtm"]);
