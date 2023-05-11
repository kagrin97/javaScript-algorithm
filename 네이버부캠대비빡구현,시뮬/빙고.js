function bingCheck() {
  let bingCnt = 0;

  // 가로 세로 검사
  for (let i = 0; i < 5; i++) {
    let rowLine = 0;
    let colLine = 0;
    // 가로 검사
    for (let j = 0; j < 5; j++) {
      if (checkBoard[i][j] === 1) rowLine++;
    }
    // 세로 검사
    for (let j = 0; j < 5; j++) {
      if (checkBoard[j][i] === 1) colLine++;
    }

    // 연속 다섯개 이상 1이면 빙고 += 1
    if (rowLine === 5) bingCnt++;
    if (colLine === 5) bingCnt++;
  }

  // 왼쪽 대각선
  let leftLine = 0;
  for (let i = 0; i < 5; i++) {
    if (checkBoard[i][i] === 1) leftLine++;
  }
  if (leftLine === 5) bingCnt++;

  // 오른 대각선
  let rightLine = 0;
  for (let i = 0; i < 5; i++) {
    if (checkBoard[i][4 - i] === 1) rightLine++;
  }
  if (rightLine === 5) bingCnt++;

  // 최종 3빙고이상이면 true 리턴
  return bingCnt >= 3;
}

let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const myBingo = input.slice(0, 5).map((i) => i.split(" ").map(Number));
const sayNumberArr = input.slice(5).map((i) => i.split(" ").map(Number));

const obj = {};

// 내가 작성한 빙고판 숫자의 위치를 객체로 저장 '14': [ 3, 3 ]
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    obj[myBingo[i][j]] = [i, j];
  }
}

const checkBoard = Array.from(Array(5), () => Array(5).fill(0));
// 사회자가 몇 번째 차례에서 불렀는지
let orderNumber = 1;

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    const [x, y] = obj[sayNumberArr[i][j]];
    checkBoard[x][y] = 1;
    // 3빙고 이상이면 몇 번째 숫자를 불렀는지 출력후 종료
    if (bingCheck()) {
      console.log(orderNumber);
      process.exit(0);
    }
    orderNumber++;
  }
}
