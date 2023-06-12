const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const bracket = input[0].split("");

const stack = [];
let answer = 0;
let tmp = 1; // 괄호의 값을 임시로 저장할 변수

for (let i = 0; i < bracket.length; i++) {
  // 여는 소괄호인 경우
  if (bracket[i] === "(") {
    stack.push(bracket[i]); // 스택에 추가
    tmp *= 2; // 괄호의 값을 2배로 업데이트
    continue;
  }

  // 여는 대괄호인 경우
  if (bracket[i] === "[") {
    stack.push(bracket[i]); // 스택에 추가
    tmp *= 3; // 괄호의 값을 3배로 업데이트
    continue;
  }

  // 닫는 소괄호인 경우
  if (bracket[i] === ")") {
    // 스택이 비어있거나 맨 위의 괄호가 대괄호인 경우
    if (stack.length === 0 || stack[stack.length - 1] === "[") {
      answer = 0; // 올바른 괄호 문자열이 아님을 표시
      break; // 반복문 종료
    }

    // 바로 앞의 문자가 여는 소괄호인 경우
    if (bracket[i - 1] === "(") {
      answer += tmp; // 괄호의 값을 결과에 더함
    }

    stack.pop(); // 스택에서 괄호 제거
    tmp /= 2; // 괄호의 값을 반으로 나눔
    continue;
  }

  // 닫는 대괄호인 경우
  if (bracket[i] === "]") {
    // 스택이 비어있거나 맨 위의 괄호가 소괄호인 경우
    if (stack.length === 0 || stack[stack.length - 1] === "(") {
      answer = 0; // 올바른 괄호 문자열이 아님을 표시
      break; // 반복문 종료
    }

    // 바로 앞의 문자가 여는 대괄호인 경우
    if (bracket[i - 1] === "[") {
      answer += tmp; // 괄호의 값을 결과에 더함
    }

    stack.pop(); // 스택에서 괄호 제거
    tmp /= 3; // 괄호의 값을 세분의 한 값으로 나눔
    continue;
  }
}

if (stack.length !== 0) {
  console.log(0);
} else {
  console.log(answer);
}
