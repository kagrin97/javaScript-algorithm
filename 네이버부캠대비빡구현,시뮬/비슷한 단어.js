const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const mainString = input[1];
const remainStrings = input.slice(2);

let cnt = 0;
for (let i = 0; i < N - 1; i++) {
  let curString = remainStrings[i];

  // 기준 단어와 평가 단어의 길이의 차이가 2이상이면 뭘해도 비슷한 단어가 될수없다
  const diff = Math.abs(curString.length - mainString.length);
  if (diff > 1) {
    continue;
  }

  // 기준 단어를 순회하면서 평가 단어와 같은 문자는 없애준다
  for (let str of mainString) {
    curString = curString.replace(str, "");
  }

  // 기준 단어와 평가 단어의 일치하는 문자들은 다 삭제하고 남은 기준단어의 문자 길이를 알아낸다.
  const remainMainStringLen = Math.abs(
    mainString.length - (remainStrings[i].length - curString.length)
  );

  // 평가 단어의 길이가 1이하에 기준 단어의 길이가 1이하이면 비슷한 단어로 만들수가 있다.
  if (curString.length < 2 && remainMainStringLen < 2) {
    cnt++;
  }
}
console.log(cnt);

// 비슷한 단어를 만들기 위해서는 기준 단어와 평가 단어의 길이가 2이상 차이나면 더하거나, 뺴거나, 글자하나 변경해도 비슷한단어가 될수없고 또한 각각의 단어들에서 중복되는 부분을 지웠을때 평가단어의 갯수는 1이하이며 기준단어의 갯수가 1이하일때 비슷한 단어로 만들수 있다.
