// 9. Loading Bar
// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.

function loadingBar(number) {
  if (number === 100) {
    console.log("100% Complete!");
    return;
  }

  let loaded = number;
  let notloaded = 100 - number;

  function loading() {
    return "%".repeat(loaded / 10);
  }
  function notloadedYet() {
    return ".".repeat(notloaded / 10);
  }
  console.log(`${number}% [${loading()}${notloadedYet()}]\nStill loading...`);
}

loadingBar(10);
