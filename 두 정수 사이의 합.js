function solution(a, b) {
  var total = 0;
  for (i = Math.min(a, b); i <= Math.max(a, b); i++) {
    total += i;
  } // a,b 작은수부터 큰수까지 값을 더해준다
  return total;
}
a.sort();
const a = 3;
const b = 5;
console.log(solution(a, b));
