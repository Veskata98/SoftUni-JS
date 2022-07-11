// 3.	Piccolo
// Write a function that:
// •	Records a car number for every car that enters the parking lot
// •	Removes a car number when the car goes out
// •	Input will be an array of strings in format [direction, carNumber]
// Print the output with all car numbers which are in the parking lot sorted in ascending by number.
// If the parking lot is empty, print: "Parking Lot is Empty".

function piccolo(arr) {
  let result = [];
  arr.forEach((element) => {
    let [direction, number] = element.split(", ");
    if (direction === "IN") {
      if (!result.includes(number)) {
        result.push(number);
      }
    } else {
      if (result.includes(number)) {
        result.splice(result.indexOf(number), 1);
      }
    }
  });

  if (result.length === 0) {
    console.log("Parking Lot is Empty");
  } else {
    result.sort((a, b) => a.localeCompare(b)).forEach((el) => console.log(el));
  }
}

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
