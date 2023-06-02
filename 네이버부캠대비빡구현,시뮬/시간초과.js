const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const C = Number(input[0]);

const taseCase = input.slice(1).map((i) => i.split(" "));

for (let i = 0; i < C; i++) {
  const [S, N, T, L] = taseCase[i];

  if (S === "O(N)") {
    const time = (Number(N) * Number(T)) / Number(L);
    console.log(isRight(time));
  }
  if (S === "O(N^2)") {
    const time = (Number(N) ** 2 * Number(T)) / Number(L);
    console.log(isRight(time));
  }
  if (S === "O(N^3)") {
    const time = (Number(N) ** 3 * Number(T)) / Number(L);
    console.log(isRight(time));
  }
  if (S === "O(2^N)") {
    const time = (2 ** Number(N) * Number(T)) / Number(L);
    console.log(isRight(time));
  }
  if (S === "O(N!)") {
    let time = 1;
    for (let n = 1; n <= N; n++) {
      time *= n;
    }
    time = (time * Number(T)) / Number(L);
    console.log(isRight(time));
  }
}

function isRight(time) {
  if (time > 100000000) {
    return "TLE!";
  }

  return "May Pass.";
}
