// 4.	Ascii Sumator
// Write a function that prints a sum of all characters between
// two given characters (their ASCII code). On the first line, you will get a character.
// On the second line, you get another character. On the last line, you get a random string.
// Find all the characters between the two given and print their ASCII sum.

function asciiSumator(input) {
  let sum = 0;
  let firstCharCode = input.shift().charCodeAt();
  let secondCharCode = input.shift().charCodeAt();
  let string = input[0];
  for (const el of string) {
    let elCode = el.charCodeAt();
    if (firstCharCode < secondCharCode) {
      if (elCode > firstCharCode && elCode < secondCharCode) {
        sum += elCode;
      }
    } else {
      if (elCode < firstCharCode && elCode > secondCharCode) {
        sum += elCode;
      }
    }
  }
  console.log(sum);
}

asciiSumator(["a", "1", "jfe392$#@j24ui9ne#@$"]);
