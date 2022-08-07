function solution(m, musicinfos) {
  let stack = [],
    maxLen = -1;

  m = m
    .replace(/C#/g, "H")
    .replace(/D#/g, "I")
    .replace(/F#/g, "J")
    .replace(/G#/g, "K")
    .replace(/A#/g, "L");

  for (let i = 0; i < musicinfos.length; i++) {
    let [startTime, endTime, title, akbo] = musicinfos[i].split(",");
    let [startH, startM] = startTime.split(":");
    let sT = +startH * 60 + +startM;

    let [endH, endM] = endTime.split(":");
    let eT = +endH * 60 + +endM;
    let totalT = eT - sT;

    akbo = akbo
      .replace(/C#/g, "H")
      .replace(/D#/g, "I")
      .replace(/F#/g, "J")
      .replace(/G#/g, "K")
      .replace(/A#/g, "L");

    // 악보가 총 시간보다 작으면 악보 추가
    if (totalT > akbo.length) {
      let k = 0;
      let akboLen = akbo.length;
      while (totalT > akbo.length) {
        akbo += akbo[k];
        k += 1;
        if (k >= akboLen) {
          k = 0;
        }
      }
    }
    // 재생시간보다 악보가 길면 악보를 재생시간만큼 자른다
    else if (totalT < akbo.length) {
      akbo = akbo.slice(0, totalT);
    }

    // 악보에 들었던 멜로디가 있으면
    if (akbo.includes(m)) {
      // 스택이 비어있으면 제목을추가하고 최대길이를 갱신
      if (!stack.length) {
        stack.push(title);
        maxLen = totalT;
      } else {
        // 스택이 비어있지 않고 최대길이가 재생시간보다 작으면 스택을 재할당 하고 최대길이를 갱신
        if (maxLen < totalT) {
          stack = [title];
          maxLen = totalT;
        }
      }
    }
  }

  // 스택에 값이 있으면 해당 제목을 리턴
  if (stack.length) {
    return stack[0];
  }
  return "(None)"; // 아무것도 없으면 None을 리턴
}
const m = "ABCDEFG";
const musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"];

console.log(solution(m, musicinfos));
