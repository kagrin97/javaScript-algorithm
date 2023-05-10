let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input);

if (N === 1) {
  console.log(N);
  process.exit(0);
}

// 1 ~ N 까지의 카드 배열을 만듦
const cardArr = Array.from(Array(N), (_, i) => i + 1);

// 버린 카드
const dumpCardArr = [];

while (cardArr.length > 2) {
  const one = cardArr.shift();
  const two = cardArr.shift();

  // 맨 앞장을 버린 카드 배열에 삽입
  dumpCardArr.push(one);
  // 2번쨰 장 카드를 뒤로 삽입
  cardArr.push(two);
}

console.log(...dumpCardArr, ...cardArr);
