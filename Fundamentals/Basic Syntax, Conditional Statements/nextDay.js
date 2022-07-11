// 3.	Next Day
// Write a JS function that calculates the date of the next day by given year, month, and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.

function nextDay(year, month, date) {
  let day = new Date(year, month, date);

  let nextDay = new Date(day);
  nextDay.setDate(day.getDate() + 1);
  console.log(
    `${nextDay.getFullYear()}-${nextDay.getMonth()}-${nextDay.getDate()}`
  );
}

nextDay(2020, 3, 24);
