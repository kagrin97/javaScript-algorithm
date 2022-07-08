function solution(n) {
  return Number.parseInt(n.toString(3).split("").reverse().join(""), 3);
  // 10진법 정수를 입력받고 -> 3진법 정수로 변환후 반대로 뒤집음 -> 다시 10진법 정수로 변환
}

const n = 123;

console.log(solution(n));
