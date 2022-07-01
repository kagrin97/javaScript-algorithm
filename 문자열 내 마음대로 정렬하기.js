function solution(strings, n) {
  return strings.sort().sort((a, b) => (a[n] >= b[n] ? 1 : -1));
  // 1은 뒤에있는 변수가 앞으로 간다는 뜻이고 -1은 앞변수가 뒤로간다는 뜻이다
  // 기본적으로 a,b 위치값이 반대이다 a:뒤에문자, b:앞에문자
  // b a
  // c b
  // d c
  // e d
  // f e
  // [ 'a', 'b', 'c', 'd', 'e', 'f' ] 이런순서로 값을 비교해나간다
}

const strings = ["abce", "abcd", "cdx"];
const n = 2;

console.log(solution(strings, n));
