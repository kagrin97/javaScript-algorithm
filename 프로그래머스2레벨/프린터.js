function solution(priorities, location) {
  var ans = [];
  let tmp = [];
  priorities.forEach((val, idx) => {
    if (location == idx) {
      tmp.push({ me: val });
    } else {
      tmp.push({ other: val });
    }
  });

  while (tmp.length > 1) {
    let [_, curVal] = Object.entries(tmp[0])[0];
    let flag = true;

    for (let i = 1; i < tmp.length; i++) {
      let [_, nextVal] = Object.entries(tmp[i])[0];
      if (curVal < nextVal) {
        tmp.push(tmp.shift());
        flag = false;
        break;
      }
    }
    if (flag) {
      ans.push(tmp.shift());
    }
  }
  ans.push(tmp.shift());

  for (let i = 0; i < ans.length; i++) {
    if (Object.keys(ans[i]) == "me") {
      return i + 1;
    }
  }
}
const priorities = [2, 1, 3, 2];
const location = 2;
console.log(solution(priorities, location));
