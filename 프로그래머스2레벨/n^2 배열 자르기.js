function solution(n, left, right) {
  var answer = [];

  for (let i = left; i < right + 1; i++) {
    let a = parseInt(i / n);
    let b = i % n;

    if (a < b) {
      answer.push(b + 1);
    } else {
      answer.push(a + 1);
    }
  }

  return answer;
}

const n = 3;
const left = 2;
const right = 5;
console.log(solution(n, left, right));
