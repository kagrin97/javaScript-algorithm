const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const birdSaidArr = input.slice(1, N + 1).map((i) => i.split(" "));
const L = input[input.length - 1].split(" ");

for (let i = 0; i < L.length; i++) {
  const curWriteWord = L[i]; // cseteram가 지워야할 글자

  let flag = false; // 지웠는지 여부
  for (let b = 0; b < N; b++) {
    const birdFirstWord = birdSaidArr[b][0]; // 각 앵무새의 첫 단어

    // 같은 단어라면 해당 앵무새의 첫 단어를 삭제하고 for문 종료
    if (curWriteWord === birdFirstWord) {
      birdSaidArr[b].shift();
      flag = true;
      break;
    }
  }

  // 모든 앵무새의 첫 단어와 curWriteWord가 다르다면 순서가 안 맞음
  if (!flag) {
    console.log("Impossible");
    process.exit(0);
  }
}

// 앵무새가 말한 모든 문장을 1차원 배열로 모아줌
let arr = birdSaidArr.flat();

// 앵무새가 말한 문장중에 삭제 되지 않은 문장이 있으면 불가능하는 뜻임
if (arr.length) {
  console.log("Impossible");
} else {
  console.log("Possible");
}
