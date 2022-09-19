const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("");

const length = inputData.length;

const visited = new Array(length).fill(0);
let totalDuck = 0;

if (length % 5 != 0) {
  console.log(-1);
  process.exit();
}

while (true) {
  let stack = [];
  let duck = 0;

  for (let i = 0; i < length; i++) {
    if (inputData[i] === "q" && !stack.length && visited[i] === 0) {
      stack.push("q");
      visited[i] = 1;
    } else if (
      inputData[i] === "u" &&
      stack.at(-1) === "q" &&
      visited[i] === 0
    ) {
      stack.pop();
      stack.push("u");
      visited[i] = 1;
    } else if (
      inputData[i] === "a" &&
      stack.at(-1) === "u" &&
      visited[i] === 0
    ) {
      stack.pop();
      stack.push("a");
      visited[i] = 1;
    } else if (
      inputData[i] === "c" &&
      stack.at(-1) === "a" &&
      visited[i] === 0
    ) {
      stack.pop();
      stack.push("c");
      visited[i] = 1;
    } else if (
      inputData[i] === "k" &&
      stack.at(-1) === "c" &&
      visited[i] === 0
    ) {
      stack.pop();
      visited[i] = 1;
      duck = 1;
    }
  }

  if (duck) {
    totalDuck += duck;
  } else {
    console.log(-1);
    process.exit();
  }

  if (!visited.includes(0)) {
    console.log(totalDuck);
    process.exit();
  }
}
