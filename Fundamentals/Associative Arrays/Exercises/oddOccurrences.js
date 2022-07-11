// 2.	Odd Occurrences
// Write a function that extracts the elements of a sentence,
// if it appears an odd number of times (case-insensitive).
// The input comes as a single string. The words will be separated by a single space.

function oddOccurrences(arr) {
  let obj = {};
  arr.split(" ").forEach((element) => {
    element = element.toLowerCase();
    if (!obj.hasOwnProperty(element)) {
      obj[element] = 0;
    }
    obj[element]++;
  });
  let result = [];
  Object.entries(obj)
    .filter((el) => el[1] % 2 !== 0)
    .forEach((el) => result.push(el[0]));
  console.log(result.join(" "));
}

oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
