const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const t = +inputData[0];

for (let i = 1; i < t + 1; i++) {
  let [a, b] = inputData[i]
    .trim()
    .split(" ")
    .map((val) => parseInt(val, 2));

  const result = (a + b).toString(2).trim();

  console.log(result);
}
