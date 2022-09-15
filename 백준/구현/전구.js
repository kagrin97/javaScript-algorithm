const fs = require("fs");
const inputData = fs.readFileSync("./input.txt").toString().split("\n");

let bulb = inputData[1].split(" ").map((val) => +val);

for (let i = 2; i < inputData.length; i++) {
  const [order, a, b] = inputData[i].split(" ").map((val) => +val);
  if (order === 1) {
    bulb[a - 1] = b;
  } else if (order === 2) {
    for (let i = a - 1; i < b; i++) {
      if (bulb[i] === 0) {
        bulb[i] = 1;
      } else {
        bulb[i] = 0;
      }
    }
  } else if (order === 3) {
    for (let i = a - 1; i < b; i++) {
      bulb[i] = 0;
    }
  } else if (order === 4) {
    for (let i = a - 1; i < b; i++) {
      bulb[i] = 1;
    }
  }
}

console.log(...bulb);
