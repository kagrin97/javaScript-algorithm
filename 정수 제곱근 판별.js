function solution(n) {
  var answer = 0;

  var nSqrt = Math.sqrt(n);
  var clean = parseInt(nSqrt);

  if (nSqrt % clean == 0) {
    return (nSqrt + 1) * (nSqrt + 1);
  }

  return -1;
}

const n = 121;

console.log(solution(n));
