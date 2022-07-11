// 2.	Day of Week
// Write a program, which receives a number and prints the corresponding name of the day of the week (in English).
// If the number is NOT a valid day, print: "Invalid day!".

function dayOfWeek(n) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (n > 0 && n < 8) {
    console.log(days[n - 1]);
  } else {
    console.log("Invalid day!");
  }
}

dayOfWeek(7);
