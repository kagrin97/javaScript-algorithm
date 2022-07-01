function solution(s) {
  return s.split("").sort().reverse().join("");
  // 정렬은 배열에서만 동작하기 떄문에 split으로 배열을 만들어주고 내림차순
  // 정렬을 한다음에 join으로 문자열을 합쳐준다
}

s = "Zbcdefg";
console.log(solution(s));
