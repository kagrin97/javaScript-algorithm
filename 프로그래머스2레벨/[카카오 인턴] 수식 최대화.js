function getPermutations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}

function solution(expression) {
  var ans = 0;
  let operator = ["*", "+", "-"];
  let tmp = "",
    numList = [];
  let regex = /[0-9]/;

  for (let i of expression) {
    if (regex.test(i)) {
      // 숫자면 숫자 넣음
      tmp += i;
    } else {
      // 연산자면 숫자 넣고 연산자 넣고 숫자 초기화
      numList.push(Number(tmp));
      numList.push(i);
      tmp = "";
    }
  }
  numList.push(Number(tmp)); // 남은 숫자 넣어줌

  for (let oper of getPermutations(operator, 3)) {
    let numStack = numList.slice(); // 배열 복사

    for (let op of oper) {
      for (let i = 0; i < numStack.length; i++) {
        if (op == numStack[i - 1]) {
          switch (op) {
            case "*":
              numStack[i] = numStack[i - 2] * numStack[i];
              (numStack[i - 2] = "$"), (numStack[i - 1] = "$");
              break;
            case "+":
              numStack[i] = numStack[i - 2] + numStack[i];
              (numStack[i - 2] = "$"), (numStack[i - 1] = "$");
              break;
            case "-":
              numStack[i] = numStack[i - 2] - numStack[i];
              (numStack[i - 2] = "$"), (numStack[i - 1] = "$");
              break;
          }
        }
      }
      numStack = numStack.filter((el) => el != "$"); // 달러표시 제거
    }
    if (ans < Math.abs(numStack[0])) {
      ans = Math.abs(numStack[0]); // 최대값 저장
    }
  }
  return ans;
}
const expression = "100-200*300-500+20";

console.log(solution(expression));
