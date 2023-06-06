const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const poem = input[0].split("");
let spaceCnt = Number(input[1]);
const alphaCnt = input[2].split(" ").map(Number);

const alphabetObj = {};
let alphabet = "a";

// a ~ z 까지의 키값을 가진 객체를 생성
for (let i = 0; i < 26; i++) {
  alphabetObj[alphabet] = alphaCnt[i];
  alphabet = String.fromCharCode(alphabet.charCodeAt(0) + 1);
}

let preStr = poem[0].toLowerCase(); // 그전 문자
let result = poem[0].toUpperCase(); // 시의 제목 초기 값

// 시의 제목 초기 값을 키보드로 누른후 내구도 검사
alphabetObj[preStr] -= 1;
if (alphabetObj[preStr] < 0) {
  console.log(-1);
  process.exit(0);
}

for (let i = 1; i < poem.length; i++) {
  // 그전 문자와 현재 문자가 같으면 넘어감
  if (preStr === poem[i]) continue;

  // 그전 문자와 현재 문자가 다르면 키보드를 다시 눌러야함
  if (preStr !== " ") {
    // 그 전 문자가 스페이스바가 아니면 -1해줌
    alphabetObj[preStr] -= 1;
    if (alphabetObj[preStr] < 0) {
      console.log(-1);
      process.exit(0);
    }
  }
  // 그 전 문자가 스페이스이면 스페이스 카운트 -1
  else {
    spaceCnt -= 1;
    if (spaceCnt < 0) {
      console.log(-1);
      process.exit(0);
    }

    // 시의 제목을 대문자로 하나씩 삽입
    result += poem[i].toUpperCase();
  }

  // 그 전 문자를 소문자로 치환
  preStr = poem[i].toLowerCase();
}

console.log(result);
