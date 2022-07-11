// 4.	Santa's Secret Helper
// After the successful second Christmas, Santa needs to gather information about the behavior of children to plan the presents for next Christmas. He has a secret helper, who is sending him encrypted information. Your task is to decrypt it and create a list of the good children.
// You will receive an integer, which represents a key, and afterward some messages, which you must decode by subtracting the key from the value of each character. After the decryption, to be considered a valid match, a message should:
// -	Have a name, which starts after '@' and contains only letters from the Latin alphabet
// -	Have a behavior type - "G"(good) or "N"(naughty) and must be surrounded by "!" (exclamation mark).
// The order in the message should be: child’s name -> child’s behavior. They can be separated from the others by any character except: '@', '-', '!', ':' and '>'.
// You will be receiving messages until you are given the “end” command. Afterward, print the names of the children, who will receive a present, each on a new line.
// Input / Constraints
// •	The first line holds n – the number which you have to subtract from the characters – integer in the range [1…100];
// •	On the next lines, you will be receiving encrypted messages.
// Output
// Print the names of the children, each on a new line

// 4.	Santa's Secret Helper
// After the successful second Christmas, Santa needs to gather information about the behavior of children to plan the presents for next Christmas. He has a secret helper, who is sending him encrypted information. Your task is to decrypt it and create a list of the good children.
// You will receive an integer, which represents a key, and afterward some messages, which you must decode by subtracting the key from the value of each character. After the decryption, to be considered a valid match, a message should:
// -	Have a name, which starts after '@' and contains only letters from the Latin alphabet
// -	Have a behavior type - "G"(good) or "N"(naughty) and must be surrounded by "!" (exclamation mark).
// The order in the message should be: child’s name -> child’s behavior. They can be separated from the others by any character except: '@', '-', '!', ':' and '>'.
// You will be receiving messages until you are given the “end” command. Afterward, print the names of the children, who will receive a present, each on a new line.
// Input / Constraints
// •	The first line holds n – the number which you have to subtract from the characters – integer in the range [1…100];
// •	On the next lines, you will be receiving encrypted messages.
// Output
// Print the names of the children, each on a new line

function santaSecretHelper(data) {
  let subtractValue = +data.shift();
  for (let el of data) {
    if (el === "end") {
      break;
    }
    let message = el.split("");
    for (let i = 0; i < message.length; i++) {
      message[i] = String.fromCharCode(message[i].charCodeAt() - subtractValue);
    }
    message = message.join("");
    let person =
      /\@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*!(?<behavior>[G|N])!/gm.exec(message);
    if (person) {
      let behavior = person.groups.behavior;
      if (behavior === "G") {
        console.log(person.groups.name);
      }
    }
  }
}

santaSecretHelper([
  4,
  "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
  "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
  ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
  "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
  "DReh}e=<4lhzj1%K%",
  "end",
]);
