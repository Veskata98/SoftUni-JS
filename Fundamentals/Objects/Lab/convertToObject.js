// 3.	Convert to Object
// Write a function that receives a string in JSON format and converts it to an object.
// Loop through all the keys and print them with their values in format: "{key}: {value}"

function convertToObject(data) {
  let info = JSON.parse(data);
  for (const key in info) {
    console.log(`${key}: ${info[key]}`);
  }
}

console.log(convertToObject('{"name": "George", "age": 40, "town": "Sofia"}'));
