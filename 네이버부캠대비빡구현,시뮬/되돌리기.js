// fs 모듈을 이용하여 입력값을 받습니다.
let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

// 첫 줄에 주어지는 명령어의 개수를 받아옵니다.
let N = Number(input[0]);

// 이력을 저장할 배열 q와 현재 상태를 나타내는 문자열 now를 초기화합니다.
let q = [];
let now = "";

// 각 명령어를 순회하면서 처리합니다.
for (let i = 1; i <= N; i++) {
  let flag = false;
  let [cmd, ch, t] = input[i].split(" ");

  if (cmd === "type") {
    // type 명령어의 경우 현재 상태에 문자를 추가하고 이력을 저장합니다.
    now += ch;
    q.push([Number(t), now]);
  } else {
    // undo 명령어의 경우 주어진 시간만큼 이전 상태로 되돌립니다.
    let chNum = Number(ch),
      tNum = Number(t);
    for (let j = q.length - 1; j >= 0; j--) {
      if (q[j][0] >= tNum - chNum) continue;
      flag = true;
      now = q[j][1];
      q.push([tNum, now]);
      break;
    }

    // undo 명령어 실행 후 이력에서 해당 시간 전의 상태를 찾지 못한 경우, 현재 상태를 초기화합니다.
    if (!flag) {
      now = "";
      q.push([tNum, now]);
    }
  }
  console.log(q);
}

// 마지막으로 되돌려진 상태를 출력합니다.
console.log(q[q.length - 1][1]);
