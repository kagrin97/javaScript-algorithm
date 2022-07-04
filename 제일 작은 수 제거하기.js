function solution(arr) {
  var s = arr.filter((val) => val != Math.min(...arr));
  return s.length == 0 ? [-1] : s;
}

const arr = [4, 3, 2, 1];

console.log(solution(arr));
