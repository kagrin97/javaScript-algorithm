function solution(progresses, speeds) {
  var ans = [];
  let allTime = [],
    setTime = new Set(),
    time = 1;

  for (i = 0; i < progresses.length; i++) {
    while (progresses[i] + speeds[i] * time < 100) {
      time += 1;
    }
    setTime.add(time);
    allTime.push(time);
  }
  setTime = [...setTime].sort((a, b) => a - b);

  for (i of setTime) {
    ans.push(allTime.filter((e) => i == e).length);
  }
  return ans;
}

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
console.log(solution(progresses, speeds));
