function solution(numbers) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return num
    .filter((val) => !numbers.includes(val))
    .reduce((prev, cur) => prev + cur);
  // 필터로 numbers안에 없는 숫자를 가져온다.
  // reduce로 배열안 모든 값을 더해준다.
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));
