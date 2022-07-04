function solution(n) {
  var ans = 0;
  var a = String(n);

  for (i of a) {
    ans += Number(i);
  }

  return ans;
}

const n = 987;

console.log(solution(n));
