// 7.	Search for a Number
// You will receive two arrays of integers. The second array is containing exactly three numbers.
// The first number represents the number of elements you have to take from the first array (starting from the first one).
// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).
// The third number is the number we search in our collection after the manipulations.
// As output print how many times that number occurs in our array in the following format:
// "Number {number} occurs {count} times."

function searchForNumber(arr1, arr2) {
  let takeElements = arr2[0];
  let deleteElements = arr2[1];
  let searchedElement = arr2[2];

  let count = 0;

  let res = arr1.slice(0, takeElements);

  res.splice(0, deleteElements);

  res.filter((el) => {
    if (el === searchedElement) {
      count++;
    }
  });

  console.log(`Number ${searchedElement} occurs ${count} times.`);
}

searchForNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
