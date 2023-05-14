let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0]);
let name = input[1];
let ganPan = input.slice(2);

// check 함수: 문자열 내에서 패턴을 찾아 일치하는지 확인하는 함수
function check(string) {
  const strLen = string.length;
  for (let startIndex = 0; startIndex < strLen; startIndex++) {
    // 간판의 첫 번째 글자를 찾으면
    if (string[startIndex] === name[0]) {
      for (let endIndex = startIndex; endIndex < strLen; endIndex++) {
        // 간판의 마지막 글자를 찾으면
        if (string[endIndex] === name[name.length - 1]) {
          // 해당 간판의 글자끼리의 간격을 알수있음
          const stringGap = Math.floor(
            (endIndex - startIndex) / (name.length - 1)
          );
          let cnt = 0;
          while (cnt < name.length) {
            // 글자의 간격만큼 다음 글자가 일치하면 cnt++
            if (string[startIndex + stringGap * cnt] === name[cnt]) {
              cnt++;
            } else {
              break;
            }
          }
          if (cnt === name.length) {
            return 1; // 패턴이 일치하면 1 반환
          }
        }
      }
    }
  }
  return 0; // 패턴이 일치하지 않으면 0 반환
}

let cnt = 0;
ganPan.forEach((kanban) => {
  cnt += check(kanban);
});
console.log(cnt); // 결과 출력

// 문자열을 돌면서 첫번째 글자와 일치하는 문자를 발견하면 첫번째 글자 위치부터 끝까지 검사를한다.
// 검사하면서 마지막 글자를 발견하면 첫번째와 마지막 위치를 이용해서 글자간의 간격을 구한다.
// 그후 while문으로 첫번째 문자부터 다음 간격 문자를 탐색해 모든 문자를 찾으면 return 1한다
// 만약 다음 간격이 틀리면 멈춘다.
