let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

// 맨 마지막 명령어가 문자열 제일 맨 앞에 와야하기 때문에 명령을 뒤에서부터 실행하기위해 뒤집어줌
const rotateInfo = input
  .slice(1)
  .map((i) => i.split(" "))
  .reverse();

// 초기 문자열 B???? 이런식으로 초기 문자를 생성함
let string = "?".repeat(N - 1);
string = rotateInfo[0][1] + string;

// 다음으로 이동할 알파벳의 위치를 구함
let nextIndex = Number(rotateInfo[0][0]) % N;

for (let i = 1; i < K; i++) {
  const [num, alpha] = rotateInfo[i];

  // 다음 위치가 알파벳이 존재하는데 넣을 알파벳과 기존 알파벳이 다를경우 행운 바퀴가 아니기 때문에 ! 출력후 종료
  if (string[nextIndex] !== "?" && string[nextIndex] !== alpha) {
    console.log("!");
    process.exit(0);
  }

  // 다음 위치에 알파벳을 넣어줌
  string =
    string.substring(0, nextIndex) + alpha + string.substring(nextIndex + 1);

  // 다음 위치를 계산함 (현재위치 + 다음 위치까지의 거리) % 전체 길이
  nextIndex = (nextIndex + Number(num)) % N;
}

// 바퀴에 같은 글자는 두 번 이상 등장하지 않는다는 지문 때문에 행운의 바퀴에 두 번 이상 등장하지 않게 해주는 테스트 케이스만 주는줄 알았는데 알고보니까 내가 예외처리를 해줘야했음
let obj = {};

for (let str of string) {
  // 행운의 바퀴에 같은 알파벳이 2개이상 존재할경우 !를 출력 후 종료
  if (str !== "?" && obj[str]) {
    console.log("!");
    process.exit(0);
  }

  obj[str] = true;
}

console.log(string);
