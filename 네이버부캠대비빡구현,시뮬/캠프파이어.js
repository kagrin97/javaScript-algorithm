let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const E = Number(input[1]);
const fireList = input.slice(2).map((i) => i.split(" ").map(Number));

// 사람 별 아는노래를 set로 저장 1 : new Set([1])
const obj = {};
for (let i = 1; i < N + 1; i++) obj[i] = new Set();

// 1번이 참여 할때마다 생겨나는 새로운 노래 이름
let newSongNumber = 1;

// 노래 부르기
fireList.forEach((list, index) => {
  const [number, ...li] = list;

  // 만약 1번이 참여한 캠프파이어라면 새로운 노래를 만들고 공유
  if (li.includes(1)) {
    li.forEach((l) => {
      obj[l].add(newSongNumber);
    });
    newSongNumber++;
  }
  // 1번이 참여하지 않는 캠프파이어라면 사람들끼리 알고있는 노래를 공유함
  else {
    let tmp = [];
    li.forEach((l) => {
      tmp.push(...obj[l]);
    });

    // tmp라는 배열에 모든 노래를 넣고 중복 제거후 공유
    li.forEach((l) => {
      obj[l] = new Set([...tmp]);
    });
  }
});

// 1번은 무조건 모든 노래를 알고 있기때문에 모든 노래 길이를 가짐
const allSongLen = obj[1].size;

const allSongLearners = [];
for (let key in obj) {
  // 해당 사람이 모든 노래를 알고있으면 allSongLearners에 추가
  if (obj[key].size === allSongLen) {
    allSongLearners.push(Number(key));
  }
}

allSongLearners.forEach((person) => console.log(person));

// 이 문제는 이해를 못해서 구글에서 문제해결 아이디어만 찾아봤다.
// 1. 어떠한 새로운 노래를 부를 수 있는것은 선영이뿐이다.
// 2. 선영이가 캠프파이어에 참가하지 않으면, 나머지 참석자들은 서로가 알고있는 선영이의 노래를 공유한다.
// 3. 선영이를 포함해, 선영이가 불렀던 모든 노래를 알고 있는 참석자들을 오름차순으로 출력한다.
