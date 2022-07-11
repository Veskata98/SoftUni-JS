// function huntingGames(arr) {
//   let days = +arr.shift();
//   let players = +arr.shift();
//   let energy = +arr.shift();
//   let water = +arr.shift() * players * days;
//   let food = +arr.shift() * players * days;

//   for (let i = 1; i <= days; i++) {
//     let lostEnergy = +arr[i - 1];
//     if (energy - lostEnergy <= 0) {
//       return `You will run out of energy. You will be left with ${food.toFixed(
//         2
//       )} food and ${water.toFixed(2)} water.`;
//     }
//     energy -= lostEnergy;

//     if (i % 2 === 0) {
//       energy *= 1.05;
//       water *= 0.7;
//     }

//     if (i % 3 === 0) {
//       energy *= 1.1;
//       food -= food / players;
//     }
//   }
//   return `You are ready for the quest. You will be left with - ${energy.toFixed(
//     2
//   )} energy!`;
// }

// console.log(
//   huntingGames([
//     "12",
//     "6",
//     "4430",
//     "9.8",
//     "5.5",
//     "620.3",
//     "840.2",
//     "960.1",
//     "220",
//     "340",
//     "674",
//     "365",
//     "345.5",
//     "212",
//     "412.12",
//     "258",
//     "496",
//   ])
// );

// function coffeeLover(arr) {
//   let coffeeArray = arr.shift().split(" ");
//   arr.shift();
//   for (let el of arr) {
//     if (el === "Reverse") {
//       coffeeArray.reverse();
//     }

//     el = el.split(" ");
//     let command = el.shift();

//     switch (command) {
//       case "Include":
//         coffeeArray.push(el[0]);
//         break;
//       case "Remove":
//         let sideToRemove = el[0];
//         let elementsToRemove = el[1];

//         if (elementsToRemove < coffeeArray.length) {
//           if (sideToRemove === "first") {
//             coffeeArray = coffeeArray.slice(elementsToRemove);
//           } else {
//             coffeeArray = coffeeArray.slice(0, -elementsToRemove);
//           }
//         }
//         break;
//       case "Prefer":
//         let coffeeIndex1 = el[0];
//         let coffeeIndex2 = el[1];
//         if (
//           coffeeIndex1 >= 0 &&
//           coffeeIndex1 < coffeeArray.length &&
//           coffeeIndex2 >= 0 &&
//           coffeeIndex2 < coffeeArray.length
//         ) {
//           let temp = coffeeArray[coffeeIndex1];
//           coffeeArray[coffeeIndex1] = coffeeArray[coffeeIndex2];
//           coffeeArray[coffeeIndex2] = temp;
//         }
//         break;

//       default:
//         break;
//     }
//   }
//   return `Coffees:\n${coffeeArray.join(" ")}`;
// }

// console.log(
//   coffeeLover([
//     "Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
//     "3",
//     "Include OrdinaryCoffee",
//     "Remove first 1",
//     "Prefer 4 1",
//   ])
// );

// function chatLogger(arr) {
//   let chat = [];
//   for (let el of arr) {
//     if (el === "end") {
//       return chat.join("\n");
//     }

//     el = el.split(" ");
//     let command = el.shift();

//     switch (command) {
//       case "Chat":
//         let chatMessage = el[0];
//         chat.push(chatMessage);
//         break;
//       case "Delete":
//         let deleteMessage = el[0];
//         if (chat.includes(deleteMessage)) {
//           chat.splice(chat.indexOf(deleteMessage), 1);
//         }
//         break;
//       case "Edit":
//         let editMessage = el[0];
//         let editedVersion = el[1];
//         if (chat.includes(editMessage)) {
//           chat.splice(chat.indexOf(editMessage), 1, editedVersion);
//         }
//         break;
//       case "Pin":
//         let pinMessage = el[0];
//         if (chat.includes(pinMessage)) {
//           chat.push(chat.splice(chat.indexOf(pinMessage), 1)[0]);
//         }
//         break;
//       case "Spam":
//         let spamMessage = el;
//         chat.push(...spamMessage);
//         break;

//       default:
//         break;
//     }
//   }
// }

// console.log(
//   chatLogger([
//     "Chat John",
//     "Spam Let's go to the zoo",
//     "Edit zoo cinema",
//     "Chat tonight",
//     "Pin John",
//     "end",
//   ])
// );
