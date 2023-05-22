const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if (line === "*") {
    rl.close();
  } else {
    if (solution(line)) {
      console.log(`${line} is surprising.`);
    } else {
      console.log(`${line} is NOT surprising.`);
    }
  }
});

function solution(line) {
  const string = line;
  const stringLen = line.length;

  // 문자열 D-쌍 검사
  for (let d = 1; d < stringLen; d++) {
    const checkSet = new Set();
    let checkCnt = 0;
    for (let i = 0; i < stringLen; i++) {
      const left = string[i];
      const right = string[i + d];
      // 왼쪽문자, 오른쪽 문자가 존재할때만 중복검사
      if (left && right) {
        checkSet.add(left + right);
        checkCnt++;
      }
    }
    // 중복된 문자가 존재할경우 놀라운 문자열이 아니기 때문에 false return
    if (checkSet.size !== checkCnt) {
      return false;
    }
  }

  return true;
}
