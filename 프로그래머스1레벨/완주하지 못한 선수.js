function solution(participant, completion) {
  var answer = "";
  participant = participant.sort();
  completion = completion.sort();

  for (i = 0; i < completion.length; i++) {
    if (participant[i] != completion[i]) {
      return participant[i];
    }
  }
  return participant[participant.length - 1];
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

console.log(solution(participant, completion));
