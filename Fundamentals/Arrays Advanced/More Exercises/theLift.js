// Problem 2 - The Lift
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2517#1.

// Write a program that finds a place for the tourist on a lift.
// Every wagon should have a maximum of 4 people on it. If a wagon is full, you should direct the people to the next one with space available.
// Input
// •	On the first line, you will receive how many people are waiting to get on the lift
// •	On the second line, you will receive the current state of the lift separated by a single space: " ".
// Output
// When there is no more available space left on the lift, or there are no more people in the queue,
// you should print on the console the final state of the lift's wagons separated by " " and one of the following messages:
// •	If there are no more people and the lift have empty spots, you should print:
// "The lift has empty spots!
// {wagons separated by ' '}"
// •	If there are still people in the queue and no more available space, you should print:
// "There isn't enough space! {people} people in a queue!
// {wagons separated by ' '}"
// •	If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "

function theLift(arr) {
  let tourists = +arr.shift();
  let liftArr = arr[0].split(" ").map(Number);

  let sum = 0;

  for (const el of liftArr) {
    sum += 4 - el;
  }

  if (tourists < sum) {
    console.log("The lift has empty spots!");
  } else if (tourists > sum) {
    console.log(
      `There isn't enough space! ${tourists - sum} people in a queue!`
    );
  }

  for (let i = 0; i < liftArr.length; i++) {
    let freeSpots = 4 - liftArr[i];
    if (tourists > freeSpots) {
      tourists -= freeSpots;
      liftArr[i] = 4;
    } else {
      liftArr[i] += tourists;
      break;
    }
  }

  console.log(liftArr.join(" "));
}

theLift(["10", "0 2 3 2 1"]);
