function solution(arr, divisor) {
  var a = arr.filter((val) => val % divisor === 0);
  // divisor로 나누어떨어지는 숫자 배열을 만들어줌
  return a.sort((a, b) => a - b).length > 0 ? a.sort((a, b) => a - b) : [-1];
  // 배열안에 값이 있으면 오름차순 정렬해줌, sort((a, b) => a - b)
  //없을경우 [-1] 리턴
}

const arr = [5, 9, 7, 10];
const divisor = 5;
console.log(solution(arr, divisor));
