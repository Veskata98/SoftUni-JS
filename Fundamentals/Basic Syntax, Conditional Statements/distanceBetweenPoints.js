// 5.	Distance Between Points
// Write a JS function that calculates the distance between two points by given x and y coordinates.
// The input comes as four number elements in the format x1, y1, x2, y2.
// Each pair of elements are the coordinates of a point in 2D space.

function distance(x1, y1, x2, y2) {
  console.log(Math.hypot(x2 - x1, y2 - y1).toFixed(14));
}

distance(2.33, 17, -3.954, -11.2);
