function solution(skill, skill_trees) {
  var cnt = 0;
  let sk = skill.split("");
  let skArray = [];
  skill_trees.forEach((val) => {
    let tmp = "";
    for (let i of val) {
      if (sk.includes(i)) {
        tmp += i;
      }
    }
    skArray.push(tmp);
  });

  skArray.forEach((val) => {
    let cutVal = val.split(""),
      flag = false;
    cutVal.forEach((val, idx) => {
      if (val !== sk[idx]) {
        flag = true;
      }
    });
    if (flag) {
      cnt += 1;
    }
  });
  return skill_trees.length - cnt;
}

const skill = "CBD";
const skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];

console.log(solution(skill, skill_trees));
