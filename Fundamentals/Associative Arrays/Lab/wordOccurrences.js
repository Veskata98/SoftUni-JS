// 6.	Word Occurrences
// Write a function that counts the times each word occurs in a text.
// Print the words sorted by count in descending order. The input comes as an array of strings.

function wordOccurrences(arr) {
  let words = {};
  for (const el of arr) {
    let word = el;
    if (!words.hasOwnProperty(word)) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }
  let entries = Object.entries(words).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of entries) {
    console.log(`${key} -> ${value} times`);
  }
}

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// function wordOccurrences(arr) {
//   let words = [];
//   for (const el of arr) {
//     let word = el;
//     if (!words.some((el) => el.name === word)) {
//       let wordOccurrence = {
//         name: el,
//         count: 1,
//       };
//       words.push(wordOccurrence);
//     } else {
//       let index = words.findIndex((el) => el.name === word);
//       words[index].count++;
//     }
//   }

//   words.sort((a, b) => b.count - a.count);

//   for (const el of words) {
//     console.log(`${el.name} -> ${el.count} times`);
//   }
// }

wordOccurrences([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
