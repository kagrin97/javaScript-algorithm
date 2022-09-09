function solution(n, stations, w) {
  let answer = 0;
  // 기지국 하나가 커버하는 범위
  const range = w * 2 + 1;

  // 기지국이 끝나고난후 남은 나머지 아파트 갯수
  const endCountApart =
    n -
    stations.reduce((prev, cur) => {
      // 전 기지국과 현재 기지국 사이 전파 안통하는 아파트 갯수
      const countApart = cur - w - 1 - prev;
      // 기지국 설치
      answer += countApart > 0 ? Math.ceil(countApart / range) : 0;
      return cur + w;
    }, 0);

  // 나머지아파트가 존재하면 나머지 아파트에 기지국설치
  if (endCountApart > 0) {
    answer += Math.ceil(endCountApart / range);
  }
  return answer;
}

// 나머지 아파트x
console.log(solution(11, [4, 11], 1));
// 나머지 아파트O
console.log(solution(16, [9], 2));
