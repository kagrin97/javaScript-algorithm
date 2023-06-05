const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, P] = input[0].split(" ").map(Number);
const [W, L, G] = input[1].split(" ").map(Number);
const knowList = input.slice(2, 2 + P).map((i) => i.split(" "));
const playList = input.slice(2 + P);

const obj = {};
let myScore = 0;

for (let i = 0; i < P; i++) {
  const [name, isWin] = knowList[i];
  obj[name] = isWin;
}

for (let i = 0; i < N; i++) {
  if (obj[playList[i]] === "W") {
    myScore += W;
  } else if (obj[playList[i]] === "L") {
    myScore -= L;
  } else {
    myScore -= L;
  }

  if (myScore < 0) myScore = 0;

  if (myScore >= G) {
    console.log("I AM NOT IRONMAN!!");
    process.exit(0);
  }
}

console.log("I AM IRONMAN!!");
