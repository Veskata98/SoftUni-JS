// 3.	Deserialize String
// Write a function, which takes the output from the previous task and turns it back into a string.
// Until you receive the line “end”, you will receive several lines of input on the console, in the following format:
// •	"{letter}:{index1}/{index2}/{index…}/{indexN}"
// Your task is to take every letter and its index and form a string out of them.

// function deserializeString(array) {
//   let object = {};
//   for (const el of array) {
//     if (el === "end") {
//       break;
//     }
//     let [symbol, indexes] = el.split(":");
//     object[symbol] = [...indexes.split("/").map(Number)];
//   }

//   let result = [];

//   let count = Math.max(...Object.values(object).flat());
//   for (let i = 0; i <= count; i++) {
//     for (const key in object) {
//       if (object[key].includes(i)) {
//         result.push(key);
//         break;
//       }
//     }
//   }
//   console.log(result.join(""));
// }

// deserializeString([
//   "a:0/3/5/11",
//   "v:1/4",
//   "j:2",
//   "m:6/9/15",
//   "s:7/13",
//   "d:8/14",
//   "c:10",
//   "l:12",
//   "end",
// ]);
