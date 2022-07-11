//7.	Lower or Upper
// Write a function that prints whether a given character is upper-case or lower-case.

function lowerOrUpper(char) {
  if (char.toLowerCase() === char) {
    console.log("lower-case");
  } else {
    console.log("upper-case");
  }
}

lowerOrUpper("l");
