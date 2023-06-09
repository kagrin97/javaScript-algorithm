const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const string = input[0];

// 마지막 f를 기준으로 문자열들을 분리함
const strArr = [];
let strTmp = "";
for (let str of string) {
  if (strTmp[strTmp.length - 1] === "f" && str !== "f") {
    strArr.push(strTmp);
    strTmp = str;
  } else {
    strTmp += str;
  }
}
if (strTmp) strArr.push(strTmp);

// word에 해당하는 문자를 앞에서 부터 삭제함
function deleteWord(word, string) {
  let wordCnt = 0;
  let tmpString = string.slice();
  for (let str of string) {
    if (str === word) {
      tmpString = tmpString.slice(1);
      wordCnt++;
    } else {
      break;
    }
  }

  return [tmpString, wordCnt];
}

// 2. 문자열 검사
for (let i = 0; i < strArr.length; i++) {
  let curStr = strArr[i];

  // 앞에서 부터 w 제거
  [curStr, wCnt] = deleteWord("w", curStr);

  // 앞에서 부터 o 제거
  [curStr, oCnt] = deleteWord("o", curStr);

  // 앞에서 부터 l 제거
  [curStr, lCnt] = deleteWord("l", curStr);

  // 앞에서 부터 f 제거
  [curStr, fCnt] = deleteWord("f", curStr);

  // 제거된 갯수가 모두 같은지 확인하기 위한 중복제거
  const strSet = new Set([wCnt, oCnt, lCnt, fCnt]);

  // 제거된 갯수가 모두 같을 경우 strSet에 하나의 숫자만 들어있음
  if (strSet.size !== 1) {
    console.log(0);
    process.exit(0);
  }
}

console.log(1);
