function solution(s) {
  if (s.length === 4 || s.length === 6) {
    // 길이 체크
    for (a of s) {
      if (isNaN(a) === true) {
        // 하나씩 검사해서 숫자가 아니면 false
        return false;
      }
    }
  } else {
    return false; // 길이가 다르면 false
  }
  return true; // 결과
}

s = "a234";
console.log(solution(s));

// 이문제는 처음에 문자열 자체에 isNaN()함수를 사용했는데 5.123이나 -123같은
// 소수나 음수도 숫자라고 판단해서 문제를 틀렸었다 그래서 하나씩 꺼내면서
// 정수가 아니라면 false하는 방법을 사용했다
