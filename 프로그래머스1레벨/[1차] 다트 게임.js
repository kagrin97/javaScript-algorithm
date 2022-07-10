function solution(dartResult) {
  let stack = [];
  let number = "";
  for (i = 0; i < dartResult.length; i++) {
    if (["S", "D", "T"].includes(dartResult[i])) {
      stack.push(Number(number));
      number = "";
      if (dartResult[i] == "D") {
        stack[stack.length - 1] **= 2;
      } else if (dartResult[i] == "T") {
        stack[stack.length - 1] **= 3;
      }
    } else if (["*", "#"].includes(dartResult[i])) {
      if (dartResult[i] == "*") {
        if (stack.length >= 2) {
          stack[stack.length - 1] *= 2;
          stack[stack.length - 2] *= 2;
        } else {
          stack[stack.length - 1] *= 2;
        }
      } else {
        stack[stack.length - 1] *= -1;
      }
    } else {
      number += dartResult[i];
    }
  }

  return stack.reduce((acc, cur) => acc + cur);
}
const dartResult = "1S2D*3T";

console.log(solution(dartResult));
