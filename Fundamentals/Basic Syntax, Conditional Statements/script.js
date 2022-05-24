// function solve(day, age) {
//   let price = 0;
//   if (age >= 0 && age <= 18) {
//     if (day === "Weekday") price = 12;
//     else if (day === "Weekend") price = 15;
//     else price = 5;
//   } else if (age > 18 && age <= 64) {
//     if (day === "Weekday") price = 18;
//     else if (day === "Weekend") price = 20;
//     else price = 12;
//   } else if (age > 64 && age <= 122) {
//     if (day === "Weekday") price = 12;
//     else if (day === "Weekend") price = 15;
//     else price = 10;
//   } else {
//     console.log("Error!");
//     return;
//   }
//   console.log(`${price}$`);
// }

// solve("Weekday", 142);

// function solve(count, type, day) {
//   let price = 0,
//     total = 0;

//   if (type === "Students") {
//     if (day === "Friday") {
//       price = 8.45;
//     } else if (day === "Saturday") {
//       price = 9.8;
//     } else if (day === "Sunday") {
//       price = 10.46;
//     }
//   } else if (type === "Business") {
//     if (day === "Friday") {
//       price = 10.9;
//     } else if (day === "Saturday") {
//       price = 15.6;
//     } else if (day === "Sunday") {
//       price = 16;
//     }
//   } else if (type === "Regular") {
//     if (day === "Friday") {
//       price = 15;
//     } else if (day === "Saturday") {
//       price = 20;
//     } else if (day === "Sunday") {
//       price = 22.5;
//     }
//   }
//   total = price * count;

//   if (count >= 30 && type === "Students") {
//     total *= 0.85;
//   } else if (count >= 100 && type === "Business") {
//     total = total - 10 * price;
//   } else if (count >= 10 && count <= 20 && type === "Regular") {
//     total *= 0.95;
//   }

//   console.log(`Total price: ${total.toFixed(2)}`);
// }

// solve(40, "Regular", "Saturday");

// function solve(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// solve(1984);

// function solve(start, end) {
//   let sum = 0;
//   let printArray = [];
//   for (let i = start; i <= end; i++) {
//     printArray.push(i);
//     sum += i;
//   }
//   console.log(printArray.join(" "));
//   console.log(`Sum: ${sum}`);
// }

// solve(5, 10);

// function solve(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = [];
//     for (let j = 0; j < i; j++) {
//       row.push(i);
//     }
//     console.log(row.join(" "));
//   }
// }

// solve(5);

// function solve(number) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} X ${i} = ${number * i}`);
//   }
// }

// solve(5);

// function solve(array) {
//   let user = array[0];
//   let password = user.split("").reverse().join("");
//   let index = 1,
//     flag = false;
//   while (index <= 4) {
//     if (array[index] === password) {
//       console.log(`User ${user} logged in.`);
//       flag = true;
//       break;
//     } else {
//       if (index === 4) {
//         break;
//       }
//       console.log("Incorrect password. Try again.");
//     }
//     index++;
//   }
//   if (!flag) {
//     console.log(`User ${user} blocked!`);
//   }
// }

// solve(["Acer", "login", "go", "let me in", "recA"]);

// function solve(base, increment) {
//   let stone = 0,
//     marble = 0,
//     lapisLazuli = 0,
//     gold = 0,
//     count = 1,
//     flag = false,
//     height = 0;

//   while (base > 0) {
//     if (base > 2) {
//       stone += (base - 2) * (base - 2) * increment;
//       if (count !== 5 && base > 2) {
//         marble += (base * 4 - 4) * increment;
//       } else {
//         count = 0;
//         lapisLazuli += (base * 4 - 4) * increment;
//       }
//     }
//     if (base - 2 < 0) {
//       flag = true;
//     }
//     base -= 2;
//     count++;
//     height++;
//   }

//   if (flag) {
//     gold = 1 * increment;
//   } else {
//     gold = 4 * increment;
//   }

//   console.log(`Stone required: ${Math.ceil(stone)}`);
//   console.log(`Marble required: ${Math.ceil(marble)}`);
//   console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
//   console.log(`Gold required: ${Math.ceil(gold)}`);
//   console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
// }

// function solve(array) {
//   let newArr = array.join(",").split(",");
//   let index = 0;
//   let count = 1;
//   let moneyFromGold = 0;

//   let btcPrice = 11949.16;
//   let btcCount = 0;
//   let dayFirstPurchase = [];

//   let flag = false;

//   while (index < newArr.length) {
//     if (count % 3 === 0) {
//       moneyFromGold += newArr[index] * 67.51 * 0.7;
//     } else {
//       moneyFromGold += newArr[index] * 67.51;
//     }

//     while (moneyFromGold - btcPrice >= 0) {
//       moneyFromGold -= btcPrice;
//       btcCount++;
//       flag = true;
//     }
//     if (flag) {
//       dayFirstPurchase.push(count);
//     }

//     index++;
//     count++;
//   }
//   console.log(`Bought bitcoins: ${btcCount}`);
//   if (flag) {
//     console.log(
//       `Day of the first purchased bitcoin: ${dayFirstPurchase.shift()}`
//     );
//   }
//   console.log(`Left money: ${moneyFromGold.toFixed(2)} lv.`);
// }

// solve([100, 200, 300]);\

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//MORE EXERCISE

// 1.	Sort Numbers
// Receive three numbers and you have to sort them in descending order. Print each number on a new line.

// function sortNumbers(n1, n2, n3) {
//   let array = [];
//   array.push(n1, n2, n3);
//   console.log(array.sort((a, b) => b - a).join("\r\n"));
// }

// sortNumbers(2, 1, 3);

// 2.	English Name of the Last Digit
// Write a function that returns the English name of the last digit of a given number. Write a program that receives a number and prints the returned value from this function.

// function lastDigitToNane(number) {
//   let lastDigit = number.toString().split("");
//   switch (+lastDigit[lastDigit.length - 1]) {
//     case 0:
//       console.log("zero");
//       break;
//     case 1:
//       console.log("one");
//       break;
//     case 2:
//       console.log("two");
//       break;
//     case 3:
//       console.log("three");
//       break;
//     case 4:
//       console.log("four");
//       break;
//     case 5:
//       console.log("five");
//       break;
//     case 6:
//       console.log("six");
//       break;
//     case 7:
//       console.log("seven");
//       break;
//     case 8:
//       console.log("eight");
//       break;
//     case 9:
//       console.log("nine");
//       break;
//   }
// }

// lastDigitToNane(510);

// 3.	Next Day
// Write a JS function that calculates the date of the next day by given year, month, and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.

// function nextDay(year, month, date) {
//   let day = new Date(year, month, date);

//   let nextDay = new Date(day);
//   nextDay.setDate(day.getDate() + 1);
//   console.log(
//     `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`
//   );
// }

// nextDay(2020, 3, 24);

// 4.	Reverse String
// Write a program that reverses a string and prints it on the console.

// function reverseString(string) {
//   console.log(string.split("").reverse().join(""));
// }

// reverseString("Hello");

// 5.	Distance Between Points
// Write a JS function that calculates the distance between two points by given x and y coordinates.
// The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.

function distance(x1, y1, x2, y2) {
  console.log(Math.hypot(x2 - x1, y2 - y1).toFixed(14));
}

distance(2.33, 17, -3.954, -11.2);
