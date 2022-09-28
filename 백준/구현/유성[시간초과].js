const line = require("fs").readFileSync("./input.txt", "utf8");
let inputData = line.trim().split("\n");

const [r, s] = inputData[0].split(" ").map((val) => +val);

inputData = inputData.slice(1);

let meteorIndex = [];
let minDistance = r + 1;

let photo = Array.from(Array(r), () => Array(s).fill("."));

for (let i = 0; i < r; i++) {
  for (let j = 0; j < s; j++) {
    if (inputData[i][j] === "X") {
      meteorIndex.push([i, j]);
    } else if (inputData[i][j] === "#") {
      photo[i][j] = "#";
    }
  }
}

meteorIndex.forEach((val) => {
  const [x, y] = val;
  for (let i = 1; i < r - x; i++) {
    if (inputData[x + i][y] === "#") {
      if (minDistance > x + i - x - 1) {
        minDistance = x + i - x - 1;
        break;
      }
    }
  }
});

meteorIndex.forEach((val) => {
  const [x, y] = val;
  photo[x + minDistance][y] = "X";
});

let ans = "";

photo.forEach((val) => {
  ans += val.join("") + "\n";
});
console.log(ans);
