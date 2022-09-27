const line = require("fs").readFileSync("./input.txt", "utf8");
const inputData = line.trim().split("\n");

function find2nd(arr) {
  let score2nd = arr[1][1];
  let ans = [];
  arr.forEach((val) => {
    const [number, score] = val;
    if (score2nd === score) {
      ans.push(number);
    }
  });
  ans.sort((a, b) => a - b);
  console.log(...ans);
}

function scoreObj() {
  tmp.forEach((val) => {
    if (info[val]) {
      info[val] += 1;
    } else {
      info[val] = 1;
    }
  });
}

let info = {};
let tmp = [];

for (let i = 0; i < inputData.length; i++) {
  let arr = inputData[i].split(" ").map((val) => +val);

  if (arr.length === 2) {
    const [n, m] = arr;
    if (n === 0 && m === 0) {
      scoreObj();
      const sortArr = Object.entries(info).sort(([, a], [, b]) => b - a);
      find2nd(sortArr);
      process.exit();
    } else if (tmp.length) {
      scoreObj();
      const sortArr = Object.entries(info).sort(([, a], [, b]) => b - a);
      find2nd(sortArr);
      tmp = [];
      info = {};
    }
  } else {
    tmp.push(...arr);
  }
}
