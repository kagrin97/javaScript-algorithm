const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let [R, C, K] = input[0].split(" ").map(Number);
let board = input.slice(1).map((i) => i.split(" ").map(Number));

// R,C의 최소값이 1이기 때문에 계산 편하게 하기 위해 -1
R = R - 1;
C = C - 1;

// R연산 , C연산 판별 함수
function RorC(arr) {
  const rowLen = arr.length;
  const colLen = arr[0].length;

  if (rowLen >= colLen) return "R";
  return "C";
}

// R연산 수행
function handlerR(arr) {
  const rowLen = arr.length;
  const tmp = [];

  let maxRowLen = 0;
  for (let i = 0; i < rowLen; i++) {
    const row = arr[i];
    const abcMap = new Map();

    // map으로 해당 숫자의 빈도수를 저장함 { 1 => 2, 2 => 1 }
    for (let r = 0; r < row.length; r++) {
      if (row[r] === 0) continue;

      if (abcMap.has(row[r])) {
        abcMap.set(row[r], abcMap.get(row[r]) + 1);
      } else {
        abcMap.set(row[r], 1);
      }
    }

    // map을 value기준으로 정렬후 key기준으로 오름차순을 또 정렬 후 평탄화
    const sortedArray = Array.from(abcMap)
      .sort((a, b) => a[1] - b[1] || a[0] - b[0])
      .flat();

    // 가장 긴 배열의 길이를 기억
    maxRowLen = Math.max(maxRowLen, sortedArray.length);
    // 새로운 배열에 넣어줌
    tmp.push(sortedArray);
  }

  // 가장 긴 배열의 길이에 맞춰서 나머지 배열뒤에 0을 넣어줌
  for (let t = 0; t < tmp.length; t++) {
    while (tmp[t].length < maxRowLen) {
      tmp[t].push(0);
    }
  }
  return tmp;
}

// 배열을 돌려줌
function rotateArr(arr) {
  const rowLen = arr.length;
  const colLen = arr[0].length;
  const newBoard = [];

  for (let i = 0; i < colLen; i++) {
    const tmp = [];
    for (let j = 0; j < rowLen; j++) {
      tmp.push(arr[j][i]);
    }
    newBoard.push(tmp);
  }
  return newBoard;
}

// C연산 수행
function handlerC(arr) {
  arr = rotateArr(arr); // 연산하기 쉽게 배열을 돌려줌
  arr = handlerR(arr); // 실제 연산
  arr = rotateArr(arr); // 다시 돌려서 원래대로 만들어줌

  return arr;
}

// K값이 R,C에 존재하는지 여부
function Kcheck(arr) {
  // R,C값이 초기 배열의 크기보다 클수가 있음 따라서 배열의 크기보다 크면 검사를 안함(런타입에러 방지)
  const rowLen = arr.length;
  const colLen = arr[0].length;
  if (rowLen <= R || colLen <= C) return false;

  if (arr[R][C] === K) return true;
  return false;
}

// 배열 최대 100 x 100 크기로
function cutBoard(arr) {
  return arr.slice(0, 100).map((i) => i.slice(0, 100));
}

// 최대 100번 연산을 함
// t <= 100 한 이유는 연산을 마지막에하고 다음 t에 검사를 하기때문에 100번째 연산도 검사해야함
for (let t = 0; t <= 100; t++) {
  board = cutBoard(board); // 배열을 최대 100 x 100으로 맞춰줌
  const isK = Kcheck(board); // 배열의 R,C값에 K값이 있는지 확인

  // K값이 있으면 출력후 종료
  if (isK) {
    console.log(t);
    process.exit(0);
  }

  // R, C 어떤 연산을 해야하는지 검사
  const isRorC = RorC(board);

  // 실제 연산
  if (isRorC === "R") {
    board = handlerR(board);
  } else {
    board = handlerC(board);
  }
}
console.log(-1);
