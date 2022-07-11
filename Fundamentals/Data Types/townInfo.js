//3.	Town Info
// You will be given 3 parameters. The first parameter will be the name of the town (string),
// the second – the population (number), and the third the area (number). Print the result in the following format:
//     "Town {town name} has population of {population} and area {area} square km."

function townInfo(city, population, area) {
  console.log(
    `Town ${city} has population of ${population} and area ${area} square km.`
  );
}

townInfo("Sofia", 1286383, 492);
