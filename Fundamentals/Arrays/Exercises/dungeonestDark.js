// 9.	*Dungeonest Dark
// As a young adventurer, you seek gold and glory in the darkest dungeons there are.
// You have initial health 100 and initial coins 0. You will be given a string, representing the dungeon's rooms.
// Each room is separated with '|' (vertical bar): "room1|room2|room3…"

// Each room contains - an item or a monster; and a number. They are separated by a single space.
//  ("item/monster number").
// •	If the first part is "potion":
// o	You are healed with the number in the second part. However, your health cannot exceed your initial health (100).
// o	Print: `You healed for {healing-number} hp.`
// o	After that, print your current health: `Current health: {number} hp.`
// •	If the first part is "chest":
// o	You have found some coins, the number in the second part.
// o	Print: `You found {coins} coins.`
// •	In any other case, you are facing a monster, you are going to fight.
// The second part of the room contains the attack of the monster, and the first the monster's name. You should remove the monster's attack from your health.
// o	If you are not dead (health > 0) you have slain the monster, and you should print:
//                                    `You slayed {monster-name}.`
// o	If you have died, print: `You died! Killed by {monster-name}.` and your quest is over.

// Print the best room you`ve to manage to reach: `Best room: {room}`.
// •	If you managed to go through all the rooms in the dungeon, print on the next three lines:
// "You've made it!"
//  "Coins: {coins}"
//  "Health: {health}"

// Input
// You receive an array with one element- string, representing the dungeon's rooms, separated with '|' (vertical bar): ["room1|room2|room3…"].

// Output
// Print the corresponding messages, described above.

function dungeonestDark(arr) {
  let action = arr.join().split("|");
  let health = 100,
    coins = 0;
  let index = 0;
  let count = 0;

  while (index < action.length) {
    let item = action[index].split(" ");
    count++;
    switch (item[0]) {
      case "potion":
        let healing = +item[1];

        if (health + healing >= 100) {
          healing = 100 - health;
          health = 100;
        } else {
          health += healing;
        }

        console.log(`You healed for ${healing} hp.`);
        console.log(`Current health: ${health} hp.`);

        break;

      case "chest":
        let chestCoins = +item[1];
        coins += chestCoins;
        console.log(`You found ${chestCoins} coins.`);
        break;

      default:
        let damage = +item[1];
        health -= damage;

        if (health > 0) {
          console.log(`You slayed ${item[0]}.`);
        } else {
          console.log(`You died! Killed by ${item[0]}.`);
          console.log(`Best room: ${count}`);
          return;
        }

        break;
    }

    index++;
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}

dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
