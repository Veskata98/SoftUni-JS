// 1.	Winning Ticket
// The lottery is exciting. What is not, is checking a million tickets for winnings only by hand. So, you are given the task to create a program, which automatically checks if a ticket is a winner.
// You are given a collection of tickets separated by commas and spaces. You need to check every one of them if it has a winning combination of symbols.
// A valid ticket should have exactly 20 characters. The winning symbols are '@', '#', '$' and '^'. But for a ticket to be a winner, the symbol should uninterruptedly repeat at least 6 times in both the tickets left half and the tickets right half.
// For example, a valid winning ticket should be something like this:
// "Cash$$$$$$Ca$$$$$$sh"
// The left half "Cash$$$$$$" contains "$$$$$$", which is also contained in the tickets right half "Ca$$$$$$sh". A winning ticket should contain symbols repeating up to 10 times in both halves, which is considered a Jackpot (for example: "$$$$$$$$$$$$$$$$$$$$").
// Input
// The input will be read from the console. The input consists of a single line containing all tickets separated by commas and one or more white spaces in the format:
// •	"{ticket}, {ticket}, … {ticket}"
// Output
// Print the result for every ticket in the order of their appearance, each on a separate line in the format:
// •	Invalid ticket - "invalid ticket"
// •	No match - "ticket "{ticket}" - no match"
// •	Match with length 6 to 9 - "ticket "{ticket}" - {match length}{match symbol}"
// •	Match with length 10 - "ticket "{ticket}" - {match length}{match symbol} Jackpot!"
// Constrains
// •	The number of tickets will be in the range [0 … 100]

function winningTicker(data) {
  let tickets = data.split(",");
  for (let ticket of tickets) {
    ticket = ticket.trim();
    if (ticket.length !== 20) {
      console.log("invalid ticket");
      continue;
    }

    if (!/[@#$\^]/g.test(ticket)) {
      console.log(`ticket "${ticket}" - no match`);
      continue;
    }

    let leftHalf = ticket.slice(0, 10);
    let rightHalf = ticket.slice(-10);

    let leftHalfRegEx =
      /(?<countAt>[@]{6,})|(?<countHashtag>[#]{6,})|(?<countDollar>[$]{6,})|(?<countCarrot>[\^]{6,})/g.exec(
        leftHalf
      );
    let rightHalfRegEx =
      /(?<countAt>[@]{6,})|(?<countHashtag>[#]{6,})|(?<countDollar>[$]{6,})|(?<countCarrot>[\^]{6,})/g.exec(
        rightHalf
      );
    let flag = false;
    if (leftHalfRegEx && rightHalfRegEx) {
      let leftValues = Object.values(leftHalfRegEx.groups);
      let rightValues = Object.values(rightHalfRegEx.groups);

      for (let i = 0; i < 4; i++) {
        if (leftValues[i] !== undefined && rightValues[i] !== undefined) {
          if (leftValues[i].length > 5 && rightValues[i].length > 5) {
            if (leftValues[i].length >= rightValues[i].length) {
              console.log(
                `ticket "${ticket}" - ${rightValues[i].length}${
                  leftValues[i][0]
                }${
                  leftValues[i].length === 10 && rightValues[i].length === 10
                    ? " Jackpot!"
                    : ""
                }`
              );
            } else {
              console.log(
                `ticket "${ticket}" - ${leftValues[i].length}${
                  leftValues[i][0]
                }${
                  leftValues[i].length === 10 && rightValues[i].length === 10
                    ? " Jackpot!"
                    : ""
                }`
              );
            }
            flag = true;
            break;
          }
        }
      }
    }
    if (!flag) {
      console.log(`ticket "${ticket}" - no match`);
    }
  }
}

winningTicker(
  "th@@@@@@@emo@@@@@@ey  ,^^^^^^^^^^^^^^^^^^^^, t^^^^^^heemo^^^^^^ey"
);
