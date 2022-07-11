// 5.	School Grades
// Write a function that stores students and their grades throughout the year.
// If a student appears more than once, add the new grades to existing ones.

// Finally, print the students and their average grades, sorted alphabetically by student name. The input comes as an array of strings.
// Note: The average grades must be fixed to the second decimal place.

function schoolGrades(arr) {
  let obj = {};
  for (const el of arr) {
    let name = el.split(" ").shift();
    let grades = el.split(" ").slice(1);
    if (obj.hasOwnProperty(name)) {
      obj[name].push(...grades);
    } else {
      obj[name] = grades;
    }
  }
  let sortedObj = Object.keys(obj).sort((a, b) => a.localeCompare(b));

  for (const key of sortedObj) {
    let avgGrade =
      obj[key].map(Number).reduce((a, b) => a + b) / obj[key].length;

    console.log(`${key}: ${avgGrade.toFixed(2)}`);
  }
}

schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
