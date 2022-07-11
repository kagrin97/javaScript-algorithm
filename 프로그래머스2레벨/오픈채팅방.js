function solution(record) {
  var ans = [];
  let log = {};
  let info;
  for (i of record) {
    if (["E", "C"].includes(i[0])) {
      info = i.split(" ");
      log[info[1]] = info[2];
    }
  }

  for (i of record) {
    info = i.split(" ");
    if (i[0] == "E") {
      ans.push(`${log[info[1]]}님이 들어왔습니다.`);
    } else if (i[0] == "L") {
      ans.push(`${log[info[1]]}님이 나갔습니다.`);
    }
  }
  return ans;
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

console.log(solution(record));
