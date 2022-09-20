const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

const [n, m] = inputData[0].split(" ").map((val) => +val);

let trainArray = Array.from(Array(n), () => new Array(20).fill(0));

for (let i = 1; i < m + 1; i++) {
  const order = inputData[i].split(" ").map((val) => +val);
  if (order[0] === 1) {
    trainArray[order[1] - 1][order[2] - 1] = 1;
  } else if (order[0] === 2) {
    trainArray[order[1] - 1][order[2] - 1] = 0;
  } else if (order[0] === 3) {
    trainArray[order[1] - 1].pop();
    trainArray[order[1] - 1].unshift(0);
  } else if (order[0] === 4) {
    trainArray[order[1] - 1].shift();
    trainArray[order[1] - 1].push(0);
  }
}

const passTrain = new Set();

trainArray.forEach((val) => {
  passTrain.add(JSON.stringify(val));
});

console.log(passTrain.size);
