const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 입력 받기
const [H, W, X, Y] = input[0].split(" ").map(Number);

// 배열 초기화
const A = [];
const B = [];

// 배열 A와 B에 값 할당
for (let i = 0; i < H + X; i++) {
  const row = input[i + 1].split(" ").map(Number);
  A.push(new Array(W).fill(0));
  B.push(new Array(W + Y).fill(0));

  for (let j = 0; j < W + Y; j++) {
    if ((i < X && j < W) || (i < H && j < Y)) {
      A[i][j] = row[j];
      B[i][j] = A[i][j];
    } else {
      B[i][j] = row[j];
    }
  }
}

// 배열 A 업데이트
for (let i = X; i < H; i++) {
  for (let j = Y; j < W; j++) {
    A[i][j] = B[i][j] - A[i - X][j - Y];
  }
}

// 결과 출력
for (let i = 0; i < H; i++) {
  let output = "";
  for (let j = 0; j < W; j++) {
    output += A[i][j] + " ";
  }
  console.log(output.trim());
}
