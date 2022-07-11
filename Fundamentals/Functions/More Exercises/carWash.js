// 1.	Car Wash
// Write a JS function that receives some commands.
// Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty.
// Start from 0. The first command will always be 'soap':
// •	soap – add 10 to the value
// •	water – increase the value by 20%
// •	vacuum cleaner – increase the value by 25%
// •	mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the format:
//              `The car is {value}% clean.`
//   Note: The value should be rounded to the second decimal point.

function carWash(arr) {
  let carState = 0;
  for (const el of arr) {
    switch (el) {
      case "soap":
        carState += 10;
        break;
      case "water":
        carState *= 1.2;
        break;
      case "vacuum cleaner":
        carState *= 1.25;
        break;
      case "mud":
        carState *= 0.9;
        break;
      default:
        break;
    }
  }
  console.log(`The car is ${carState.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);
