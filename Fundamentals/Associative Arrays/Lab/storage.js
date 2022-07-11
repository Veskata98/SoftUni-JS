// 4.	Storage
// Write a function that takes a certain number of items and their quantity.
// If the same item appears more than once, add the new amount to the existing one.

// In the end, print all the items and their amount without sorting them.
// The input comes as an array of strings. Try using a Map().

function storage(arr) {
  let myMap = new Map();
  for (const el of arr) {
    let [item, quantity] = el.split(" ");
    quantity = +quantity;
    if (!myMap.has(item)) {
      myMap.set(item, quantity);
    } else {
      let oldValue = myMap.get(item);
      myMap.set(item, quantity + oldValue);
    }
  }
  for (const el of myMap) {
    console.log(el.join(" -> "));
  }
}

storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
