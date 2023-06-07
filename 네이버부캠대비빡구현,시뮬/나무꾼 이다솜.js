const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C, W] = input[0].split(" ").map(Number);
const trees = input.slice(1).map(Number);
let maxMoney = 0;

// 반복문을 통해 나무를 1부터 제일 긴 나무의 길이만큼 잘라본다.
for (let i = 1; i <= Math.max(...trees); i++) {
  let curMoney = 0;

  // 반복문을 통해 나무를 확인
  for (const tree of trees) {
    // cutTreeCnt : 자른 나무 수
    // remainTree : 남은 나무의 길이
    const cutTreeCnt = Math.floor(tree / i);
    const remainTree = tree % i;

    // 나무가 남았다면 자른 나무 수만큼 비용을 낸다.
    // 나무가 남지 않았다면 자른 나무 수 - 1만큼 비용을 낸다.
    const cutPay = remainTree ? cutTreeCnt * C : (cutTreeCnt - 1) * C;

    // 자른 나무를 판다.
    const treePay = cutTreeCnt * W * i - cutPay;

    // 자른 나무를 팔 때 이익이 안난다면 continue
    if (treePay < 0) continue;

    // money에 이익을 더한다.
    curMoney += treePay;
  }

  // 이익의 총합이 가장 큰 결과를 찾는다.
  if (curMoney >= maxMoney) {
    maxMoney = curMoney;
  }
}

console.log(maxMoney);
