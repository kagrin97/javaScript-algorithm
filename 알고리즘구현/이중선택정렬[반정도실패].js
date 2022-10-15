function doubleSelection(start, end) {
  while (start < end) {
    let min = start;
    let max = end;

    for (let i = start; i < end; i++) {
      if (data[i] < data[min]) {
        min = i;
      }
      if (data[i] > data[max]) {
        max = i;
      }
    }

    if (start !== min) {
      let temp = data[start];
      data[start] = data[min];
      data[min] = temp;
    }

    if (end !== max) {
      let temp = data[end];
      data[end] = data[max];
      data[max] = temp;
    }

    start++;
    end--;
    console.log(data, start, end, min, max);
  }
}

const N = 6;
let data = [3, 5, 6, 7, 2, 1];

doubleSelection(0, N);

console.log(data);
