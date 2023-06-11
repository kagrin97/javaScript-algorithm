const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const arr = input[2].split(" ").map(Number);

let tmp = [];

for (let i = 0; i < M; i++) {
  let falg = false;
  // 사진틀에 이미 추천 되어있으면
  for (let t = 0; t < tmp.length; t++) {
    if (tmp[t][0] === arr[i]) {
      tmp[t][1] += 1;
      falg = true;
      break;
    }
  }

  // 사진틀이 비어있으면
  if (!falg) {
    if (tmp.length < N) {
      tmp.push([arr[i], 1]);
      falg = true;
    }
  }

  // 비어있는 사진틀이 없을경우
  if (!falg) {
    const dumy = tmp.slice();
    const minRecommand = dumy.sort((a, b) => a[1] - b[1])[0][1];
    for (let t = 0; t < tmp.length; t++) {
      if (tmp[t][1] === minRecommand) {
        tmp = [...tmp.slice(0, t), ...tmp.slice(t + 1), [arr[i], 1]];
        break;
      }
    }
  }
}

tmp.sort((a, b) => a[0] - b[0]);

let result = "";
tmp.forEach((t) => {
  result += t[0] + " ";
});

console.log(result.trim());
