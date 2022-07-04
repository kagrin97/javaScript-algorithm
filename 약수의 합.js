function solution(n) {
  var ans = 0;

  for (i = 1; i < n + 1; i++) {
    if (n % i == 0) {
      ans += i;
    }
  }
  return ans;
}

const n = 3;

console.log(solution(n));
