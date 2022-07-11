// 3.	School Register
// In this problem, you have to arrange all students by grade.
// You as the secretary of the school principal will process students and store them into a school register before the new school year hits.
// As a draft, you have a list of all the students from last year but mixed. Keep in mind that if a student has a lower score than 3,
// he does not go into the next class. As a result of your work, you have to print the entire school register sorted in
// ascending order by grade already filled with all the students from last year in the format:
// `{nextGrade} Grade
// List of students: {All students in that grade}
// Average annual score from last year: {average annual score on the entire class from last year}`
// And empty row {console.log}
// The input will be an array with strings, each containing a student's name, last year's grade, and an annual score.
// The average annual score from last year should be formatted to the second decimal point.

function schoolRegister(data) {
  let students = [];
  for (const el of data) {
    let [name, grade, score] = el.split(", ");
    name = name.split(" ").pop();
    grade = +grade.split(" ").pop();
    score = +score.split(" ").pop();

    if (score >= 3.0 && grade < 12) {
      let student = {
        name: name,
        grade: grade,
        score: score,
      };
      students.push(student);
    }
  }

  console.log(" ");

  for (let i = 1; i <= 12; i++) {
    if (students.some((student) => student.grade + 1 === i)) {
      console.log(`${i} Grade`);
      let listOfStudents = [];
      let averageScore = 0;
      for (const el of students) {
        if (el.grade + 1 === i) {
          listOfStudents.push(el.name);
          averageScore += el.score;
        }
      }
      console.log(`List of students: ${listOfStudents.join(", ")}`);
      console.log(
        `Average annual score from last year: ${(
          averageScore / listOfStudents.length
        ).toFixed(2)}`
      );
      console.log(" ");
    }
  }
}

schoolRegister([
  "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
  "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
  "Student name: George, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
  "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
  "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
  "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
  "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
  "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
  "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
  "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
  "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00",
]);
