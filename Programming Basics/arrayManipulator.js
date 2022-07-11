function demo(params) {
  let arr = params.shift().split(" ").map(Number);
  let index = 0;

  while (index < params.length) {
    let action = params[index].split(" ");
    let value = Number(action[1]);

    switch (action[0]) {
      case "Add":
        arr.push(value);
        break;
      case "Remove":
        arr = arr.filter((el) => el !== value);
        break;
      case "RemoveAt":
        arr.splice(value, 1);
        break;
      case "Insert":
        let indexAt = action[2];
        arr.splice(indexAt, 0, value);
        break;
      default:
        break;
    }
    index++;
  }
  console.log(arr.join(" "));
}

demo(["6 12 2 65 6 42", "Add 8", "Remove 12", "RemoveAt 3", "Insert 6 2"]);
