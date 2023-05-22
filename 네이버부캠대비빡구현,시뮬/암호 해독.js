let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const key = input[0];
const crypto = input[1];

const keyLen = key.length;
const cryptoLen = crypto.length;

// 1. 암호문을 평문으로 복호화를 위해 중간 과정인 2차원 배열로 바꿈
const divide = [];
for (let k = 0; k < cryptoLen / keyLen; k++) {
  const tmp = [];
  for (let i = 0; i < cryptoLen; i += cryptoLen / keyLen) {
    tmp.push(crypto[k + i]);
  }
  divide.push(tmp);
}

// 2. 키를 문자열 순서대로 정렬한후 원래 위치도 같이 저장함
const arr = [];
for (let i = 0; i < keyLen; i++) {
  arr.push([key[i], i]);
}
arr.sort((a, b) => a[0].localeCompare(b[0]));

// 중간 2차원 배열에 원래 위치를 각각 문자열 값에 같이 저장
for (let i = 0; i < divide.length; i++) {
  for (let j = 0; j < divide[i].length; j++) {
    divide[i][j] = [divide[i][j], arr[j][1]];
  }
}

// 3. 원래 위치로 찾아가기 위해 숫자 오름차순 정렬
const result = divide.map((list) =>
  list.sort((a, b) => a[1] - b[1]).map((l) => l[0])
);

// 4. 2차원 배열 평탄화후 문자열로 합쳐줌
console.log(result.flat().join(""));
