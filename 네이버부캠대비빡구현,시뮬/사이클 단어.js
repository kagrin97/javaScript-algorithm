let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// a, b가 같은 사이클 단어일 경우 true를 리턴
function check(a, b) {
  const newA = a + a;
  return newA.includes(b);
}

const N = Number(input[0]);
const stringArr = input.slice(1);

const sameStringArr = [stringArr[0]]; // 중복되지 않는 사이클 단어가 들어갈 배열

for (let i = 1; i < N; i++) {
  let flag = false;
  for (const sameString of sameStringArr) {
    // 두 문자열 길이가 같고 같은 사이클 단어이면 for문 종료
    if (
      sameString.length === stringArr[i].length &&
      check(stringArr[i], sameString)
    ) {
      flag = true;
      break;
    }
  }

  // 배열을 모두 순회해도 같은 사이클 단어를 찾을수 없으면 새로운 사이클 단어 삽입
  if (!flag) {
    sameStringArr.push(stringArr[i]);
  }
}

console.log(sameStringArr.length);
