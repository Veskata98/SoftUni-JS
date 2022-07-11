// 2.	Substring
// Write a function that receives a string and two numbers. The numbers will be a starting index and count of elements to substring. Print the result.

function substring(string, startIndex, count) {
  let result = string.split("").splice(startIndex, count);
  console.log(result.join(""));
}

substring("SkipWord", 4, 7);
