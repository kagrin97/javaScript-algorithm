const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

const n = +inputData[0];

const info = {};
let count = 0;

for (let i = 1; i < n + 1; i++) {
  const [cow, where] = inputData[i].split(" ").map((val) => +val);
  if (cow in info && info[cow] != where) {
    info[cow] = where;
    count++;
  } else {
    info[cow] = where;
  }
}
console.log(count);
