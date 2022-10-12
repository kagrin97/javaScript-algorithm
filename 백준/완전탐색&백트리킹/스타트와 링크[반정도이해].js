let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const halfN = N / 2;
const stats = input.slice(1).map((str) => str.split(" ").map(Number));
const check = Array(N).fill(0);
let min = Infinity;

function dfs(L, K) {
  if (L === halfN) {
    // 스타트팀에 N/2 명이 뽑혔다면

    const sTeam = [];
    const lTeam = [];
    let sSum = (lSum = 0);
    for (let i = 0; i < N; i++) {
      if (check[i]) sTeam.push(i);
      // 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
      else lTeam.push(i);
    }
    for (let i = 0; i < halfN; i++) {
      for (let j = i + 1; j < halfN; j++) {
        // (i,j), (j,i) 쌍을 계속 더해준다.
        sSum = sSum + stats[sTeam[i]][sTeam[j]] + stats[sTeam[j]][sTeam[i]];
        lSum = lSum + stats[lTeam[i]][lTeam[j]] + stats[lTeam[j]][lTeam[i]];
      }
    }
    min = Math.min(min, Math.abs(sSum - lSum));
    return;
  }

  for (let i = K; i < N; i++) {
    // 체크 배열을 스타트 팀 구성에 사용한다.
    check[i] = 1;
    dfs(L + 1, i + 1);
    check[i] = 0;
  }
}
dfs(0, 0);
console.log(min);
