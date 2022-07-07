function solution(left, right) {
  var ans = [];
  let cnt = 0;
  for (i = left; i <= right; i++) {
    for (j = 1; j <= i; j++) {
      if (i % j == 0) {
        cnt += 1;
      }
    }
    if (cnt % 2 == 0) {
      ans.push(i);
    } else {
      ans.push(i * -1);
    }
    cnt = 0;
  }
  return ans.reduce((acc, cur) => acc + cur);
}

const left = 13;
const right = 17;
console.log(solution(left, right));
