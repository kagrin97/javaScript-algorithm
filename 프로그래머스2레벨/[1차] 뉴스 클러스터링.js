function solution(str1, str2) {
  var ans = 0;
  let a = [],
    b = [];
  let regex = /[a-zA-Z]/;

  for (let i = 0; i < str1.split("").length - 1; i++) {
    if (regex.test(str1[i]) && regex.test(str1[i + 1])) {
      a.push((str1[i] + str1[i + 1]).toUpperCase());
    }
  }

  for (let i = 0; i < str2.split("").length - 1; i++) {
    if (regex.test(str2[i]) && regex.test(str2[i + 1])) {
      b.push((str2[i] + str2[i + 1]).toUpperCase());
    }
  }

  if (a.length == 0 && b.length == 0) {
    return 65536;
  }

  const set = new Set([...a, ...b]);
  let hap = 0;
  let gyo = 0;

  set.forEach((item) => {
    const has1 = a.filter((x) => x === item).length;
    const has2 = b.filter((x) => x === item).length;
    hap += Math.max(has1, has2);
    gyo += Math.min(has1, has2);
  });

  return hap === 0 ? 65536 : Math.floor((gyo / hap) * 65536);
}

const str1 = "FRANCE";
const str2 = "french";

console.log(solution(str1, str2));
