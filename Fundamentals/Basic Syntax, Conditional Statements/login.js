// 9.	* Login
// You will be given a string representing a username. The correct password will be that username reversed.
// Until you receive the correct password print on the console: "Incorrect password. Try again.".
// When you receive the correct password print: "User {username} logged in."
// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program.
// The input comes as an array of strings - the first string represents username and each subsequent string is a password.

function solve(array) {
  let user = array[0];
  let password = user.split("").reverse().join("");
  let index = 1,
    flag = false;
  while (index <= 4) {
    if (array[index] === password) {
      console.log(`User ${user} logged in.`);
      flag = true;
      break;
    } else {
      if (index === 4) {
        break;
      }
      console.log("Incorrect password. Try again.");
    }
    index++;
  }
  if (!flag) {
    console.log(`User ${user} blocked!`);
  }
}

solve(["Acer", "login", "go", "let me in", "recA"]);
