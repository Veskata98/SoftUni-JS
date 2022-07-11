// 6. Password Validator
// Write a function that checks if a given password is valid. Password validations are:
// •	The length should be 6 - 10 characters (inclusive)
// •	It should consist only of letters and digits
// •	It should have at least 2 digits
// If a password is a valid print: "Password is valid".
// If it is NOT valid, for every unfulfilled rule print a message:
// •	"Password must be between 6 and 10 characters"
// •	"Password must consist only of letters and digits"
// •	"Password must have at least 2 digits"

function passwordValidator(password) {
  let splittedPass = password.split("");

  let missLength = false;
  let invalidSymbol = false;
  let digitsInString = 0;

  for (const char of splittedPass) {
    if (!isNaN(char)) {
      digitsInString++;
      continue;
    }
    if (char.toLowerCase() === char.toUpperCase()) {
      invalidSymbol = true;
    }
  }

  if (splittedPass.length < 6 || splittedPass.length > 10) {
    missLength = true;
  }

  if (!missLength && !invalidSymbol && digitsInString >= 2) {
    console.log("Password is valid");
    return;
  }

  if (missLength) {
    console.log("Password must be between 6 and 10 characters");
  }

  if (invalidSymbol) {
    console.log("Password must consist only of letters and digits");
  }

  if (digitsInString < 2) {
    console.log("Password must have at least 2 digits");
  }
}

passwordValidator("Pa$s1");
