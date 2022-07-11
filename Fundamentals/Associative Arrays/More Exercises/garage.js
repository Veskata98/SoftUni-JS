// 1.	Garage
// Write a function that stores cars in garages. You will be given an array of strings.
// Each string will contain a number of a garage and info about a car.
// You have to store the car (with its info) in the given garage. The info about the car will be in the format:
//  "{key1}: {value1}, {key2}: {value2}…"
// If the garage does not exist, create it. The cars will always be unique. At the end print the result in the format:
// "Garage № {number}:
// --- {carOneKeyOne} - {carOneValueOne}, {carOneKeyTwo} - {carOneValueTwo}…
// --- {the same for the next car}
// Garage № {number}: …"

function garage(arr) {
  let garages = [];
  for (const el of arr) {
    let [garage, carInfo] = el.split(" - ");
    carInfo = carInfo.split(": ").join(" - ");
    let car = {
      garage: garage,
      carInfo: carInfo,
    };
    garages.push(car);
  }
  let index = "";
  garages.sort((a, b) => a.garage - b.garage);
  for (const el of garages) {
    if (index !== el.garage) {
      index = el.garage;
      console.log(`Garage № ${index}`);
    }
    console.log(`--- ${el.carInfo}`);
  }
}

garage([
  "1 - color: blue, fuel type: diesel",
  "2 - color: red, manufacture: Audi",
  "1 - fuel type: petrol",
  "1 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
