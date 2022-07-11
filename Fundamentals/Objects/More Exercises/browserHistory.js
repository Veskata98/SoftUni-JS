// 4.	Browser History
// As input, you will receive two parameters: an object and a string array.
// The object will be in format: {Browser Name}:{Name of the browser}, Open tabs:[…],
// Recently Closed: […], Browser Logs: […]. Your task is to fill in the object based on the actions we will get in the array of strings.
// You can open any site in the world as many times as you like; if you do that add it to the open tabs.
// You can close only these tabs you have opened already! If the current action contains a valid opened site
//  you should remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
// Browser Logs will hold every single Valid action, which you did (Open and Close).
// There is a special case in which you can get an action that says: "Clear History and Cache". That means you should empty the whole object.
// In the end, print the object in the format:
// {Browser name}
// Open Tabs: {[…]} // Joined by comma and space
// Recently Closed: {[…]} // Joined by comma and space
// Browser Logs: {[…]} // Joined by comma and space

function browserHistory(obj, arr) {
  let myObj = obj;
  for (let el of arr) {
    if (el === "Clear History and Cache") {
      myObj["Open Tabs"] = [];
      myObj["Recently Closed"] = [];
      myObj["Browser Logs"] = [];
      continue;
    }
    let expression = el;
    el = el.split(" ");
    let action = el.shift();
    let website = el.join(" ");

    if (action === "Open") {
      myObj["Open Tabs"].push(website);
      myObj["Browser Logs"].push(expression);
    } else if (action === "Close") {
      if (myObj["Open Tabs"].includes(website)) {
        myObj["Open Tabs"] = myObj["Open Tabs"].filter(
          (tab) => tab !== website
        );
        myObj["Recently Closed"].push(website);
        myObj["Browser Logs"].push(expression);
      }
    }
  }

  let keys = Object.keys(myObj);
  for (const key of keys) {
    if (key === "Browser Name") {
      console.log(myObj[key]);
    } else {
      console.log(`${key}: ${myObj[key].join(", ")}`);
    }
  }
}

browserHistory(
  {
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": [
      "Open Gmail",
      "Close Gmail",
      "Open Dropbox",
      "Open YouTube",
      "Close Dropbox",
    ],
  },
  ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
