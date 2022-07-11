// 10. *Legendary Farming
// You’ve beaten all the content and the last thing left to accomplish is to own a legendary item.
// However, it’s a tedious process and requires quite a bit of farming.

// Anyway, you are not too pretentious – any legendary will do. The possible items are:
// •	"Shadowmourne" – requires 250 Shards
// •	"Valanyr" – requires 250 Fragments
// •	"Dragonwrath" – requires 250 Motes
// "Shards", "Fragments", and "Motes" are the key materials, all else is junk.

// You will be given lines of input in the format:
// "{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"

// Keep track of the key materials - the first that reaches the 250 mark wins the race.
// At that point, print the corresponding legendary obtained.

// Then, print the remaining shards, fragments, motes, ordered by quantity in descending order,
// then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.

// Input
// •	Each line comes in the following format:
// {quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}

// Output
// •	On the first line, print the obtained item in format: "{Legendary item} obtained!"
// •	On the next three lines, print the remaining key materials in descending order by quantity
// o	If two key materials have the same quantity, print them in alphabetical order
// •	On the final several lines, print the junk items in alphabetical order
// o	All materials are printed in format "{material}: {quantity}"
// o	All output should be lowercase, except the first letter of the legendary

function legendaryFarming(str) {
  let input = str.split(" ");
  let materials = {
    fragments: 0,
    shards: 0,
    motes: 0,
  };
  let junk = {};
  let keyMaterial = "";
  for (let i = 0; i < input.length; i += 2) {
    let material = input[i + 1].toLowerCase();
    let quantity = +input[i];
    if (
      material === "motes" ||
      material === "fragments" ||
      material === "shards"
    ) {
      materials[material] += quantity;
      if (materials[material] >= 250) {
        materials[material] -= 250;
        keyMaterial = material;
        break;
      }
    } else {
      if (!junk.hasOwnProperty(material)) {
        junk[material] = 0;
      }
      junk[material] += quantity;
    }
  }

  if (keyMaterial === "shards") {
    console.log("Shadowmourne obtained!");
  } else if (keyMaterial === "fragments") {
    console.log("Valanyr obtained!");
  } else {
    console.log("Dragonwrath obtained!");
  }

  Object.entries(materials)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .forEach((el) => console.log(el.join(": ")));
  Object.entries(junk)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((el) => console.log(el.join(": ")));
}

legendaryFarming(
  "123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver"
);
