const N = 6;
let data = [3, 5, 6, 7, 2, 1];

for (let i = 0; i < N; i++) {
  let minIndex = i;
  for (let j = i + 1; j < N; j++) {
    if (data[minIndex] > data[j]) {
      minIndex = j;
    }
  }
  if (minIndex !== i) {
    let temp = data[minIndex];
    data[minIndex] = data[i];
    data[i] = temp;
  }
}
console.log(data);
