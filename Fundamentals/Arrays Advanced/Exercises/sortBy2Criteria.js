// 5.	 Sort an Array by 2 Criteria
// Write a function that orders an array of strings, by their length in ascending order as primary criteria,
// and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.

// The input comes as an array of strings.

// The output is the ordered array of strings, each on a separate line.

function sortBy2Criteria(arr) {
  let res = [];
  res = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  console.log(res.join("\n"));
}

sortBy2Criteria(["gamma", "beta", "alpha"]);
