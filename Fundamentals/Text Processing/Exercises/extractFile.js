// 3.	Extract File
// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

function extractFile(path) {
  let file = path.split("\\").pop().split(".");
  let fileExt = file.pop();
  if (file.length > 1) {
    console.log(`File name: ${file.join(".")}`);
  } else {
    console.log(`File name: ${file.join("")}`);
  }
  console.log(`File extension: ${fileExt}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pp.pptx");
