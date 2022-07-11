// 5.	Print DNA
// Write a JS program that prints a DNA helix with a length, specified by the user.
// The helix has a repeating structure, but the symbol in the chain follows the sequence ATCGTTAGGG. See the examples for more information.
// The input comes as a single number. It represents the length of the required helix.
// The output is the completed structure, printed on the console.

function printDNA(number) {
  let arr = "ATCGTTAGGG".split("");
  let temp = 0;
  let pattern = 0;

  for (let i = 0; i < number; i++) {
    if (temp >= 10) {
      temp = 0;
    }
    if (pattern >= 4) {
      pattern = 0;
    }
    if (pattern === 0) {
      console.log(`**${arr.slice(temp, temp + 2).join("")}**`);
      temp += 2;
      pattern++;
    } else if (pattern === 1 || pattern === 3) {
      console.log(`*${arr.slice(temp, temp + 2).join("--")}*`);
      temp += 2;
      pattern++;
    } else if (pattern === 2) {
      console.log(`${arr.slice(temp, temp + 2).join("----")}`);
      temp += 2;
      pattern++;
    }
  }
}

printDNA(20);
