// 9.	*Gladiator Expenses
// As a gladiator, Peter has to repair his broken equipment when he loses a fight.
// His equipment consists of a helmet, sword, shield, and armor. You will receive Peter`s lost fights count.
// •	Every second lost game, his helmet is broken.
// •	Every third lost game, his sword is broken.
// •	When both his sword and helmet are broken in the same lost fight, his shield also breaks.
// •	Every second time, when his shield brakes, his armor also needs to be repaired.
// You will receive the price of each item in his equipment. Calculate his expenses for the year for renewing his equipment.
// Input / Constraints
// You will receive 5 parameters to your function:
// •	The first parameter - lost fights count - is an integer in the range [0, 1000].
// •	The second parameter - helmet price - is the floating-point number in the range [0, 1000].
// •	The third parameter - sword price - is the floating-point number in the range [0, 1000].
// •	The fourth parameter - shield price - is the floating-point number in the range [0, 1000].
// •	The fifth parameter - armor price - is the floating-point number in the range [0, 1000].
// Output
// •	As output you must print Peter`s total expenses for new equipment rounded
// to the second decimal point: "Gladiator expenses: {expenses} aureus"
// •	Allowed working time / memory: 100ms / 16MB.

function gladiatorExpenses(
  losts,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let helmetRepair = 0,
    swordRepair = 0,
    shieldRepair = 0,
    armorRepair = 0;

  for (let i = 1; i <= losts; i++) {
    if (i % 2 === 0) {
      helmetRepair++;
    }
    if (i % 3 === 0) {
      swordRepair++;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      shieldRepair++;
    }
  }
  armorRepair = Math.floor(shieldRepair / 2);
  let sum =
    helmetPrice * helmetRepair +
    swordPrice * swordRepair +
    shieldPrice * shieldRepair +
    armorPrice * armorRepair;

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
