const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const n = +inputData[0];

let calendar = Array(366).fill(0);

for (let i = 1; i < n + 1; i++) {
  const [x, y] = inputData[i].split(" ").map((val) => +val);
  for (let i = x - 1; i < y; i++) {
    calendar[i] += 1;
  }
}

let tmp = [];
let result = 0;

calendar.forEach((val) => {
  if (tmp.length && val === 0) {
    result += tmp.length * Math.max(...tmp);
    tmp = [];
  } else if (val != 0) {
    tmp.push(val);
  }
});
result += tmp.length;
console.log(result);
