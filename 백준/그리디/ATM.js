const line = require("fs").readFileSync("./input.txt", "utf8");
let [n, gestList] = line.trim().split("\n");

gestList = gestList.split(" ").map(Number);

gestList.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i + 1; j++) {
    result += gestList[j];
  }
}
console.log(result);
