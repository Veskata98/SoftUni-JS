// 2.	Race
// Write a function that processes information about a race. On the first line, you will be given a list of participants separated by ", ".
// On the next few lines until you receive a line "end of race" you will be given some info which will be some alphanumeric characters.
// In between them, you could have some extra characters which you should ignore. For example: "G!32e%o7r#32g$235@!2e".
// The letters are the name of the person and the sum of the digits is the distance he ran. So here we have George who ran 29 km.
// Store the information about the person only if the list of racers contains the name of the person.
// If you receive the same person more than once just add the distance to his old distance.
// At the end print the top 3 racers ordered by distance in descending in the format:
// "1st place: {first racer}
// 2nd place: {second racer}
// 3rd place: {third racer}"

function race(data) {
  let podium = {};
  let racers = data
    .shift()
    .split(", ")
    .forEach((racer) => {
      podium[racer] = 0;
    });
  for (const el of data) {
    if (el === "end of race") {
      break;
    }
    let name = el.match(/([A-Za-z])/g).join("");
    let ranDist = el
      .match(/[0-9]/g)
      .map(Number)
      .reduce((a, b) => a + b);
    if (podium.hasOwnProperty(name)) {
      podium[name] += ranDist;
    }
  }
  Object.entries(podium)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .forEach((racer, index) => {
      if (index === 0) {
        console.log(`${index + 1}st place: ${racer[0]}`);
      } else if (index === 1) {
        console.log(`${index + 1}nd place: ${racer[0]}`);
      } else {
        console.log(`${index + 1}rd place: ${racer[0]}`);
      }
    });
}

race([
  "Ronald, Bill, Tom, Timmy, Maggie, Michonne",
  "Mi*&^%$ch123o!#$%#nne787) ",
  "%$$B(*&&)i89ll)*&) ",
  "R**(on%^&ald992) ",
  "T(*^^%immy77) ",
  "Ma10**$#g0g0g0i0e",
  "end of race",
]);
