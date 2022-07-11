function demo(params) {
  let inventory = params[0].split(" ");
  let index = 1;

  while (index < params.length) {
    let action = params[index].split(" ");
    let item = action[1];

    switch (action[0]) {
      case "Buy":
        if (!inventory.includes(item)) inventory.push(item);
        break;
      case "Trash":
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i] === item) inventory.splice(i, 1);
        }
        break;
      case "Repair":
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i] === item) {
            inventory.push(inventory.splice(i, 1)[0]);
          }
        }
        break;
      case "Upgrade":
        let equipmentUpdate = item.split("-");
        for (let i = 0; i < inventory.length; i++) {
          if (inventory[i] === equipmentUpdate[0]) {
            let newItem = equipmentUpdate[0] + ":" + equipmentUpdate[1];
            inventory.splice(i + 1, 0, newItem);
          }
        }
        break;
      default:
        break;
    }
    index++;
  }
  console.log(inventory.join(" "));
}

demo([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
