const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const stringArr = input.slice(1);

const result = [];
const A = []; // 단축키 중복 확인용

for (let i = 0; i < N; i++) {
  let curStrings = stringArr[i].split(" ");

  let firstFlag = [false, 0]; // 문장 첫 글자 단축키 확인 플래그
  for (let strIndex = 0; strIndex < curStrings.length; strIndex++) {
    const alpha = curStrings[strIndex][0];

    // 단축키 지정이 안된 문자일경우
    if (!A.includes(alpha.toLowerCase())) {
      A.push(alpha.toLowerCase());
      firstFlag = [true, strIndex]; // true와 해당 문자의 위치를 저장함
      break;
    }
  }

  // 단축키 지정이 안된 문장의 첫글자가 존재할경우
  if (firstFlag[0]) {
    const tmpString = "[" + curStrings[firstFlag[1]][0] + "]"; // 괄호 씌우기
    const newString = tmpString + curStrings[firstFlag[1]].slice(1); // 문자 생성
    curStrings[firstFlag[1]] = newString; // 바뀐 문자를 넣어줌
    result.push(curStrings.join(" ")); // 결과를 담는 배열에 넣어줌
    continue; // 밑에 코드들을 무시
  }

  let otherFlag = [false, 0]; // 모든 문자 단축키 확인 플래그
  for (let strIndex = 0; strIndex < curStrings.length; strIndex++) {
    if (otherFlag[0]) break; // 2중 for문을 break 하기위한 장치

    for (
      let detailIndex = 0;
      detailIndex < curStrings[strIndex].length;
      detailIndex++
    ) {
      // 단축키 지정이 안된 문자를 발견할경우
      if (!A.includes(curStrings[strIndex][detailIndex].toLowerCase())) {
        A.push(curStrings[strIndex][detailIndex].toLowerCase());
        otherFlag = [true, strIndex, detailIndex]; // 정확한 문자 위치를 삽입
        break;
      }
    }
  }

  // 모든 문자중에 단축키 지정이 안된 문자가 있을경우
  if (otherFlag[0]) {
    const curIndex = otherFlag[1]; // 큰 단위의 문자 위치
    const detailIndex = otherFlag[2]; // 작은 단위의 디테일한 문자위치
    const tmpString = "[" + curStrings[curIndex][detailIndex] + "]";
    const newString =
      curStrings[curIndex].slice(0, detailIndex) +
      tmpString +
      curStrings[curIndex].slice(detailIndex + 1);
    curStrings[curIndex] = newString;
    result.push(curStrings.join(" "));
    continue;
  }

  // 위 코드중에 continue가 안되면 실행됨 즉 단축키지정이 안되는 문자일경우 그냥 넣음
  result.push(curStrings.join(" "));
}

result.forEach((r) => console.log(r));
