function solution(n) {
  var string = String(n)
    .split("")
    .map(Number)
    .sort((a, b) => b - a)
    .join("");
  return Number(string);
}

const n = 118372;

console.log(solution(n));
