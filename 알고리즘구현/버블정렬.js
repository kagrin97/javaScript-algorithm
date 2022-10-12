const N = 6;
let data = [3, 5, 6, 7, 2, 1];

for (let i = 0; i < N; i++) {
  let temp;
  for (let j = 0; j < N - 1 - i; j++) {
    if (data[j] > data[j + 1]) {
      temp = data[j];
      data[j] = data[j + 1];
      data[j + 1] = temp;
    }
  }
}
console.log(data);
