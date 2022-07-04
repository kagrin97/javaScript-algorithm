function solution(id_list, report, k) {
  var log = {};
  var resultLog = {};

  for (i of id_list) {
    log[i] = []; // id 초기화
    resultLog[i] = 0; // 신고결과 0 초기화
  }

  for (i of report) {
    var [a, b] = i.split(" "); // 구조 분해 할당
    if (!log[b].includes(a)) {
      // 파이썬 not in과 같은
      log[b].push(a);
    }
  }

  for (i in log) {
    if (log[i].length >= k) {
      for (a of log[i]) {
        // 신고 성공한 유저 신고 카운트 +1
        resultLog[a] += 1;
      }
    }
  }

  return Object.values(resultLog); // dict모든 value 가져옴
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2;
console.log(solution(id_list, report, k));
