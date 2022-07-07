function solution(N, stages) {
  let ans = [];
  let log = {};
  let humanCnt = stages.length;

  for (i = 1; i <= N; i++) {
    if (humanCnt == 0) {
      // 사람이 중간에 다 떨어진 경우
      log[i] = 0; // 그이후 라운드는 0으로 처리
    } else {
      log[i] = stages.filter((val) => val == i).length / humanCnt;
      humanCnt -= stages.filter((val) => val == i).length;
    }
  }
  for (name in log) {
    ans.push([name, log[name]]); // 배열형태로 바꿔줌(정렬을 위해)
  }
  return ans.sort((a, b) => b[1] - a[1]).map((val) => Number(val[0]));
  // 내림차순 정렬후 스테이지 이름만 가져옴
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
console.log(solution(N, stages));
