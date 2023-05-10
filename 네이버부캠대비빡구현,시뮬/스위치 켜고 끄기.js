let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const switchArr = input[1].split(" ").map(Number);
const T = Number(input[2]);
const orderArr = [];

for (let i = 3; i < 3 + T; i++) {
  orderArr.push(input[i].split(" ").map(Number));
}

orderArr.forEach((order, index) => {
  const [sex, orderIndex] = order;

  // 남자일 경우
  if (sex === 1) {
    for (let i = orderIndex - 1; i < N; i += orderIndex) {
      if (switchArr[i] === 0) switchArr[i] = 1;
      else switchArr[i] = 0;
    }
  }
  // 여자일 경우
  if (sex === 2) {
    let left = orderIndex - 1;
    let right = orderIndex - 1;

    // 인덱스 범위를 벗어나지 않도록 while문 조건 수정
    while (left >= 0 && right < N && switchArr[left] === switchArr[right]) {
      switchArr[left] = 1 - switchArr[left];
      switchArr[right] = 1 - switchArr[right];
      left--;
      right++;
    }

    switchArr[orderIndex - 1] = 1 - switchArr[orderIndex - 1];
  }
});

let result = "";
for (let i = 0; i < N; i++) {
  result += `${switchArr[i]} `;
  // 한 줄에 20개씩 출력
  if ((i + 1) % 20 === 0) {
    result += "\n";
  }
}

console.log(result);
