function combination(arr, num) {
  const res = [];
  if (num === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combinations = combination(rest, num - 1);
    const attach = combinations.map((combination) => [v, ...combination]);
    res.push(...attach);
  });
  return res;
}

function solution(orders, course) {
  var ans = [];
  let combi;
  let menu = {};
  let maxLen = new Array(course.length).fill(0);

  for (let c = 0; c < course.length; c++) {
    for (let o of orders) {
      combi = combination(o.split(""), course[c]).map((x) => x.sort().join(""));
      for (let m of combi) {
        if (m in menu) {
          menu[m] += 1;
          if (maxLen[c] < menu[m]) {
            maxLen[c] = menu[m];
          }
        } else {
          menu[m] = 1;
        }
      }
    }
  }

  for (let c = 0; c < course.length; c++) {
    for (let m in menu) {
      if (m.length == course[c] && menu[m] == maxLen[c]) {
        ans.push(m);
      }
    }
  }

  return ans.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];

console.log(solution(orders, course));
