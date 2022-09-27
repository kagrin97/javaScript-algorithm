const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = +line.trim();

let result = [];

for (let i = 1; i < inputData + 1; i++) {
  result.push(i);
}

while (result.length > 1) {
  let tmp = [];
  for (let i = 1; i < result.length; i += 2) {
    tmp.push(result[i]);
  }
  result = tmp;
}
console.log(...result);
