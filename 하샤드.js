function solution(x) {
  var numSum = String(x)
    .split("")
    .map(Number)
    .reduce((sum, cur) => (sum += cur));

  return x % numSum == 0 ? true : false;
}

const x = 10;

console.log(solution(x));
