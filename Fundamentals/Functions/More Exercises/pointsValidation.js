// 3.	Points Validation
// Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks
// if the distances between each point (x, y) and the start of the Cartesian coordinate system (0, 0) and between
// the points themselves is valid. A distance between two points is considered valid if it is an integer value.
// •	In case a distance is valid print: `{x1, y1} to {x2, y2} is valid`
// •	In case the distance is invalid print: `{x1, y1} to {x2, y2} is invalid`
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
// The input consists of two points given as an array of numbers.

function pointsValidation(arr) {
  let x1 = arr[0];
  let y1 = arr[1];
  let x2 = arr[2];
  let y2 = arr[3];

  if (Math.sqrt(Math.pow(x1 - 0, 2) + Math.pow(y1 - 0, 2)) % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2)) % 1 === 0) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

pointsValidation([2, 1, 1, 1]);
