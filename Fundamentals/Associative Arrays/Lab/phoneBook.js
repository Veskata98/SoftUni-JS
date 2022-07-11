// 1.	Phone Book
// Write a function that stores information about a person’s name and phone number.
// The input is an array of strings with space-separated name and number. Replace duplicate names. Print the result as shown.

function phoneBook(arr) {
  let obj = {};
  for (const el of arr) {
    let [name, phone] = el.split(" ");
    obj[name] = phone;
  }
  for (const key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}

phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
