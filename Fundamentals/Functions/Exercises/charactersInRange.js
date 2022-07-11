// 3. Characters in Range
// Write a function that receives two characters and prints on a single line all the characters in between them according to the ASCII code.
// Keep in mind that the second character code might be before the first one inside the ASCII table.

function charactersInRange(char1, char2) {
  let res = [];
  if (char1.charCodeAt(0) < char2.charCodeAt(0)) {
    for (let i = char1.charCodeAt(0) + 1; i < char2.charCodeAt(0); i++) {
      res.push(String.fromCharCode(i));
    }
  } else {
    for (let i = char2.charCodeAt(0) + 1; i < char1.charCodeAt(0); i++) {
      res.push(String.fromCharCode(i));
    }
  }
  console.log(res.join(" "));
}

charactersInRange("C", "#");
