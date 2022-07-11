// 2.	Serialize String
// You have been tasked to serialize a string. The serialization is done specially, in which a character from that string is saved with the indexes at which it is found.
// The input will consist array, containing a single string, which may consist of ANY ASCII characters. Your task is to serialize the string in the following way:
// {char}:{index1}/{index2}/{index3}
// The char will be the character, and the indexes will be the indexes it is found at in the string.

// function serializeString(string) {
//   string = string[0];
//   let result = {};

//   for (let i = 0; i < string.length; i++) {
//     if (!result.hasOwnProperty(string[i])) {
//       result[string[i]] = [i];
//     } else {
//       result[string[i]].push(i);
//     }
//   }
//   for (const key in result) {
//     console.log(`${key}:${result[key].join("/")}`);
//   }
// }

// serializeString(["avjavamsdmcalsdm"]);
