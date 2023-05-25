const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [R, C, T] = input[0].split(" ").map(Number);
let board = input.slice(1).map((i) => i.split(" ").map(Number));

// 공기 청정기의 위치
const airCleanerIndex = [];
for (let i = 0; i < R; i++) {
  if (board[i][0] === -1) {
    airCleanerIndex.push(i);
  }
}

// 이동
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// 먼지를 확산시킴
function dustSpread(dustList) {
  const tmpBoard = Array.from(Array(R), () => Array(C).fill(0));
  for (let i = 0; i < dustList.length; i++) {
    const [x, y] = dustList[i];

    let spreadCnt = 0;
    let spreadIndex = [];
    for (let k = 0; k < 4; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];

      if (0 > nx || 0 > ny || R <= nx || C <= ny) continue;

      // 공기청정기 만나면 넘기기
      if (board[nx][ny] === -1) continue;

      spreadIndex.push([nx, ny]);
      spreadCnt++;
    }

    // 실제로 확산시킴 즉 값들을 바꿔줌
    if (spreadCnt) {
      const dustDivision = Math.floor(board[x][y] / 5);
      const dustRemain = board[x][y] - dustDivision * spreadCnt;
      tmpBoard[x][y] += dustRemain; // 확산하고 남은 먼지

      spreadIndex.forEach((i) => {
        const [r, c] = i;
        tmpBoard[r][c] += dustDivision; // 확산된 먼지
      });
    }
  }

  // 공기청정기 다시 재 표기해줌
  airCleanerIndex.forEach((m) => {
    const x = m;
    tmpBoard[x][0] = -1;
  });

  return tmpBoard;
}

// 먼지를 체크함 먼지의위치와, 먼지의 총량을 계산
function dustCheck(order) {
  const tmp = [];
  let dustValue = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] !== 0 && board[i][j] !== -1) {
        tmp.push([i, j]);
        dustValue += board[i][j];
      }
    }
  }

  // 맨 마지막에 먼지의 총 양을 구할때 사용되는 트리거
  if (order === "Call me answer!!") {
    return dustValue;
  }
  return tmp;
}

// 현재 이동방향
let curD = "R";

const obj = {
  R: [0, 1],
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
};

// 공기청정기로 먼지를 밀어냄
function move(machine, orderType, visited) {
  const tmpBoard = Array.from(Array(R), () => Array(C).fill(0));
  let x = machine;
  let y = 1; // 1로 함으로써 공기청정기는 제외시킴

  while (true) {
    const nx = x + obj[curD][0];
    const ny = y + obj[curD][1];

    // 범위를 벗어나면 방향을 바꿔줌
    if (0 > nx || 0 > ny || R <= nx || C <= ny) {
      // 공기청정기 기준 상류를 밀어낼떄
      if (orderType === "up") {
        if (curD === "R") curD = "U";
        else if (curD === "U") curD = "L";
        else if (curD === "L") curD = "D";
      }
      // 공기청정기 기준 하류를 밀어낼떄
      else {
        if (curD === "R") curD = "D";
        else if (curD === "D") curD = "L";
        else if (curD === "L") curD = "U";
      }

      continue;
    }

    // 실제로 밀어낸 공기를 tmpBoard에 삽입
    if (board[nx][ny] !== -1) {
      tmpBoard[nx][ny] = board[x][y];
    } else {
      break;
    }

    x = nx;
    y = ny;
    visited[x][y] = true; // 공기청정기로 먼지를 밀어낸 공간을 체크
  }

  curD = "R"; // 방향 초기화
  return tmpBoard;
}

function cleanAir() {
  // 공기청정기로 먼지를 밀어낸 공간
  const visited = Array.from(Array(R), () => Array(C).fill(false));

  const up = move(airCleanerIndex[0], "up", visited); // 상류 먼지 밀기
  const down = move(airCleanerIndex[1], "down", visited); // 하류 먼지 밀기

  const tmpBoard = Array.from(Array(R), () => Array(C).fill(0));

  // 상류 + 하류 공기를 합쳐줌
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (up[i][j] !== 0) {
        tmpBoard[i][j] = up[i][j];
      } else if (down[i][j] !== 0) {
        tmpBoard[i][j] = down[i][j];
      }
    }
  }

  // 공기 청정기 재 표기
  tmpBoard[airCleanerIndex[0]][0] = -1;
  tmpBoard[airCleanerIndex[1]][0] = -1;

  // 공기청정기로 먼지를 밀어낸 공간 + 공기청정기 위치
  visited[airCleanerIndex[0]][0] = true;
  visited[airCleanerIndex[1]][0] = true;

  // 공기청정기로 먼지를 밀어낸 공간 + 공기청정기 바로 다음 오른쪽 위치
  visited[airCleanerIndex[0]][1] = true;
  visited[airCleanerIndex[1]][1] = true;

  // 공기청정기로 공기가 흐르지 않은 곳은 공기가 이동하지 않기 때문에 다시 재표기
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (visited[i][j] === false) {
        tmpBoard[i][j] = board[i][j];
      }
    }
  }

  return tmpBoard;
}

// T(시간) 만큼 반복해줌
for (let i = 0; i < T; i++) {
  const dustList = dustCheck(); // 먼지의 위치 계산
  board = dustSpread(dustList); // 먼지 확산
  board = cleanAir(); // 공기청정기로 공기 정화
}
console.log(dustCheck("Call me answer!!")); // 먼지의 양 계산
