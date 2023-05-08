function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.forEach((s, index) => {
    const [a, b] = s;
    const width = Math.max(a, b);
    const height = Math.min(a, b);

    if (width > maxW) {
      maxW = width;
    }
    if (height > maxH) {
      maxH = height;
    }
  });

  return maxW * maxH;
}

sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
