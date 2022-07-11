// 5.	Sequences
// You are tasked with storing sequences of numbers. You will receive an array of strings; each of
// them will contain an unknown amount of arrays containing numbers, from which you must store only the
// unique arrays (duplicate arrays should be discarded). An array is considered the same (NOT unique) if
// it contains the same numbers as another array, regardless of their order.

// After storing all arrays, your program should print them back in ascending order based on their length,
// if two arrays have the same length, they should be printed in order of being received from the input.
// Each array should be printed in descending order in the format "[a1, a2, a3,… an]". Check the examples below.
// The input comes as an array of strings where each entry is a JSON representing an array of numbers.
// The output should be printed on the console - each array printed on a new line in the format "[a1, a2, a3,… an]",
// following the above-mentioned ordering.

function sequences(arr) {
  let strings = arr.map(JSON.parse).map((el) => el.sort((a, b) => b - a));
  for (let i = strings.length - 1; i >= 0; i--) {
    let flag = false;
    for (let j = 0; j < strings.length; j++) {
      if (i !== j) {
        if (strings[i].length !== strings[j].length) {
          continue;
        }
        if (JSON.stringify(strings[i]) === JSON.stringify(strings[j])) {
          flag = true;
        }
      }
    }
    if (flag && strings.length > 1) {
      strings.splice(i, 1);
    }
  }
  strings.sort((a, b) => a.length - b.length);
  for (const el of strings) {
    console.log("[" + el.join(", ") + "]");
  }
}

sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);

function sequences(arr) {
  let strings = arr
    .map(JSON.parse)
    .map((el) => el.sort((a, b) => b - a))
    .map(JSON.stringify);

  [...new Set(strings)]
    .map(JSON.parse)
    .map((el) => console.log(`[${el.join(", ")}]`));
}

sequences([
  "[7.14, 7.180, 7.339, 80.099]",
  "[7.339, 80.0990, 7.140000, 7.18]",
  "[7.339, 7.180, 7.14, 80.099]",
]);
