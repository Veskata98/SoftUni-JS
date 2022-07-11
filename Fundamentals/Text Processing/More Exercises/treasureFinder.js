// 5.	Treasure Finder
// Write a function that decrypts a message by a given key and gathers information about
// the hidden treasure type and its coordinates.
// On the first line, you will receive akey (sequence of numbers).
// On the next few lines until you receive "find" you will get lines of strings.
// You have to loop through every string and decrease the ASCII code of each character
// with a corresponding number of the key sequence. The way you choose a key number from
// the sequence is by just looping through it. If the length of the key sequence is less
// than the string sequence, you start looping from the beginning of the key.
// For more clarification see the example below. After decrypting the message,
// you will get a type of treasure and its coordinates. The type will be between the
// symbol '&' and the coordinates will be between the symbols '<' and '>'.
// For each line, print the type and the coordinates in the format:
// `Found {type} at {coordinates}`

function treasureFinder(input) {
  let sequence = input.shift().split(" ").map(Number);
  let sequenceIndex = 0;
  for (let el of input) {
    if (el === "find") {
      break;
    }
    el = el.split("");
    for (let i = 0; i < el.length; i++) {
      let tempEl = el[i].charCodeAt();
      tempEl -= sequence[sequenceIndex];
      el[i] = String.fromCharCode(tempEl);
      sequenceIndex++;
      if (sequenceIndex >= sequence.length) {
        sequenceIndex = 0;
      }
    }
    sequenceIndex = 0;
    let data = el.join("").split("&");
    let [, treasure, coordinates] = data;
    coordinates = coordinates.split("<").pop().slice(0, -1);
    console.log(`Found ${treasure} at ${coordinates}`);
  }
}

treasureFinder([
  "1 2 1 3",
  "ikegfp'jpne)bv=41P83X@",
  "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
  "find",
]);
