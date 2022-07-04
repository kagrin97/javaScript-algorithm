function solution(num) {
  var answer = "";
  if (num % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

const num = 3;

console.log(solution(num));
