let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const byteList = input.slice(1).map(Number);
// 중복 숫자 제거
const byteSet = new Set([...byteList]);

let maxLen = 1;

// 숫자를 하나씩 순회하면서 해당 숫자만 무시하기
for (let byte of byteSet) {
  let stack = [];
  let curLen = 1;
  for (let i = 0; i < N; i++) {
    // 무시해야할 숫자라면 무시
    if (byteList[i] === byte) {
      continue;
    }

    // 맨 첫번째 숫자라면 그냥 넣기
    if (!stack.length) {
      stack.push(byteList[i]);
      continue;
    }

    // 연속된 숫자라면 현재 연속된 숫자 길이를 늘려줌
    if (stack[stack.length - 1] === byteList[i]) {
      stack.push(byteList[i]);
      curLen++;
    }
    // 연속된 숫자가 끊긴다면 최대 길이를 갱신
    else {
      stack.push(byteList[i]);
      maxLen = Math.max(maxLen, curLen);
      curLen = 1;
    }
  }

  // 맨 마지막값까지 연속된 숫자라면 위의 else문이 작동을 안하기 때문에 해줌
  maxLen = Math.max(maxLen, curLen);
}

console.log(maxLen);
