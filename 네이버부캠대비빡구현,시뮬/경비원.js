const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [W, H] = input[0].split(" ").map(Number);
const storeNum = Number(input[1]);
const storeList = input
  .slice(2, 2 + storeNum)
  .map((i) => i.split(" ").map(Number));
const meIndex = input[input.length - 1].split(" ").map(Number);
const [dongD, dongI] = meIndex;

let result = 0;

const maxDistance = W * 2 + H * 2; // 전체 둘레

for (let i = 0; i < storeNum; i++) {
  const [storeD, storeI] = storeList[i];
  // 동근이 북쪽
  if (dongD === 1) {
    // 북
    if (storeD === 1) {
      result += Math.abs(dongI - storeI);
      continue;
    }
    // 남
    if (storeD === 2) {
      const one = H + storeI + dongI; // 한쪽 방향 거리
      const two = maxDistance - one; // 전체 둘레 - 한쪽 방형 거리 = 다른 방향 거리
      result += Math.min(one, two);
      continue;
    }
    // 서
    if (storeD === 3) {
      const one = storeI + dongI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 동
    if (storeD === 4) {
      const one = W + H + dongI + (H - storeI);
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
  }

  // 동근이 남쪽
  if (dongD === 2) {
    // 북
    if (storeD === 1) {
      const one = H + storeI + dongI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 남
    if (storeD === 2) {
      result += Math.abs(dongI - storeI);
      continue;
    }
    // 서
    if (storeD === 3) {
      const one = H - storeI + dongI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 동
    if (storeD === 4) {
      const one = W + H + dongI + storeI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
  }

  // 동근이 서쪽
  if (dongD === 3) {
    // 북
    if (storeD === 1) {
      const one = dongI + storeI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 남
    if (storeD === 2) {
      const one = H - dongI + storeI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 서
    if (storeD === 3) {
      result += Math.abs(dongI - storeI);
      continue;
    }
    // 동
    if (storeD === 4) {
      const one = W + dongI + storeI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
  }

  // 동근이 동쪽
  if (dongD === 4) {
    // 북
    if (storeD === 1) {
      const one = W - storeI + dongI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 남
    if (storeD === 2) {
      const one = H - dongI + (W - storeI);
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 서
    if (storeD === 3) {
      const one = W + storeI + dongI;
      const two = maxDistance - one;
      result += Math.min(one, two);
      continue;
    }
    // 동
    if (storeD === 4) {
      result += Math.abs(dongI - storeI);
      continue;
    }
  }
}

console.log(result);
