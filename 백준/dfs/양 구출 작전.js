function dfs(curIndex) {
  let sCount = 0;
  for (let i of tree[curIndex]) {
    sCount += dfs(i);
  }
  if (islandInfo[curIndex][0] === "W") {
    sCount -= islandInfo[curIndex][1];
    if (sCount < 0) {
      sCount = 0;
    }
  } else {
    sCount += islandInfo[curIndex][1];
  }
  return sCount;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
let board = input.slice(1).map((str) => str.trim().split(" "));

let islandInfo = [[], [0, 0]];
let tree = Array.from(Array(n + 1), () => new Array().fill([]));

board.forEach((val, idx) => {
  const [t, a, p] = val;
  islandInfo.push([t, +a]);
  tree[+p].push(idx + 2);
});

console.log(dfs(1));
