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
