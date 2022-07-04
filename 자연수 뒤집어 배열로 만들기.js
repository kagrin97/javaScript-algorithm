function solution(n) {
  var string = String(n).split("").reverse().map(Number);

  return string;
}

const n = 12345;

console.log(solution(n));
