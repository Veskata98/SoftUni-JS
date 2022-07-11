// 7.	List of Products
// You will receive an array of products. Print a numbered array of all the products ordered by name.

function sortedList(array) {
  console.log(
    array
      .sort()
      .map((el, index) => `${index + 1}.${el}`)
      .join("\n")
  );
}

sortedList(["Potatoes", "Tomatoes", "Onions", "Apples"]);
