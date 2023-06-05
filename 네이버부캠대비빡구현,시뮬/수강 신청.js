const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [K, L] = input[0].split(" ");
let numList = input.slice(1);

let map = new Map();
for (let i = 0; i < L; i++) {
  if (!map.has(numList[i])) {
    //동일한 값이 없을때
    map.set(numList[i], 1); //value 값 1은 신경안써도됨
  } else {
    //동일한 값이 있을때
    map.delete(numList[i]); //원래있던 위치의 값 지우고
    map.set(numList[i], 1); //다시 생성
  }
}

let count = 0;
let answer = [];
map.forEach((value, key) => {
  if (count < K) {
    answer.push(key);
    count++;
  }
});

console.log(answer.join("\n"));
