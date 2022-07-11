// function demo(input) {
//   let people = Number(input[0]);
//   let nights = Number(input[1]);
//   let transportCards = Number(input[2]);
//   let bilets = Number(input[3]);
//   let sum = people * (nights * 20 + transportCards * 1.6 + bilets * 6);
//   console.log((sum * 1.25).toFixed(2));
// }

// demo(["20", "14", "30", "6"]);

// function footballSet(input) {
//   let shirtPrice = Number(input[0]);
//   let sumToWin = Number(input[1]);
//   let shortsPrice = shirtPrice * 0.75;
//   let socksPrice = shortsPrice * 0.2;
//   let shoesPrice = (shirtPrice + shortsPrice) * 2;
//   let sum = (shirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85;
//   if (sum > sumToWin) {
//     console.log("Yes, he will earn the world-cup replica ball!");
//     console.log(`His sum is ${sum.toFixed(2)} lv.`);
//   } else {
//     console.log("No, he will not earn the world-cup replica ball.");
//     console.log(`He needs ${(sumToWin - sum).toFixed(2)} lv. more.`);
//   }
// }

// footballSet([55, 310]);

// function vacationCalc(input) {
//   let people = Number(input[0]);
//   let season = input[1];
//   let result = 0;
//   switch (season) {
//     case "spring":
//       if (people <= 5) {
//         result = people * 50;
//       } else {
//         result = people * 48;
//       }
//       break;
//     case "summer":
//       if (people <= 5) {
//         result = people * 48.5;
//       } else {
//         result = people * 45;
//       }
//       break;
//     case "autumn":
//       if (people <= 5) {
//         result = people * 60;
//       } else {
//         result = people * 49.5;
//       }
//       break;
//     case "winter":
//       if (people <= 5) {
//         result = people * 86;
//       } else {
//         result = people * 85;
//       }
//       break;

//     default:
//       break;
//   }
//   if (season === "summer") {
//     console.log(`${(result * 0.85).toFixed(2)} leva.`);
//   } else if (season === "winter") {
//     console.log(`${(result * 1.08).toFixed(2)} leva.`);
//   } else {
//     console.log(`${result.toFixed(2)} leva.`);
//   }
// }

// vacationCalc(["20", "winter"]);

// function company(input) {
//   let pcCount = Number(input[0]);
//   let index = 1;
//   let averageRating = 0;
//   let sells = 0;
//   while (index < input.length) {
//     let rating = 0;
//     let firstTwoEl = Number(input[index].slice(index[input], -1));
//     let lastEl = Number(input[index].slice(-1));
//     switch (lastEl) {
//       case 2:
//         rating = 0;
//         break;
//       case 3:
//         rating = 0.5;
//         break;
//       case 4:
//         rating = 0.7;
//         break;
//       case 5:
//         rating = 0.85;
//         break;
//       case 6:
//         rating = 1;
//         break;
//     }
//     averageRating += lastEl;
//     sells += firstTwoEl * rating;
//     index++;
//   }
//   console.log(sells.toFixed(2));
//   console.log((averageRating / pcCount).toFixed(2));
// }

// company(["2", "204", "206"]);

// function sellout(input) {
//   let mountain = Number(input[0]);
//   let sea = Number(input[1]);
//   let index = 2;
//   let profit = 0;
//   let flag = false;
//   while (index < input.length) {
//     if (input[index] === "sea") {
//       if (sea > 0) {
//         profit += 680;
//         sea--;
//       }
//     }
//     if (input[index] === "mountain") {
//       if (mountain > 0) {
//         profit += 499;
//         mountain--;
//       }
//     }
//     if (input[index] === "Stop") break;
//     if (mountain === 0 && sea === 0) {
//       flag = true;
//       break;
//     }
//     index++;
//   }
//   if (flag === true) {
//     console.log("Good job! Everything is sold.");
//     console.log(`Profit: ${profit} leva.`);
//   } else if (flag === false) {
//     console.log(`Profit: ${profit} leva.`);
//   }
// }

// sellout(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);

// function sumAndProduct(input) {
//   for (let a = 1; a <= 9; a++) {
//     for (let b = 9; b !== a; b--) {
//       for (let c = 0; c <= 9; c++) {
//         for (let d = 9; d !== c; d--) {
//           if (
//             a + b + c + d === a * b * c * d &&
//             Number(input[0].slice(-1)) === 5
//           ) {
//             return console.log(`${a}${b}${c}${d}`);
//           }
//           if (
//             Math.floor((a * b * c * d) / (a + b + c + d)) === 3 &&
//             Number(input[0]) % 3 === 0
//           ) {
//             return console.log(`${d}${c}${b}${a}`);
//           }
//         }
//       }
//     }
//   }
//   console.log("Nothing found");
// }

// sumAndProduct(["214"]);
