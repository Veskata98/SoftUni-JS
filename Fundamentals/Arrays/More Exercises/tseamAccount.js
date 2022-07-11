// 5.	Tseam Account
// As a gamer, Peter has Tseam Account. He loves to buy new games.
// You are given Peter's account with all of his games-> strings, separated by space.
// Until you receive "Play!" you will be receiving commands which Peter does with his account.
// You may receive the following commands:
// •	Install {game} - add the game at the last position in the account, but only if it isn't installed already.
// •	Uninstall {game} - delete the game if it exists.
// •	Update {game} - update the game if it exists and place it in the last position.
// •	Expansion {game}-{expansion} - check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";
// Input
// •	On the first input line you will receive Peter`s account - a sequence of game names, separated by space.
// •	Until you receive "Play!" you will be receiving commands.
// Output
// •	As output, you must print Peter`s Tseam account.
// Constraints
// •	The command will always be valid.
// •	The game and expansion will be strings and will contain any character, except '-'.
// •	Allowed working time / memory: 100ms / 16MB.

function tseamAccount(arr) {
  let games = arr[0].split(" ");

  for (const el of arr) {
    let action = el.split(" ").shift();
    let game = el.split(" ").pop();

    switch (action) {
      case "Install":
        if (!games.includes(game)) {
          games.push(game);
        }
        break;

      case "Uninstall":
        if (games.includes(game)) {
          games.splice(games.indexOf(game), 1);
        }
        break;

      case "Update":
        if (games.includes(game)) {
          games.push(games.splice(games.indexOf(game), 1)[0]);
        }
        break;

      case "Expansion":
        let gameToExtend = game.split("-")[0];
        game = game.split("-").join(":");
        if (games.includes(gameToExtend)) {
          games.splice(games.indexOf(gameToExtend) + 1, 0, game);
        }
        break;

      case "Play!":
        console.log(games.join(" "));
        break;
    }
  }
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
