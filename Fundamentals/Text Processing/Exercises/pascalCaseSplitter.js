// 6.	Pascal-Case Splitter
// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function wordSplitter(data) {
  let result = [];
  for (const el of data) {
    if (el === el.toUpperCase()) {
      result.push(",", " ", el);
      continue;
    }
    result.push(el);
  }
  console.log(result.slice(2).join(""));
}

wordSplitter("SplitMeIfYouCanHaHaYouCantOrYouCan");
