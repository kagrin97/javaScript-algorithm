function solution(n) {
  var answer = 0;

  for (i = 1; i < n; i++) {
    if (n % i == 1) {
      return i;
    }
  }
}

const n = 5;

console.log(solution(n));
