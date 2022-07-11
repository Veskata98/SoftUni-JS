// 1.	Reveal Words
// Write a function, which receives two parameters.
// The first parameter will be a string with some words separated by ', '.
// The second parameter will be a string that contains templates containing '*'.
// Find the word with the same length as the template and replace it.

function revealWords(words, text) {
  if (words.length > 1) {
    words = words.split(", ");
  }
  text = text.split(" ");
  for (let i = 0; i < text.length; i++) {
    if (text[i].includes("*")) {
      let searchedWord = words.find((el) => el.length === text[i].length);
      text[i] = searchedWord;
    }
  }
  console.log(text.join(" "));
}

revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
