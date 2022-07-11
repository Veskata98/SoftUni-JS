// 3.	Post Office
// You receive a sung string of ASCII symb ols, and the message is somewhere inside it, you must find it.
//  The input consists of three parts separated with "|" like this:
// "{firstPart}|{secondPart}|{thirdPart}"
// Each word starts with a capital letter and has a fixed length, you can find those in each different part of the input.
// The first part carries the capital letters for each word inside the message. You need to find those capital letters 1 or more from A to Z. The capital letters should be surrounded from both sides with any of the following symbols – "#, $, %, *, &". And those symbols should match on both sides. This means that $AOTP$ - is a valid pattern for the capital letters. $AKTP% - is invalid since the symbols do not match.
// The second part of the data contains the starting letter ASCII code and words length /between 1 – 20 characters/, in the following format: "{asciiCode}:{length}". For example, "67:05" – means that '67' - ASCII code equal to the capital letter "C", represents a word starting with "C" with the following 5 characters: like "Carrot". The ASCII code should be a capital letter equal to a letter from the first part. Word's length should be exactly 2 digits. Length less than 10 will always have a padding zero, you don't need to check that.
// The third part of the message are words separated by spaces. Those words have to start with the Capital letter [A…Z] equal to the ASCII code and have exactly the length for each capital letter you have found in the second part. Those words can contain any ASCII symbol without spaces.
// When you find the valid word, you have to print it on a new line.
// Input / Constraints
// •	On the first line – the text is in form of three different parts separated by "|". There can be any ASCII character inside the input, except '|'.
// •	Input will always be valid - you don’t need to check it
// •	The input will always have three different parts, that will always be separated by "|".
// Output
// •	Print all extracted words, each on a new line.
// •	Allowed working time / memory: 100ms / 16MB

function postOffice(input) {
  let [firstPart, secondPart, thirdPart] = input[0].split("|");

  firstPart = /([#$%*&])(?<letters>\w+)\1/.exec(firstPart);
  let letters = firstPart.groups.letters;
  let wordsLength = [];

  for (let letter of letters) {
    let number = letter.charCodeAt();
    let regEx = new RegExp(`${number}:(?<length>[0-9]{2})`);
    let temp = regEx.exec(secondPart);
    let length = +temp.groups.length;

    wordsLength.push(length);
  }

  for (let i = 0; i < letters.length; i++) {
    let regEx = new RegExp(
      `(?<=\\s|^)(?<word>${letters[i]}\\S{${wordsLength[i]}})(?=\\s|$)`
    );
    let temp = regEx.exec(thirdPart);
    console.log(temp.groups.word);
  }
}

postOffice([
  "sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos",
]);
