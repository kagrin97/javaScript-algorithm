let input = require("fs")
  .readFileSync(process.platform === "linux" ? "dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

let curLine = 1;

for (let _ = 0; _ < T; _++) {
  const [N, M] = input[curLine].split(" ").map(Number);
  const docsList = input[curLine + 1].split(" ").map(Number);

  const infoList = [];

  // infoList = [[3, "Find this"],[1, "This is not"],[2, "This is not"]]
  for (let i = 0; i < N; i++) {
    if (i === M) infoList.push([docsList[i], "Find this"]);
    else infoList.push([docsList[i], "This is not"]);
  }

  while (true) {
    const [importPoint, string] = infoList.shift();

    // 맨 앞의 문서와 나머지 문서들의 중요도를 검사했을때 맨 앞 문서보다 중요한 문서가 존재할 경우
    // 맨 앞 문서를 맨 뒤로 보냄
    let flag = false;
    for (let info = 0; info < infoList.length; info++) {
      if (infoList[info][0] > importPoint) {
        infoList.push([importPoint, string]);
        flag = true;
        break;
      }
    }

    // 맨 앞 문서의 중요도가 제일 높을때 몇 번째 인쇄되는지 출력
    if (!flag) {
      if (string === "Find this") {
        console.log(N - infoList.length);
        break;
      }
    }
  }

  curLine += 2;
}
