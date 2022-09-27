const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [n, k] = inputData[0].split(" ").map((val) => +val);

let roadInfo = inputData[1].split(" ").map((val, idx) => [+val, idx + 1]);
let copy = roadInfo.slice().reverse();

let totalRoadInfo = roadInfo.concat(copy);

let curDistance = 0;

for (let i = 0; i < totalRoadInfo.length; i++) {
  curDistance += totalRoadInfo[i][0];

  if (k < curDistance) {
    console.log(totalRoadInfo[i][1]);
    process.exit();
  }
}
