function solution(s) {
  while (isNaN(+s)) {
    s = s.replace("zero", 0);
    s = s.replace("one", 1);
    s = s.replace("two", 2);
    s = s.replace("three", 3);
    s = s.replace("four", 4);
    s = s.replace("five", 5);
    s = s.replace("six", 6);
    s = s.replace("seven", 7);
    s = s.replace("eight", 8);
    s = s.replace("nine", 9);
  }
  return +s;
}

const s = "2three45sixseven";

console.log(solution(s));

// isNaN는 매개변수가 숫자가 아니면 true, 숫자이면 false를 반환합니다
// 변수앞에 +가 붙으면 문자열이 숫자로만 있으면 숫자로 바꿔준다
// 대신 다른 문자가 섞여있으면 NaN을 리턴한다.
