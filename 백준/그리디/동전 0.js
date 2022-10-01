const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

const [n, k] = inputData[0].split(" ").map(Number);

let coinCnt = 0;
let curCoin = 0;

const coinList = [];
for (let i = 1; i < n + 1; i++) {
  coinList.push(+inputData[i]);
}

while (coinList.length) {
  const coinPrice = coinList.pop();

  while (curCoin + coinPrice <= k) {
    curCoin += coinPrice;
    coinCnt++;
  }
}
console.log(coinCnt);
