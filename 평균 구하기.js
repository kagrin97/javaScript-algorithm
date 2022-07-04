function solution(arr) {
  return arr.reduce((sum, cur) => (sum += cur)) / arr.length;
}
const arr = [1, 2, 3, 4];

console.log(solution(arr));
