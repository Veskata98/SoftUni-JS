// 8.	*Travel Time
// Write a function that collects and orders information about travel destinations.

// As input, you will receive an array of strings.
// Each string will consist of the following information with the format:
// "Country name > Town name > Travel cost"

// The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
// If you receive the same Town name twice, you should keep the cheapest offer.

// Have in mind that one Country may have several Towns to visit.

// After you finish the organizational part, you need to let Steven know which destination point to visit first.
// The order will be as follows:  First sort Country names alphabetically and then sort by lowest Travel cost.

function travelTime(arr) {
  let travelOrders = {};
  for (const el of arr) {
    let [country, town, cost] = el.split(" > ");
    if (!travelOrders.hasOwnProperty(country)) {
      travelOrders[country] = { [town]: cost };
    } else {
      if (travelOrders[country].hasOwnProperty(town)) {
        if (travelOrders[country][town] > cost) {
          travelOrders[country][town] = cost;
        }
      } else {
        travelOrders[country][town] = cost;
      }
    }
  }
  Object.entries(travelOrders)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach((order) => {
      let result = [];
      result.push(`${order[0]} ->`);
      Object.entries(order[1])
        .sort((a, b) => a[1] - b[1])
        .forEach((destination) => {
          result.push(destination.join(" -> "));
        });
      console.log(result.join(" "));
    });
}

travelTime([
  "Bulgaria > Sofia > 25000",
  "Bulgaria > Sofia > 25000",
  "Kalimdor > Orgrimar > 25000",
  "Albania > Tirana > 25000",
  "Bulgaria > Varna > 25010",
  "Bulgaria > Lukovit > 10",
]);
