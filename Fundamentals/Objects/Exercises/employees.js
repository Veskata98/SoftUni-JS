// 1.	Employees
// You're tasked to create a list of employees and their personal numbers.
// You will receive an array of strings. Each string is an employee name and to
// assign them a personal number you have to find the length of the name (whitespace included).
// Try to use an object.
// At the end print all the list employees in the following format:
//  "Name: {employeeName} -- Personal Number: {personalNum}"

function employees(arr) {
  let persons = [];
  for (const el of arr) {
    let [name, personalNum] = [el, el.length];
    let person = {
      name: name,
      personalNum: personalNum,
    };
    persons.push(person);
  }

  for (const el of persons) {
    console.log(`Name: ${el.name} -- Personal Number: ${el.personalNum}`);
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
