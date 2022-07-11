// 4.	Count String Occurrences
// Write a function that receives a text and a single word that you need to search. Print the number of all occurrences of this word in the text.

function countStringOccurrences(string, word) {
  let count = 0;
  for (const el of string.split(" ")) {
    if (el === word) {
      count++;
    }
  }
  console.log(count);
}

countStringOccurrences(
  "softuni is great place for learning new programming languages",
  "softuni"
);
