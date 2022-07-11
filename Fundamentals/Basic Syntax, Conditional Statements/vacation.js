// 4.	Vacation
// You are given a group of people, the type of the group, and the day of the week they are going to stay.
// Based on that information calculate how much they have to pay and print that price on the console.
// Use the table below. In each cell is the price for a single person.
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.

function solve(count, type, day) {
  let price = 0,
    total = 0;

  if (type === "Students") {
    if (day === "Friday") {
      price = 8.45;
    } else if (day === "Saturday") {
      price = 9.8;
    } else if (day === "Sunday") {
      price = 10.46;
    }
  } else if (type === "Business") {
    if (day === "Friday") {
      price = 10.9;
    } else if (day === "Saturday") {
      price = 15.6;
    } else if (day === "Sunday") {
      price = 16;
    }
  } else if (type === "Regular") {
    if (day === "Friday") {
      price = 15;
    } else if (day === "Saturday") {
      price = 20;
    } else if (day === "Sunday") {
      price = 22.5;
    }
  }
  total = price * count;

  if (count >= 30 && type === "Students") {
    total *= 0.85;
  } else if (count >= 100 && type === "Business") {
    total = total - 10 * price;
  } else if (count >= 10 && count <= 20 && type === "Regular") {
    total *= 0.95;
  }

  console.log(`Total price: ${total.toFixed(2)}`);
}

solve(40, "Regular", "Saturday");
