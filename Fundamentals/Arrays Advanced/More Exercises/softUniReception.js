// Problem 1 - SoftUni Reception
// Problem for exam preparation for the Programming Fundamentals Course @SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.org/Contests/Practice/Index/2474#0.

// Every day, thousands of students pass by the reception at SoftUni with different questions to ask.
// The employees have to help everyone by providing all the information and answering all of the questions.
// Three employees are working on the reception all day. Each of them can handle a different number of students per hour.
// Your task is to calculate how much time it will take to answer all the questions of a given number of students.
// First, you will receive 3 lines with integers, representing the number of students that each employee can help per hour.
// On the following line, you will receive students count as a single integer.
// Every fourth hour, all employees have a break, so they don't work for an hour. It is the only break for the employees,
// because they don't need rest, nor have a personal life. Calculate the time needed to answer all the student's
// questions and print it in the following format: "Time needed: {time}h."
// Input / Constraints
// •	On the first three lines -  each employee efficiency -  integer in the range [1 - 100]
// •	On the fourth line - students count – integer in the range [0 – 10000]
// •	Input will always be valid and in the range specified
// Output
// •	Print a single line: "Time needed: {time}h."
// •	Allowed working time / memory: 100ms / 16MB

function softUniReception(arr) {
  let students = +arr.pop();
  let employee1 = +arr[0];
  let employee2 = +arr[1];
  let employee3 = +arr[2];
  let studentsPerHour = employee1 + employee2 + employee3;

  let hours = 0;
  let index = 1;

  while (students > 0) {
    if (index % 4 === 0) {
      hours++;
      index++;
      continue;
    }
    students -= studentsPerHour;
    hours++;
    index++;
  }
  console.log(`Time needed: ${hours}h.`);
}

softUniReception(["1", "2", "3", "45"]);
