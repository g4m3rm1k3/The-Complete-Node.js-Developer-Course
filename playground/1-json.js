const fs = require("fs");
const { cachedDataVersionTag } = require("v8");
// const book = {
// 	title: "Ego is the enemy",
// 	author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Mike";
data.age = 41;
const dataString = JSON.stringify({ ...data, name: "Allison", age: 40 });
fs.writeFileSync("1-json.json", dataString);
