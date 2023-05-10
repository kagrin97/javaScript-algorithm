let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

// 계산하기 편하게 학생번호를 거꾸로 뒤집어주었음
const numberArr = input.slice(1).map((i) => i.split("").reverse().join(""));

// 문자열을 1자리부터 문자열 최대길이 까지 자르면서 최소로 자르는 값을 구함
for (let n = 1; n < numberArr[0].length + 1; n++) {
  const nameSet = new Set();

  // 문자열을 자르고 중복방지를 위해 set에 저장
  for (let i = 0; i < N; i++) {
    const cutNumber = numberArr[i].substring(0, n);
    nameSet.add(cutNumber);
  }

  // 만약 중복된적이 없으면 n을 출력
  if (nameSet.size === N) {
    console.log(n);
    break;
  }
}
