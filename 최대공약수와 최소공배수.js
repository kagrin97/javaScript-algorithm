function solution(n, m) {
  var ans = [];
  for (i = Math.min(n, m); i > 0; i--) {
    if (n % i == 0 && m % i == 0) {
      ans.push(i);
      break;
    }
  }
  for (i = Math.max(n, m); i < n * m + 1; i++) {
    if (i % n == 0 && i % m == 0) {
      ans.push(i);
      break;
    }
  }
  return ans;
}
const n = 3;
const m = 12;

console.log(solution(n, m));
