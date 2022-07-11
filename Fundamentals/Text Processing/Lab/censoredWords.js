// 3.	Censored Words
// Write a function that receives a text as a first parameter and a single word as a second. Find all occurrences of that word in the text and replace them with the corresponding count of '*'.

function censoredWords(string, word) {
  let replacedWord = "*".repeat(word.length);
  while (string.includes(word)) {
    string = string.replace(word, replacedWord);
  }
  console.log(string);
}

censoredWords("A small sentence with some words", "small");
