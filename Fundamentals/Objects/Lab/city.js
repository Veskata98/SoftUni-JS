// 2.	City
// Write a function that receives a single parameter – an object, containing five properties:
// { name, area, population, country, postcode }
// Loop through all the keys and print them with their values in format: "{key} -> {value}"
// See the examples below.

function city(city) {
  let res = [];
  for (const key in city) {
    res.push(`${key} -> ${city[key]}`);
  }
  return res.join("\n");
}

console.log(
  city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  })
);
