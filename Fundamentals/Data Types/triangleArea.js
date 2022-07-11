// 7.	Triangle Area
// Write a function that calculates a triangle’s area by its 3 sides.
// The input comes as three number arguments, representing one side of a triangle.
// The output should be printed to the console.

function triangleAre(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(area);
}

triangleAre(2, 3.5, 4);
