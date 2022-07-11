// 2.	Modern Times of #(HashTag)
// The input will be a single string.
// Find all special words starting with #. If the found special word does not consist only of letters, then it is invalid and should not be printed.
// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimesOfHashTags(data) {
  for (const el of data.split(" ")) {
    if (el[0] === "#" && el.length > 1 && !/\d/.test(el.slice(1))) {
      console.log(el.slice(1));
    }
  }
}

modernTimesOfHashTags(
  "Nowadays everyone uses # to tag a #spec1ial word in #socialMedia"
);
