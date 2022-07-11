// 5.	Replace Repeating Chars
// Write a function that receives a single string and replace any sequence of the same letters with a single corresponding letter.

function replaceChars(data) {
  let result = [];
  data = data.split("");
  let lastEl = data[0];
  result.push(lastEl);
  for (const el of data) {
    if (lastEl !== el) {
      result.push(el);
      lastEl = el;
    }
  }
  console.log(result.join(""));
}

replaceChars("aaaaabbbbbcdddeeeedssaa");
