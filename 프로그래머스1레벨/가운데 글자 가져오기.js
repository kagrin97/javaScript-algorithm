function solution(s) {
  var ans = "";
  if (s.length % 2 == 0) {
    ans = s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    ans = s[parseInt(s.length / 2)]; // 실수 정수로 바꾸기
  }
  return ans;
}
const s = "abcde";

console.log(solution(s));
