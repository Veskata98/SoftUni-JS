// 5.	Pounds to Dollars
// Write a function that converts British pounds to dollars formatted to the 3rd decimal point.
// •	1 British Pound = 1.31 Dollars

function poundToDollar(pound) {
  console.log((pound * 1.31).toFixed(3));
}

poundToDollar(80);
