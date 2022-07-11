// 4. Orders
// Write a function that calculates the total price of an order and prints it on the console.
// The function should receive one of the following products: coffee, coke, water, snacks;
// and a quantity of the product. The prices for a single piece of each product are:
// •	coffee - 1.50
// •	water - 1.00
// •	coke - 1.40
// •	snacks - 2.00
// Print the result formatted to the second decimal place.

function orders(product, quantity) {
  let sum = 0;
  switch (product) {
    case "coffee":
      sum = quantity * 1.5;
      break;
    case "water":
      sum = quantity * 1;
      break;
    case "coke":
      sum = quantity * 1.4;
      break;
    case "snacks":
      sum = quantity * 2;
      break;
  }
  return console.log(sum.toFixed(2));
}

orders("water", 5);
