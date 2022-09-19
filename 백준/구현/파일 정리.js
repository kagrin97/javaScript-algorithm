const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const n = +inputData[0];

const dict = {};

for (let i = 1; i < n + 1; i++) {
  const [_, extension] = inputData[i].split(".");
  const ex = extension.trim();
  if (ex in dict) {
    dict[ex] += 1;
  } else {
    dict[ex] = 1;
  }
}

const result = {};
Object.keys(dict)
  .sort()
  .forEach((key) => {
    result[key] = dict[key];
  });

for (let i in result) {
  console.log(i, result[i]);
}
