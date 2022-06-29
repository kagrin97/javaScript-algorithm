function solution(arr) {
  return arr.filter((val, idx) => val != arr[idx + 1]);
  // filter의 첫번째는 값, 두번쨰는 인덱스, 세번쨰는 배열자체가 나온다
  // 현재값과 다음값을 비교해 다르면 값을 넣는다
}

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));
