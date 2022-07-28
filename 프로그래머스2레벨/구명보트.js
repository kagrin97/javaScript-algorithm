function solution(people, limit) {
  var ans = 0;
  people.sort((a, b) => a - b);
  while (people.length >= 2) {
    if (people[0] + people[people.length - 1] <= limit) {
      ans += 1;
      people.shift();
      people.pop();
    } else {
      ans += 1;
      people.pop();
    }
  }
  if (people.length) {
    ans += 1;
  }

  return ans;
}
const people = [70, 50, 80, 50];
const limit = 100;
console.log(solution(people, limit));
