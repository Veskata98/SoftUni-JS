// 2.	Common Elements
// Write a function, which prints common elements in two string arrays.
// Print all matches on separate lines. Compare the first array with the second array.

function commonElements(arr1, arr2) {
  for (const el of arr1) {
    if (arr2.includes(el)) {
      console.log(el);
    }
  }
}

commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
