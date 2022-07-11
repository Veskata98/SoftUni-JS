function demo(array) {
  let size = Number(array[0]);
  let index = array[1].split(" ");
  index.map((i) => Number(i));
  let field = new Array(size);
  let round = "";

  let ladybugIndex = 0;
  let direction = "";
  let flyLength = 0;

  let helper = 1;

  let difference = 0;

  for (let i = 0; i < size; i++) {
    if (index.includes(i.toString())) field[i] = 1;
    else field[i] = 0;
  }

  for (let i = 2; i < array.length; i++) {
    round = array[i].split(" ");

    ladybugIndex = Number(round[0]);
    direction = round[1];
    flyLength = Number(round[2]);

    if (ladybugIndex > field.length - 1 || ladybugIndex < 0) continue;

    switch (direction) {
      case "left":
        if (field[ladybugIndex] === 0) continue;

        field[ladybugIndex] = 0;

        if (
          ladybugIndex - flyLength < field.length &&
          ladybugIndex - flyLength >= 0
        ) {
          if (field[ladybugIndex - flyLength] === 1) {
            while (helper <= size) {
              if (ladybugIndex + flyLength * helper >= size) break;
              if (field[ladybugIndex - flyLength * helper] === 1) {
                helper++;
              } else {
                field[ladybugIndex - flyLength * helper] = 1;
                break;
              }
            }
            difference = field.length - size;
            if (field.length > size) field.splice(-difference);
            difference = 0;
            helper = 1;
          } else {
            field[ladybugIndex - flyLength] = 1;
            break;
          }
        }
        break;

      case "right":
        if (field[ladybugIndex] === 0) continue;

        field[ladybugIndex] = 0;

        if (
          ladybugIndex + flyLength < field.length &&
          ladybugIndex + flyLength >= 0
        ) {
          if (field[ladybugIndex + flyLength] === 1) {
            while (helper <= size) {
              if (ladybugIndex + flyLength * helper >= size) break;
              if (field[ladybugIndex + flyLength * helper] === 1) helper++;
              else {
                field[ladybugIndex + flyLength * helper] = 1;
                break;
              }
            }
            difference = field.length - size;
            if (field.length > size) field.splice(-difference);
            helper = 1;
            difference = 0;
          } else {
            field[ladybugIndex + flyLength] = 1;
            break;
          }
        }
        break;

      default:
        break;
    }
  }
  console.log(field.join(" "));
}

demo([10, "0 1 2", "0 right 2"]);
