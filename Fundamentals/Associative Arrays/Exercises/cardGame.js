// 5.	Card Game
// You are given a sequence of people and for every person what cards he draws from the deck.
// The input will be an array of strings. Each string will be in the format:
// {personName}: {PT, PT, PT,… PT}
// Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type.
// The name can contain any ASCII symbol except ':'.
// The input will always be valid and in the format described, there is no need to check it.

// A single person cannot have more than one card with the same power and type, if he draws such a card he discards it.
// The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type.
// Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
// Finally print out the total value each player has in his hand in the format:
// {personName}: {value}

function cardGame(arr) {
  let persons = {};
  for (const el of arr) {
    let [name, cards] = el.split(": ");
    cards = cards.split(", ");
    if (!persons.hasOwnProperty(name)) {
      persons[name] = [];
    }
    persons[name].push(...cards);
  }
  for (const key in persons) {
    let points = 0;
    persons[key] = [...new Set(persons[key])];
    persons[key].forEach((element) => {
      element = element.split("");
      let type = element.pop();
      let power = element.join("");
      let tempPoints = 0;
      switch (power) {
        case "A":
          tempPoints = 14;
          break;
        case "K":
          tempPoints = 13;
          break;
        case "Q":
          tempPoints = 12;
          break;
        case "J":
          tempPoints = 11;
          break;
        default:
          tempPoints = +power;
          break;
      }
      if (type === "S") {
        tempPoints *= 4;
      } else if (type === "H") {
        tempPoints *= 3;
      } else if (type === "D") {
        tempPoints *= 2;
      } else if (type === "C") {
        tempPoints *= 1;
      }
      points += tempPoints;
    });
    console.log(`${key}: ${points}`);
  }
}

/////////////////////////////////////////////////
/////////////////////////////////////////////////

// function cardGame(data) {
//   let players = {};

//   let cardsPower = {
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//     6: 6,
//     7: 7,
//     8: 8,
//     9: 9,
//     10: 10,
//     J: 11,
//     Q: 12,
//     K: 13,
//     A: 14,
//   };

//   let cardType = {
//     S: 4,
//     H: 3,
//     D: 2,
//     C: 1,
//   };

//   for (const el of data) {
//     let [name, cards] = el.split(": ");
//     cards = cards.split(", ");
//     if (!players.hasOwnProperty(name)) {
//       players[name] = [];
//     }
//     players[name].push(...cards);
//   }
//   for (const key in players) {
//     let sum = 0;
//     let cardsFinal = [...new Set(players[key])];
//     for (let card of cardsFinal) {
//       card = card.split("");
//       let type = card.pop();
//       let power = card.join("");

//       type = cardType[type];
//       power = cardsPower[power];

//       sum += type * power;
//     }
//     console.log(`${key}: ${sum}`);
//   }
// }

cardGame([
  "John: 2C, 4H, 9H, AS, QS",
  "Slav: 3H, 10S, JC, KD, 5S, 10S",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Slav: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "Alex: 6H, 7S, KC, KD, 5S, 10C",
  "Thomas: QH, QC, JS, JD, JC",
  "John: JD, JD, JD, JD",
]);
